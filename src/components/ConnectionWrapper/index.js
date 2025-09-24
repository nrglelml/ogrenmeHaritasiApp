import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {noInternet} from '../../assets/images';
import {NetInfo, addEventListener} from '@react-native-community/netinfo';
//import {addEventListener} from '@react-native-community/netinfo';

const ConnectionWrapper = ({children}) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Image source={noInternet} style={styles.image} />
        <Text style={styles.title}>YOUR INTERNET IS NOT AVAILABLE</Text>
        <Text style={styles.description}>
          Try switching to a different connection or reset your internet to find
          a professional.
        </Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() =>
            NetInfo.fetch().then(state => setIsConnected(state.isConnected))
          }>
          <Text style={styles.retryText}>RETRY</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return children;
};

export default ConnectionWrapper;
