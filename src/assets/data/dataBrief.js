import {bookShelf, pcScreen, roadMap} from '../images';
export const dataBrief = [
  {
    id: 1,
    title: 'Kişiselleştirilmiş Yol Haritası',
    description:
      'Yapay zeka destekli analizlerimizle size özel bir öğrenme planı oluşturuyoruz. Hedeflerinize en uygun adımları belirleyin ve başarıya ulaşın.',
    buttonText: 'Planınızı Keşfedin',
    image: roadMap,
    routeName: 'AITalk',
  },
  {
    id: 2,
    title: 'Eğitim Kaynakları Önerileri',
    description:
      'Alanınıza ve ilgi alanlarınıza uygun video, kitap, makale ve online kurs önerileri alın. Öğrenme sürecinizi hızlandırın.',
    buttonText: 'Kaynakları Görüntüle',
    image: bookShelf,
    routeName: 'Sources',
  },
  {
    id: 3,
    title: 'Hızlı ve Kolay Erişim',
    description: 'Daha fazla bilgi almak için ;',
    buttonText: 'Hakkımızda',
    image: pcScreen,
    routeName: 'About',
  },
];
