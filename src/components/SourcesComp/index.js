import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles';
import {BASE_URL} from '@env';

const SourcesComp = () => {
  const [topic, setTopic] = useState('');
  const [resources, setResources] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchResources = async () => {
    if (!topic.trim()) return Alert.alert('Hata', 'Lütfen bir konu girin.');

    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/resources`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({topic}),
      });

      const data = await response.json();

      if (data.error) {
        Alert.alert('Hata', data.error);
        setResources(null);
      } else {
        setResources(data);
      }
    } catch (error) {
      Alert.alert('Hata', 'Sunucuya bağlanırken sorun oluştu.');
      setResources(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>AI Destekli Kaynak Önerileri</Text>

      <TextInput
        style={styles.input}
        placeholder="Öğrenmek istediğiniz konuyu yazın..."
        value={topic}
        onChangeText={setTopic}
      />

      <TouchableOpacity style={styles.button} onPress={fetchResources}>
        <Text style={styles.buttonText}>Önerileri Al</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#4a90e2" />}

      {resources && (
        <View style={styles.resultBox}>
          {Object.entries(resources).map(([category, items]) => (
            <View key={category} style={styles.resourceCategory}>
              <Text style={styles.categoryTitle}>{category}</Text>
              {items.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => Linking.openURL(item.link)}>
                  <Text style={styles.resourceLink}>
                    OPENAI API HATASI (API KOTA) {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default SourcesComp;
