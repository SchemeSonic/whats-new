const TAG_SETTINGS = {
  NEW_FEATURE: {
    text: 'New Feature',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#99d066',
  },
  IMPROVEMENT: {
    text: 'Improvement',
    color: '#fff',
    backgroundColor: '#ed8c22',
  },
  ANNOUNCEMENT: {
    text: 'Announcement',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#5eb8ff',
  },
};

export const announcements = [
  {
    title: 'TRAKAP Yeni Güncelleme Sistemi',
    date: new Date(),
    version: 'v1.0.0',
    tags: [TAG_SETTINGS.NEW_FEATURE],
    overview: `
Merhabalar,

6 aydır yoğun bir şekilde çalıştığımız METIS Versiyon 2 güncellemesi birçok yeni özellik ve iyileştirmeyle kullanıma hazır. Yeni versiyonumuzla bu yazın çok verimli geçeceğine inanıyoruz.

![](https://app.getbeamer.com/pictures?id=206319-OO-_vWhjYe-_vUkpYifvv73vv70vT--_ve-_ve-_ve-_vWom77-977-9X--_ve-_vQNK77-9YlpI77-9)`,
    content: `
Merhabalar,

6 aydır yoğun bir şekilde çalıştığımız METIS Versiyon 2 güncellemesi birçok yeni özellik ve iyileştirmeyle kullanıma hazır. Yeni versiyonumuzla bu yazın çok verimli geçeceğine inanıyoruz.

![](https://app.getbeamer.com/pictures?id=206319-OO-_vWhjYe-_vUkpYifvv73vv70vT--_ve-_ve-_ve-_vWom77-977-9X--_ve-_vQNK77-9YlpI77-9)

# Yeni Modüller

Metis v2 güncellemesi ile birlikte Bildirim ve Haberler modülleri sisteme eklendi.

### Bildirim

Metis platformunda takip etmeniz gereken her şeyden çok daha kolay haberdar olabilmenizi sağlayacak _Bildirim_ modülümüz Metis v2 ile hazır.

*   Uygulama bazlı sekme özelliği ile bildirimler rahatlıkla fark edilebilecek.
*   Bildirimleri okumaktan daha fazlasını yapabileceksiniz. Bildirime özel aksiyon alma özelliği ile tasarlanan yeni modülümüz önümüzdeki günlerde okumanın yanı sıra bildirimlerle ilgili kolay aksiyon alabilme özelliklerini de sunacak.
*   Yeni bildirim sistemi ile birlikte ana haritanın sağında bulunan bildirim paneli kaldırıldı. Bildirim modülüne ilk kez yeni versiyon modülü entegre edildi ve Metis v2 ile birlikte artık her güncelleme sonrası bildirim yayınlanarak güncelleme içerikleri paylaşılacak.
*   Kademeli şekilde Metis sistemindeki bütün bildirimler yeni bildirim modülüne taşınacaktır

![](https://miro.medium.com/max/1400/1*D9coiyG5R0IciHGBLm7v3g.png)

### Haberler

Metis ile ilgili bütün haberlere ulaşabileceğiniz haberler modülü yayında.İlk etapta _VersiyonNotlarının_ paylaşılacağı haberler modülüne önümüzdeki güncellemelerde Metis kilometre taşları, bilgilendirici blog yazıları ve şehrin aylık iyileşmelerini gösteren çeşitli paylaşımlar eklenecek.

*   Sol navigasyon menüsüne eklenmiştir.
*   Eklenen haber detaylarını inceleyip, beğenebilir ve yorum bırakabilirsiniz.

`,
  },
];
