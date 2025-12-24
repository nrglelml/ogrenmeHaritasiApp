import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import {Alert, Platform} from 'react-native';

export const downloadAndOpenPDF = async (url, fileName) => {
  try {
    if (!url) {
      Alert.alert('Hata', 'Link boş.');
      return;
    }

    const safeUrl = url.trim().replace('http://', 'https://');

    let cleanFileName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');

    if (!cleanFileName.toLowerCase().endsWith('.pdf')) {
      cleanFileName += '.pdf';
    }

    const localFile = `${RNFS.DocumentDirectoryPath}/${cleanFileName}`;

    console.log(` İndiriliyor: ${safeUrl}`);

    const options = {
      fromUrl: safeUrl,
      toFile: localFile,
    };

    const result = await RNFS.downloadFile(options).promise;

    if (result.statusCode === 200) {
      const fileStats = await RNFS.stat(localFile);
      if (fileStats.size < 500) {
        Alert.alert('Hata', 'Dosya oluşturulamadı (Sunucu hatası).');
        return;
      }

      console.log(' Dosya indi, Paylaşım hazırlanıyor...');

      // 3. BASE64 OKUMA
      const base64Data = await RNFS.readFile(localFile, 'base64');

      if (!base64Data) {
        throw new Error('Dosya verisi okunamadı.');
      }

      const pdfContent = `data:application/pdf;base64,${base64Data}`;

      try {
        await Share.open({
          url: pdfContent,
          failOnCancel: false,
        });
      } catch (shareError) {
        console.log(
          'Share açılmadı, manuel kaydetmeye geçiliyor...',
          shareError,
        );

        const downloadDest = `${RNFS.DownloadDirectoryPath}/${cleanFileName}`;
        await RNFS.copyFile(localFile, downloadDest);

        Alert.alert(
          'Dosya Kaydedildi',
          `Paylaşım ekranı açılamadı ama dosya başarıyla cihazınıza kaydedildi.\n\nKonum: İndirilenler/${cleanFileName}`,
        );
      }
    } else {
      Alert.alert('Hata', 'İndirme başarısız oldu.');
    }
  } catch (error) {
    console.error('İşlem Hatası:', error);
    if (!error.message?.includes('User did not share')) {
      Alert.alert('Hata', 'Bir sorun oluştu: ' + error.message);
    }
  }
};
