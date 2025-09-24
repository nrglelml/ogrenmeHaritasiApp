import React from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {logo}from '../../assets/images';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.grayCont}>
          <View style={styles.greetingView}>
            <Image source={logo} style={styles.user} />
            <Text style={styles.greetingText}>Kişisel Öğrenme Platformu</Text>
          </View>
        </View>
     
      </View>

    </View>
  );
};

export default Header;
