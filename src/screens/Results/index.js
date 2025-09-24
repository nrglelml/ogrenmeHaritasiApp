import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header, ResultsComp, TapBar} from '../../components';


const Results = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ResultsComp  />
  
      </ScrollView>

      <View style={styles.tabBarContainer}>
        <TapBar />
      </View>
    </SafeAreaView>
  );
};

export default Results;
