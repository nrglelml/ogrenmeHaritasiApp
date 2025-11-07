import axios from 'axios';
import RNFS from 'react-native-fs';
import {PermissionsAndroid, Platform} from 'react-native';
import {BASE_URL} from '@env';

export const generatePDF = async (topic) => {
  try {
    const res = await axios.post(`${BASE_URL}/generate`, { topic });

    const {resource_url, roadmap_url} = res.data;

    const downloadDir = RNFS.DownloadDirectoryPath;
    const file1 = `${downloadDir}/${topic}_resources.pdf`;
    const file2 = `${downloadDir}/${topic}_roadmap.pdf`;

    const download = async (url, path) => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        throw new Error('Storage permission not granted');
      }

      const result = await RNFS.downloadFile({
        fromUrl: url,
        toFile: path,
      }).promise;

      if (result.statusCode === 200) {
        console.log(`Downloaded to: ${path}`);
      } else {
        throw new Error('Download failed');
      }
    };

    await download(resource_url, file1);
    await download(roadmap_url, file2);

    return {success: true, file1, file2};
  } catch (error) {
    console.error('PDF generation/download error:', error);
    return {success: false, error};
  }
};
