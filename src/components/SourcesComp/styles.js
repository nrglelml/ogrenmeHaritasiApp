// styles.js

import {StyleSheet} from 'react-native';

// Tutarlı bir renk paleti tanımlayalım
const COLORS = {
  primary: '#4a90e2', // Ana düğme ve link rengi (koddaki ActivityIndicator'dan aldım)
  white: '#FFFFFF',
  black: '#222',
  grayDark: '#555',
  grayLight: '#ddd',
  grayBackground: '#f5f5f5',
  error: '#e74c3c',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ekranı doldur ama içerik taşarsa kaydır
    padding: 20,
    backgroundColor: COLORS.grayBackground,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: COLORS.white,
    borderColor: COLORS.grayLight,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultBox: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 15,
    borderColor: '#eee',
    borderWidth: 1,
  },
  resourceCategory: {
    // Kategoriler arasına boşluk koy
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  resourceLink: {
    fontSize: 16,
    color: COLORS.primary, // Tıklanabilir linkler mavi
    paddingVertical: 8,
    textDecorationLine: 'underline', // Link olduğunu belirt
  },
  resourceItem: {
    fontSize: 16,
    color: COLORS.grayDark, // Tıklanamayan normal metin
    paddingVertical: 8,
  },
  resourceItem: {
    fontSize: 15,
    color: '#333',
    marginVertical: 4,
  },
  resourceLink: {
    fontSize: 15,
    color: '#2b78e4',
    textDecorationLine: 'underline',
    marginVertical: 4,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 12,
    color: '#000',
  },
});

export default styles;
