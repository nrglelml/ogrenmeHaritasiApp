import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header, HomeSlide, TapBar} from '../../components';


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HomeSlide  />
  
      </ScrollView>

      <View style={styles.tabBarContainer}>
        <TapBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
