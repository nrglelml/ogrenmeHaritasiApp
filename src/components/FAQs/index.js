import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {dataFaqs} from '../../assets/data/dataFaqs';
import styles from './styles';

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredFaqs = dataFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleToggle = index => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Sıkça Sorulan Sorular</Text>
      <Text style={styles.subtitle}>
        Kullanıcılarımızdan gelen en yaygın sorulara yanıt bulabilirsiniz.
      </Text>

      
      <View style={styles.faqContainer}>
        {filteredFaqs.map((faq, index) => (
          <TouchableOpacity
            key={faq.id}
            style={[
              styles.faqItem,
              expandedIndex === index && styles.faqItemActive,
            ]}
            onPress={() => handleToggle(index)}>
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            {expandedIndex === index && (
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default FAQs;
