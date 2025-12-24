import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {downloadAndOpenPDF} from '../../config/dowlandAndOpenPDF';

const ResultsComp = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  
  const {topic, resourceUrl, roadmapUrl} = route.params || {};

 
  const cleanTopic = topic ? topic.replace(/\s+/g, '_') : 'Ogrenme_Plani';

  const handleDownload = (url, suffix) => {
    if (!url) {
      Alert.alert("Hata", "Link bulunamadı.");
      return;
    }
    
    
    const fileName = `${cleanTopic}_${suffix}.pdf`;
    
    downloadAndOpenPDF(url, fileName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{topic || "Konu Belirsiz"}</Text>
      <Text style={styles.subTitle}>
        {topic ? "Kişiselleştirilmiş planlarınız hazır." : "Veri alınamadı."}
      </Text>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#2ecc71', opacity: resourceUrl ? 1 : 0.6}]}
        disabled={!resourceUrl}
       
        onPress={() => handleDownload(resourceUrl, 'resources')}>
        <Text style={styles.buttonText}>📄 Kaynakları İndir (Resources)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#3498db', opacity: roadmapUrl ? 1 : 0.6}]}
        disabled={!roadmapUrl}
        
        onPress={() => handleDownload(roadmapUrl, 'roadmap')}>
        <Text style={styles.buttonText}>🚀 Yol Haritasını İndir (Roadmap)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#95a5a6', marginTop: 20}]}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>⬅️ Yeni Arama</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>
        *Dosyalar 'İndirilenler' klasörüne kaydedilecektir.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#2c3e50', marginBottom: 10, textAlign: 'center' },
  subTitle: { fontSize: 16, color: '#7f8c8d', marginBottom: 40, textAlign: 'center' },
  button: { width: '100%', padding: 16, borderRadius: 12, marginBottom: 20, elevation: 3 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600', textAlign: 'center' },
  infoText: { marginTop: 20, fontSize: 12, color: '#bdc3c7' },
});

export default ResultsComp;