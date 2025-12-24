import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {generatePDF} from '../../config/generatePDF';

const AITalkComp = () => {
  const [userInput, setUserInput] = useState('');
  const [durationInput, setDurationInput] = useState('');
  const [loading, setLoading] = useState(false);

  const scrollViewRef = useRef();

  const [conversation, setConversation] = useState([
    {
      sender: 'ai',
      message:
        'Merhaba! Hangi konuyu öğrenmek istiyorsunuz? (Örn: Python, Türev)',
    },
  ]);

  const navigation = useNavigation();

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    const userMessage = durationInput
      ? `${userInput} (${durationInput} sürede)`
      : userInput;

    setConversation(prev => [
      ...prev,
      {sender: 'user', message: userMessage},
      {
        sender: 'ai',
        message:
          'Veri setiniz analiz ediliyor ve PDF planları oluşturuluyor... Lütfen bekleyin.',
      },
    ]);

    setLoading(true);

    const result = await generatePDF(userInput.trim(), durationInput.trim());

    setLoading(false);

    if (result.success) {
      const {resource_url, roadmap_url} = result.data;

      navigation.navigate('Results', {
        topic: userInput.trim(),
        resourceUrl: resource_url,
        roadmapUrl: roadmap_url,
      });

      setConversation(prev => [
        ...prev,
        {sender: 'ai', message: 'Planlarınız hazır!'},
      ]);
    } else {
      setConversation(prev => [
        ...prev,
        {
          sender: 'ai',
          message:
            'Bir hata oluştu: ' +
            (result.error?.message || 'Sunucu yanıt vermedi.'),
        },
      ]);
    }

    setUserInput('');
    setDurationInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kişisel Öğrenme Asistanı</Text>

      <ScrollView
        style={styles.chatContainer}
        contentContainerStyle={styles.chatContent}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        {conversation.map((msg, index) => (
          <View
            key={index}
            style={msg.sender === 'ai' ? styles.aiMessage : styles.userMessage}>
            <Text style={styles.messageText}>{msg.message}</Text>
          </View>
        ))}
        {loading && (
          <ActivityIndicator
            size="small"
            color="#0000ff"
            style={{marginTop: 10}}
          />
        )}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              {flex: 0.4, marginRight: 5, borderColor: '#ccc', borderWidth: 1},
            ]}
            placeholder="Süre (4 ay)"
            placeholderTextColor="#999"
            value={durationInput}
            onChangeText={setDurationInput}
          />

          <TextInput
            style={[
              styles.input,
              {flex: 0.6, borderColor: '#ccc', borderWidth: 1},
            ]}
            placeholder="Konu / Ders"
            placeholderTextColor="#999"
            value={userInput}
            onChangeText={setUserInput}
          />

          <TouchableOpacity
            style={[styles.sendButton, loading && {backgroundColor: '#ccc'}]}
            onPress={handleSend}
            disabled={loading}>
            <Text style={styles.sendButtonText}>Planı Oluştur</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{fontSize: 10, color: 'gray', marginLeft: 5, marginBottom: 5}}>
          * Süre boş bırakılırsa "Seviye Bazlı" plan oluşturulur.
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AITalkComp;
