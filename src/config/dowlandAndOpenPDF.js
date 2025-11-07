import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import {Alert} from 'react-native';
import axios from 'axios';

export const downloadAndOpenPDF = async (url, fileName = 'roadmap.pdf') => {
  try {
    const localPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

    const response = await axios.get(url, {
      responseType: 'arraybuffer',
    });

    await RNFS.writeFile(localPath, Buffer.from(response.data), 'base64');

    await FileViewer.open(localPath, {showOpenWithDialog: true});
  } catch (error) {
    console.error('PDF indirme/açma hatası:', error);
    Alert.alert('Hata', 'PDF indirilemedi veya açılamadı.');
  }
};
