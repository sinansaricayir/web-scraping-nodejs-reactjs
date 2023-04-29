# Node.js İle Web Scraping Projesi


Proje Amacı:

Bu proje, online kitap siteleri olan kitapsepeti.com ve kitapyurdu.com'dan veri kazıma işlemini gerçekleştirerek, kitapların adı, yazarı, yayımcısı, resmi ve güncel fiyat bilgilerini toplama amacını taşımaktadır. Bu işlem için Node.js kullanılmakta ve Puppeteer kütüphanesi veri toplama işlemi için ideal bir seçim olmaktadır.

Projeye, modern bir tasarım sunmak adına, React.js kullanılarak önde yüzü oluşturulmuş ve cihazlara uyumlu, responsive bir yapı oluşturulmuştur. Arka tarafta ise, veri toplama işlemi için Node.js, Puppeteer ve Express.js gibi popüler teknolojiler kullanılmıştır. Bu sayede, web sayfalarından veri toplama işlemi hızlı ve güvenli bir şekilde gerçekleştirilir.

Toplanan veriler arasında kitap adı, yazarı, yayımcısı, resmi ve güncel fiyat bilgileri yer alır ve bu veriler MongoDB veri tabanında saklanır. API kullanılarak, frontend kısmında yer alan React.js arayüzüne erişim sağlanarak veriler görüntülenebilir. Ayrıca, sayfa içerisinde yer alan arama bölümü sayesinde, kitap adı, yazar veya yayımcı adına göre arama yapmak da mümkündür.



Proje Gereksinimleri:

Projenin çalışması için Node.js, MongoDB ve Puppeteer kütüphanesi yüklü olmalıdır. Ayrıca, frontend kısmında React.js, backend kısmında ise Express.js kullanılır. Tüm işlemler için VS Code kullanılacaktır.



Proje Kurulumu:

Proje klasörü terminalinde smartMapleProject/api dizinine giderek "npm install" komutu çalıştırılır ve gerekli tüm paketlerin kurulumu sağlanır. Bu işlem tamamlandıktan sonra "npm start" komutu ile backend başlatılır.
Daha sonra smartMapleProject/client dizininde "npm install" komutu çalıştırılarak gerekli paketler kurulur ve kurulum tamamlandıktan sonra "npm start" komutu ile frontend başlatılır. Proje localhost:3000 üzerinde frontend, localhost:4000 üzerinde ise
backend olarak çalışmaya başlar.



Proje Yapısı:

Proje, backend ve frontend kısımlarından oluşur. Backend kısmında, web sitelerinden veri kazıma işlemi gerçekleştirilir ve elde edilen veriler MongoDB veritabanına kaydedilir. Express.js kullanılarak API yazılır ve frontend tarafından verilere erişim sağlanır.
Front End kısmında React.js kullanılarak arayüz tasarlanır ve API'ye erişim sağlanarak veriler görüntülenir. Sayfa içerisindeki arama bölümü sayesinde, kitap adı, yazar veya yayımcı adına göre arama yapılabilir.



API Endpointleri:

1) http://localhost:4000/api/kitapsepeti/get-all
Bu endpoint, kitapsepeti.com'daki tüm kitapların kayıtlarını döndürür.


2)http://localhost:4000/api/kitapsepeti/add-data
Bu endpoint, kitapsepeti.com'dan kazınan verileri veritabanına kaydeder. Eğer gelen veriler zaten kaydedilmişse günceller, değilse yeni kayıt oluşturur.


3)http://localhost:4000/api/kitapyurdu/get-all
Bu endpoint, kitapyurdu.com'daki tüm kitapların kayıtlarını döndürür.


4)http://localhost:4000/api/kitapyurdu/add-data
Bu endpoint, kitapyurdu.com'dan kazınan verileri veritabanına kaydeder. Eğer gelen veriler zaten kaydedilmişse günceller, değilse yeni kayıt oluşturur.
