import {
  SafeAreaView,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header, TapBar, AITalkComp} from '../../components';

const AITalk = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <AITalkComp />
      </ScrollView>

      <KeyboardAvoidingView
        behavior="height" 
        style={styles.keyboardAvoidingView}>
        <View style={styles.tabBarContainer}>
          <TapBar />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AITalk;
