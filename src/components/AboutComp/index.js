import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import { about_us} from '../../assets/images';

const AboutComp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.kimizContainer}>
        <Text style={styles.title}>Biz Kimiz?</Text>
        <Text style={styles.description}>
          Kişisel Öğrenme Platformu, yapay zeka teknolojisi ile her bireyin öğrenme tarzına uygun,
          kişiselleştirilmiş eğitim planları sunmayı amaçlayan bir projedir. Amacımız, öğrenme sürecini
          daha verimli, hedef odaklı ve erişilebilir hale getirmektir.
        </Text>
        <Text style={styles.description}>
          Al algoritmalarımız sayesinde öğrenciler, kendi ihtiyaçlarına göre otomatik oluşturulmuş çalışma planları,
          kaynak önerileri ve gelişim takibi gibi hizmetlerden yararlanabilir.
        </Text>
        <Image source={about_us} style={styles.image} resizeMode="contain" />
      </View>

      {/* Vizyon & Teknoloji */}
      <View style={styles.techSection}>
        <Text style={styles.sectionTitle}>Vizyonumuz & Teknolojimiz</Text>
        <View style={styles.techCardWrapper}>
          <View style={styles.techCard}>
            <Text style={styles.techCardTitle}>Yapay Zeka Tabanlı</Text>
            <Text style={styles.techCardText}>
              Kullanıcı verilerini analiz ederek size en uygun öğrenme planını üretir.
            </Text>
          </View>
          <View style={styles.techCard}>
            <Text style={styles.techCardTitle}>Kişiselleştirme</Text>
            <Text style={styles.techCardText}>
              İlgi alanlarınıza ve eksiklerinize göre özelleştirilmiş içerik sunar.
            </Text>
          </View>
          <View style={styles.techCard}>
            <Text style={styles.techCardTitle}>Herkese Ulaşım</Text>
            <Text style={styles.techCardText}>
              Platformumuz web ve mobil cihazlardan erişilebilir yapıdadır.
            </Text>
          </View>
        </View>
       
      </View>

    
    </ScrollView>
  );
};

export default AboutComp;