import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {hero} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

const HomeSlide = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>
            AI Destekli Kişisel Öğrenme Platformu
          </Text>
        <View style={styles.heroTextContainer}>
          
          <Text style={styles.heroDescription}>
            Öğrenme hedeflerinize en uygun yol haritasını oluşturun. Yapay zeka
            desteğiyle ilerleyin.
          </Text>
         
        </View>
        <Image source={hero} style={styles.heroImage} resizeMode="contain" />
      
      </View>
        <View>
           <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate('AITalk')}>
            <Text style={styles.ctaButtonText}>Planını Hazırla</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.featuresSection}>
        <View style={styles.featureBox}>
          <Text style={styles.featureIcon}>🧠</Text>
          <Text style={styles.featureTitle}>Kişisel Analiz</Text>
          <Text style={styles.featureDescription}>
            {' '}
            Öğrenci davranış verilerine dayalı analizler.
          </Text>
        </View>
        <View style={styles.featureBox}>
          <Text style={styles.featureIcon}>📚</Text>
          <Text style={styles.featureTitle}>Kapsamlı Kaynaklar</Text>
          <Text style={styles.featureDescription}>
            Kitap, video ve kurs önerileri tek yerde.
          </Text>
        </View>
        <View style={styles.featureBox}>
          <Text style={styles.featureIcon}>💾</Text>
          <Text style={styles.featureTitle}>PDF & Word Çıktı</Text>
          <Text style={styles.featureDescription}>
            Planlarınızı düzenleyin ve indirin.
          </Text>
        </View>
      </View>

      {/* STATS */}
      <View style={styles.statsSection}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>10K+</Text>
          <Text style={styles.statLabel}>Kullanıcı</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>20%</Text>
          <Text style={styles.statLabel}>Performans Artışı</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>50+</Text>
          <Text style={styles.statLabel}>Desteklenen Konu</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeSlide;
