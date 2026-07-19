# Hacipedia

Hacipedia, hac ve umre odaklı hızlı çalışan bir bilgi platformu olarak tasarlanıyor. Rehberler, soru-cevap, pratik araçlar, ihtiyaç listeleri, acil numaralar, yol bilgileri ve sözlük modülleri tek bir sade bilgi mimarisinde toplanacak.

## Hedef

- Hac ve umreye hazırlanan kişiler için güvenilir, kolay okunan bilgi kaynağı oluşturmak
- WordPress/Elementor ağırlığına girmeden hızlı açılan bir PHP tabanlı sistem kurmak
- Önce sayfa sayfa HTML prototip çıkarmak, sonra özel PHP + MySQL yapısına geçmek
- Kullanıcıların kayıtsız soru sorabildiği, admin onaylı bir soru-cevap sistemi kurmak

## İlk Geliştirme Sırası

1. Ana sayfa HTML
2. Ortak CSS tasarım sistemi
3. Umre rehberi HTML
4. Hac rehberi HTML
5. Soru-cevap liste HTML
6. Soru sor HTML
7. Makale detay HTML
8. Araçlar HTML
9. İhtiyaç listesi HTML
10. Arapça sözlük HTML
11. PHP dosya mimarisi
12. Veritabanı şeması
13. Soru-cevap backend
14. Admin panel
15. Cache ve SEO

## Klasör Yapısı

```text
public/
  index.html
  assets/
    css/
    js/
outputs/
  hacipedia-proje-yol-haritasi.md
```

## Not

Gizli bilgiler repoya eklenmeyecek. Gerçek veritabanı şifreleri, API anahtarları ve sunucu bilgileri `.env` içinde kalacak; repoda sadece `.env.example` bulunacak.
