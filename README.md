# Hacipedia

Hacipedia, hac ve umre odakli hizli calisan bir bilgi platformu olarak tasarlaniyor. Rehberler, soru-cevap, pratik araclar, ihtiyac listeleri, acil numaralar, yol bilgileri ve sozluk modulleri tek bir sade bilgi mimarisinde toplanacak.

## Hedef

- Hac ve umreye hazirlanan kisiler icin guvenilir, kolay okunan bilgi kaynagi olusturmak
- WordPress/Elementor agirligina girmeden hizli acilan bir PHP tabanli sistem kurmak
- Once sayfa sayfa HTML prototip cikarmak, sonra ozel PHP + MySQL yapisina gecmek
- Kullanicilarin kayitsiz soru sorabildigi, admin onayli bir soru-cevap sistemi kurmak

## Ilk Gelistirme Sirasi

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
14. Admin panel
15. Cache ve SEO

## Klasor Yapisi

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

Gizli bilgiler repoya eklenmeyecek. Gercek veritabani sifreleri, API anahtarlari ve sunucu bilgileri `.env` icinde kalacak; repoda sadece `.env.example` bulunacak.
