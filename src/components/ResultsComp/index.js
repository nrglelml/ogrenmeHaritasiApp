import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {downloadAndOpenPDF} from '../../config/dowlandAndOpenPDF';

const ResultsComp = ({route}) => {
  const {topic, resourceUrl, roadmapUrl} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{topic} için PDF Planlarınız Hazır 🎉</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          downloadAndOpenPDF(resourceUrl, `${topic}_resources.pdf`)
        }>
        <Text style={styles.buttonText}>Resources PDF'ini İndir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => downloadAndOpenPDF(roadmapUrl, `${topic}_roadmap.pdf`)}>
        <Text style={styles.buttonText}>Roadmap PDF'ini İndir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2b78e4',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {color: '#fff', fontSize: 16, textAlign: 'center'},
});

export default ResultsComp;
