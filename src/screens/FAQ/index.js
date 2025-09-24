import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header, TapBar, FAQs} from '../../components';

const FAQ = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FAQs />
      </ScrollView>

      <View style={styles.tabBarContainer}>
        <TapBar />
      </View>
    </SafeAreaView>
  );
};

export default FAQ;
