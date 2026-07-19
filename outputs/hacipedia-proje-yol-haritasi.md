# Hacipedia Proje Yol Haritasi

## Proje Amaci

Hacipedia, sadece hac ve umre konusuna odaklanan hizli, sade, SEO guclu ve ansiklopedi mantiginda calisan bir bilgi sitesi olacak. Site; rehberler, soru-cevap, araclar, listeler, sozlukler ve guncel bilgilendirme alanlariyla hac ve umreye hazirlanan kisilere pratik bir kaynak sunacak.

WordPress ve Elementor yerine once statik HTML tasarimlari hazirlanacak. Tasarim dili ve sayfa yapilari oturduktan sonra proje ozel PHP + MySQL tabanli bir sisteme cevrilecek. Son asamada admin paneli, cache, SEO ve guvenlik katmanlari eklenecek.

## Genel Teknoloji Karari

- Frontend: HTML, CSS, az miktarda vanilla JavaScript
- Backend: PHP 8+
- Veritabani: MySQL veya MariaDB
- Panel: Ozel admin panel
- Tasarim hedefi: Wikipedia gibi bilgi odakli, ama daha modern ve mobil uyumlu
- Performans hedefi: Cok hizli acilan, sade, cache destekli sayfalar

## Asama 1: Bilgi Mimarisi ve Tasarim Sistemi

1. Site haritasi netlestirilecek.
2. Ana navigasyon yapisi belirlenecek.
3. Renk paleti, tipografi, butonlar, kartlar, tablo tasarimlari ve form elemanlari olusturulacak.
4. Ortak header, footer, mobil menu ve arama alani tasarlanacak.
5. Site dili bilgi sitesi ciddiyetinde ama sicak ve kolay okunur olacak.

## Asama 2: HTML Sayfa Tasarimlari

Bu asamada hic PHP yazmadan, sayfa sayfa statik HTML/CSS tasarimlari yapilacak.

1. Ana Sayfa
   - Hac ve umre icin iki ana giris
   - Arama kutusu
   - One cikan rehberler
   - Soru-cevap kisa alani
   - Araclar kisa yollari
   - Son blog yazilari

2. Umre Rehberi Sayfasi
   - Adim adim umre anlatimi
   - Hazirlik, ihram, tavaf, say, tras/halak bolumleri
   - Ilk kez gidecekler icin ozet akisi
   - Ilgili sorular ve ilgili yazilar

3. Hac Rehberi Sayfasi
   - Hac cesitleri
   - Gun gun hac akisi
   - Arafat, Muzdelife, Mina, seytan taslama, kurban, tavaf bolumleri
   - Ilgili sorular ve ilgili yazilar

4. Soru-Cevap Liste Sayfasi
   - Kategorilere gore soru filtreleme
   - En yeni sorular
   - En cok okunan sorular
   - Kayitsiz soru sorma butonu

5. Soru Detay Sayfasi
   - Soru basligi
   - Soru detayi
   - Onayli cevap
   - Benzer sorular
   - Yorum/ek cevap alani opsiyonel

6. Soru Sor Sayfasi
   - Kayitsiz soru formu
   - Ad/rumuz
   - E-posta opsiyonel
   - Kategori secimi
   - Soru basligi ve detay
   - Onay bekleme bilgilendirmesi

7. Blog Liste Sayfasi
   - Kategori filtreleri
   - Makale kartlari
   - SEO uyumlu liste yapisi

8. Blog/Makale Detay Sayfasi
   - Temiz okuma alani
   - Icindekiler
   - Ilgili rehberler
   - Ilgili sorular

9. Araclar Sayfasi
   - Doviz / Riyal hesaplayici
   - Ihtiyac listesi
   - Yol guzergahlari
   - Arapca sozluk
   - Dua ve zikir alanlari
   - Terimler sozlugu

10. Ihtiyac Listesi Sayfasi
    - Hac listesi
    - Umre listesi
    - Kadinlar icin ek liste
    - Yaslilar/saglik icin ek liste
    - Yazdirilabilir kontrol listesi

11. Acil Numaralar Sayfasi
    - Turkiye ilgili kurumlari
    - Suudi Arabistan acil numaralari
    - Konsolosluk/iletisim bilgileri icin alan
    - Otel, kafile baskani, rehber notlari icin kullaniciya ozel bos alan

12. Yol Guzergahlari Sayfasi
    - Mekke, Medine, Mina, Arafat, Muzdelife gibi bolgeler
    - Temel ulasim bilgileri
    - Harita entegrasyonuna hazir tasarim

13. Doviz / Riyal Hesaplayici Sayfasi
    - TRY/SAR hesaplayici
    - Manuel kur guncelleme alani
    - Sonradan otomatik kur entegrasyonuna hazir yapi

14. Arapca Sozluk Sayfasi
    - Hac ve umrede lazim olabilecek kelimeler
    - Turkce, Arapca, okunus, anlam
    - Kategori ve arama

15. Terimler Sozlugu Sayfasi
    - Tavaf, say, ihram, mikat, vakfe gibi kavramlar
    - Alfabetik dizin
    - Detay sayfasina hazir yapi

16. Mekan Rehberi Sayfasi
    - Kabe
    - Mescid-i Nebevi
    - Safa-Merve
    - Arafat
    - Muzdelife
    - Mina
    - Cennetul Baki

17. Hakkimizda Sayfasi
    - Hacipedia'nin amaci
    - Icerik politikasi
    - Dini hassasiyet ve kaynak yaklasimi

18. Iletisim Sayfasi
    - Iletisim formu
    - Icerik duzeltme bildirimi
    - Is birligi/oneriler

## Asama 3: PHP Sistem Mimarisi

HTML tasarimlari bittikten sonra PHP tarafina gecilecek.

1. Dosya yapisi kurulacak.
2. Ortak layout sistemi yapilacak.
3. Router veya temiz URL sistemi kurulacak.
4. Veritabani baglanti katmani yazilacak.
5. Guvenli form isleme mantigi eklenecek.
6. Basit template sistemi kurulacak.
7. Ortak partial yapilari ayrilacak:
   - header
   - footer
   - navbar
   - sidebar
   - breadcrumb
   - pagination

## Asama 4: Veritabani Tasarimi

Ilk tablolar:

1. users
2. categories
3. posts
4. pages
5. questions
6. answers
7. comments
8. tools_dictionary
9. emergency_numbers
10. checklist_items
11. routes
12. settings
13. seo_meta
14. admin_logs

## Asama 5: Soru-Cevap Sistemi

1. Kullanicilar kayitsiz soru sorabilecek.
2. Sorular once bekleyen durumuna dusecek.
3. Admin panelinden onaylanacak, cevaplanacak veya reddedilecek.
4. Spam korumasi eklenecek.
5. Soru kategorileri olacak:
   - Hac
   - Umre
   - Ibadet
   - Saglik
   - Ulasim
   - Esya/Ihtiyac
   - Genel

## Asama 6: Admin Panel

1. Admin girisi
2. Dashboard
3. Makale yonetimi
4. Rehber sayfalari yonetimi
5. Soru-cevap yonetimi
6. Kategori yonetimi
7. Sozluk yonetimi
8. Acil numara yonetimi
9. Ihtiyac listesi yonetimi
10. Yol guzergahi yonetimi
11. SEO ayarlari
12. Site ayarlari

## Asama 7: SEO ve Icerik Kalitesi

1. Temiz URL yapisi
2. Meta title ve description alanlari
3. Open Graph alanlari
4. Schema.org yapilari:
   - Article
   - FAQPage
   - BreadcrumbList
   - HowTo
5. Sitemap.xml
6. Robots.txt
7. Canonical URL
8. Icindekiler ve anchor link sistemi

## Asama 8: Performans

1. Sayfa cache sistemi
2. CSS ve JS minimal tutulacak.
3. Gereksiz kutuphane kullanilmamasi
4. Gorsel optimizasyonu
5. Lazy loading
6. Veritabani indexleri
7. Sorgu sayisi azaltma
8. Mobil hiz optimizasyonu

## Asama 9: Guvenlik

1. CSRF korumasi
2. XSS korumasi
3. SQL injection korumasi
4. Admin girisinde guclu sifreleme
5. Rate limit
6. Spam filtreleme
7. Formlarda honeypot alani
8. Dosya yukleme olacaksa guvenli kontrol

## Asama 10: Yayina Hazirlik

1. Test icerikleri temizlenecek.
2. Temel sayfalar doldurulacak.
3. Mobil kontrol yapilacak.
4. SEO kontrol yapilacak.
5. Hiz testi yapilacak.
6. Sunucuya yukleme hazirligi yapilacak.
7. Veritabani kurulumu belgelenecek.
8. Ilk yayin surumu teslim edilecek.

## Ilk Uygulama Sirasi

Baslangic icin onerilen net sira:

1. Ana sayfa HTML
2. Ortak CSS tasarim sistemi
3. Umre rehberi HTML
4. Hac rehberi HTML
5. Soru-cevap liste HTML
6. Soru sor HTML
7. Makale detay HTML
8. Araclar HTML
9. Ihtiyac listesi HTML
10. Arapca sozluk HTML
11. PHP dosya mimarisi
12. Veritabani semasi
13. Soru-cevap backend
14. Admin panel temel giris
15. Icerik yonetimi
16. Cache ve SEO

## Notlar

- Ilk hedef gorsel olarak guzel ama sade bir bilgi sitesi kurmak.
- Tasarim agir, suslu veya yavas olmayacak.
- Kullanici siteye girince hizli sekilde "hac mi umre mi, ne ariyorum?" sorusuna cevap bulacak.
- Admin panel sade olacak; amac hizli icerik girmek ve sorulari onaylamak.
- Proje, ileride mobil uygulama veya API yapisina da genisleyebilecek sekilde dusunulecek.
