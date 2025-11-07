import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import {BASE_URL} from '@env';

// 🔗 Yardımcı fonksiyon: Link kontrolü
const isLink = text => {
  if (typeof text !== 'string') return false;
  return text.startsWith('http://') || text.startsWith('https://');
};

const SourcesComp = () => {
  const [topic, setTopic] = useState('');
  const [resources, setResources] = useState(null);
  const [loading, setLoading] = useState(false);

  // 📡 API isteği
  const fetchResources = useCallback(async () => {
    if (!topic.trim()) {
      Alert.alert('Hata', 'Lütfen bir konu girin.');
      return;
    }

    setLoading(true);
    setResources(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 sn

    try {
      const response = await fetch(`${BASE_URL}/resources`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({topic}),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      if (data.error) {
        Alert.alert('Hata', data.error);
      } else {
        setResources(data);
      }
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        Alert.alert(
          'Hata',
          'İstek zaman aşımına uğradı. Lütfen tekrar deneyin.',
        );
      } else {
        Alert.alert('Hata', 'Sunucuya bağlanırken sorun oluştu.');
      }
    } finally {
      setLoading(false);
    }
  }, [topic]);

  // 🔗 Link açma işlemi
  const handleItemPress = useCallback(async url => {
    if (!url || !isLink(url)) return;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) await Linking.openURL(url);
      else Alert.alert('Hata', `Bu bağlantı açılamıyor: ${url}`);
    } catch (err) {
      console.error('Link açma hatası:', err);
      Alert.alert('Hata', 'Bağlantı açılırken bir sorun oluştu.');
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>AI Destekli Kaynak Önerileri</Text>

      <TextInput
        style={styles.input}
        placeholder="Öğrenmek istediğiniz konuyu yazın..."
        value={topic}
        onChangeText={setTopic}
      />

      <TouchableOpacity
        style={[styles.button, loading && {opacity: 0.6}]}
        onPress={fetchResources}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Yükleniyor...' : 'Önerileri Al'}
        </Text>
      </TouchableOpacity>

      {/* 📦 Gelen veriler */}
      {resources ? (
        <View style={styles.resultBox}>
          {Object.entries(resources).map(([category, items]) => (
            <View key={category} style={styles.resourceCategory}>
              <Text style={styles.categoryTitle}>{category}</Text>

              {Array.isArray(items) && items.length > 0 ? (
                items.map((item, index) => {
                  // 🧠 Item tipi: string mi, object mi?
                  let displayText = '';
                  let link = null;

                  if (typeof item === 'string') {
                    displayText = item;
                    if (isLink(item)) link = item;
                  } else if (typeof item === 'object' && item !== null) {
                    displayText = item.title || JSON.stringify(item);
                    link = item.link || null;
                    if (item.author) displayText += ` - ${item.author}`;
                  } else {
                    return null; // geçersiz veri
                  }

                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleItemPress(link)}
                      disabled={!link}>
                      <Text
                        style={
                          link ? styles.resourceLink : styles.resourceItem
                        }>
                        {displayText}
                      </Text>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <Text style={{color: 'gray'}}>Veri yok</Text>
              )}
            </View>
          ))}
        </View>
      ) : (
        !loading && (
          <Text style={{textAlign: 'center', marginTop: 20, color: 'gray'}}>
            Henüz bir arama yapılmadı.
          </Text>
        )
      )}
    </ScrollView>
  );
};

export default SourcesComp;
