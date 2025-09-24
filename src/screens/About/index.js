import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header, TapBar,AboutComp} from '../../components';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <AboutComp/>
      </ScrollView>

      <View style={styles.tabBarContainer}>
        <TapBar />
      </View>
    </SafeAreaView>
  );
};

export default About;
