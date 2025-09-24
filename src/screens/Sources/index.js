import React from 'react';
import {SafeAreaView,ScrollView,View} from 'react-native';
import {SourcesComp, Header, TapBar} from '../../components';
import styles from './styles';

const Sources = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SourcesComp />
      </ScrollView>
      <View style={styles.tabBarContainer}>
        <TapBar />
      </View>
    </SafeAreaView>
  );
};

export default Sources;
