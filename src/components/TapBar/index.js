import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { home, source, faq, about } from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

const TapBar = (props) => {
  props=navigation;
  const navigation = useNavigation();

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabButton} onPress={()=>navigation.navigate('Home')} >
        <Image source={home} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}  onPress={()=>navigation.navigate('Sources')}>
        <Image source={source} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.startButton} onPress={()=>navigation.navigate('AITalk')}>
        <Text style={styles.startButtonText}>Başla</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}  onPress={()=>navigation.navigate('FAQ')}>
        <Image source={faq} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton}  onPress={()=>navigation.navigate('About')}>
        <Image source={about} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default TapBar;
