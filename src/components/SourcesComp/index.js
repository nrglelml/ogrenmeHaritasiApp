import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
  Alert,
  Image,
  ActivityIndicator,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {BASE_URL} from '@env';

const SourcesComp = () => {
  const [topic, setTopic] = useState('');
  const [resources, setResources] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchResources = useCallback(async () => {
    if (!topic.trim()) {
      Alert.alert('Uyarı', 'Lütfen bir konu girin.');
      return;
    }

    Keyboard.dismiss(); 
    setLoading(true);
    setResources(null);

    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      console.log(`📡 Kaynaklar aranıyor: ${topic}`);
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
        Alert.alert('Zaman Aşımı', 'Arama çok uzun sürdü. Lütfen tekrar deneyin.');
      } else {
        Alert.alert('Hata', 'Sunucuya bağlanılamadı.');
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  }, [topic]);

  const openLink = async (url) => {
    if (!url) return;
    try {
     
      const safeUrl = url.trim().replace("http://", "https://");
      const supported = await Linking.canOpenURL(safeUrl);
      
      if (supported) {
        await Linking.openURL(safeUrl);
      } else {
        
        await Linking.openURL(safeUrl); 
      }
    } catch (err) {
      Alert.alert('Hata', 'Link açılamadı: ' + err.message);
    }
  };

  
  const getCategoryLabel = (key) => {
    switch(key) {
      case 'Videos': return '🎬 Video Dersler';
      case 'Articles': return '📚 Makaleler & Rehberler';
      case 'Courses': return '🎓 Kurslar & Sertifikalar';
      case 'Wikipedia': return '📖 Wikipedia Özeti';
      default: return key;
    }
  };

  const renderItem = (item, category) => {
  
    
    return (
      <TouchableOpacity
        key={item.url + Math.random()} 
        style={styles.card}
        onPress={() => openLink(item.url)}
        activeOpacity={0.7}
      >
        
        {category === 'Videos' && item.thumbnail && (
          <Image 
            source={{uri: item.thumbnail}} 
            style={styles.thumbnail} 
            resizeMode="cover" 
          />
        )}

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
          
         
          <Text style={styles.cardDesc} numberOfLines={3}>
            {item.desc || item.summary || 'Açıklama bulunamadı.'}
          </Text>

        
          <Text style={styles.linkText}>🔗 Kaynağa Git</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Kaynak Bulucu 🔍</Text>
        <Text style={styles.subHeader}>Gerçek videolar, makaleler ve kurslar.</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Örn: Python, Türev, İngilizce..."
          placeholderTextColor="#999"
          value={topic}
          onChangeText={setTopic}
          onSubmitEditing={fetchResources}
        />
        <TouchableOpacity
          style={[styles.button, loading && {opacity: 0.7}]}
          onPress={fetchResources}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.buttonText}>Ara</Text>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.resultsContainer}>
        {resources ? (
          Object.entries(resources).map(([category, items]) => {
            if (!items || items.length === 0) return null;

            return (
              <View key={category} style={styles.categorySection}>
                <Text style={styles.categoryTitle}>{getCategoryLabel(category)}</Text>
                {items.map(item => renderItem(item, category))}
              </View>
            );
          })
        ) : (
          !loading && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                Güvenilir eğitim kaynaklarına ulaşmak için bir konu arayın.
              </Text>
            </View>
          )
        )}
      
        <View style={{height: 50}} /> 
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subHeader: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000', 
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e1e4e8',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultsContainer: {
    padding: 15,
  },
  categorySection: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 10,
    marginLeft: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    paddingLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 180, 
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
    marginBottom: 10,
  },
  linkText: {
    color: '#3498db',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'right',
  },
  emptyState: {
    marginTop: 50,
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#95a5a6',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SourcesComp;