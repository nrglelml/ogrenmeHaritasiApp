import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {generatePDF} from '../../config/generatePDF';

const AITalkComp = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([
    {sender: 'ai', message: 'Merhaba! Size nasıl yardımcı olabilirim?'},
  ]);

  const navigation = useNavigation();

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    setConversation(prev => [
      ...prev,
      {sender: 'user', message: userInput},
      {sender: 'ai', message: 'PDF planları oluşturuluyor...'},
    ]);

    const result = await generatePDF(userInput.trim());

    if (result.success) {
      const {resource_url, roadmap_url} = result.data;

      navigation.navigate('Results', {
        topic: userInput.trim(),
        resourceUrl: resource_url,
        roadmapUrl: roadmap_url,
        message: 'PDF planlarınız başarıyla oluşturuldu!',
      });
    } else {
      setConversation(prev => [
        ...prev,
        {
          sender: 'ai',
          message:
            'Bir hata oluştu: ' + (result.error?.message || 'Bilinmeyen hata'),
        },
      ]);
    }

    setUserInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Öğrenme Planınızı Oluşturmaya Başlayın!</Text>
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>
          Yapay Zeka ile Neler Yapabilirsiniz?
        </Text>
        <Text style={styles.featuresItem}>
          - Size özel öğrenme planları oluşturur.
        </Text>
        <Text style={styles.featuresItem}>
          - Çalışma alışkanlıklarınıza göre kaynak önerir.
        </Text>
        <Text style={styles.featuresItem}>
          - Eğitimdeki performansınızı takip eder.
        </Text>
        <Text style={styles.featuresItem}>
          - Karmaşık soruları analiz edip cevaplar verir.
        </Text>
      </View>

      <ScrollView
        style={styles.chatContainer}
        contentContainerStyle={styles.chatContent}>
        {conversation.map((msg, index) => (
          <View
            key={index}
            style={msg.sender === 'ai' ? styles.aiMessage : styles.userMessage}>
            <Text style={styles.messageText}>{msg.message}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mesajınızı yazın..."
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AITalkComp;
