import axios from 'axios';
import RNFS from 'react-native-fs';
import {PermissionsAndroid, Platform} from 'react-native';
import {BASE_URL} from '@env';

export const generatePDF = async (topic, duration = null) => {
  try {
    console.log(`📡 İstek gönderiliyor: ${topic} (Bekleme süresi artırıldı)`);

    const res = await axios.post(
      `${BASE_URL}/generate`,
      {
        topic,
        duration: duration ? duration : null,
        source: 'mobile',
      },
      {
        timeout: 120000,
      },
    );

    const {resource_url, roadmap_url} = res.data;

    return {
      success: true,
      data: {resource_url, roadmap_url},
    };
  } catch (error) {
    console.error('PDF generation error:', error);
    return {success: false, error};
  }
};
