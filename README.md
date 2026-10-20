# MET DIAMOND Ring Builder

## Çalışan önizleme

`index.html` dosyasını indirip güncel Chrome veya Safari ile açın. Koleksiyon verisi dosyanın içine sıkıştırılmıştır; ürün fotoğrafları internetten yüklenir. Bu depo tam Shopify teması değildir.

20 Ekim 2026 tarihinde kullanıcının verdiği 8 stil ve 9 taş şekli koleksiyonunun tüm sayfaları taranmıştır. Tekilleştirme sonrası 364 görselli ürün ve Base configuration dışındaki 17.472 varyant alınmıştır. Bu, söz konusu 17 koleksiyonun birleşimidir; mağazanın diğer ürünlerini kapsamaz. Vintage koleksiyonu ürün döndürmemiştir.

## Akış

1. Montür veya taş şekliyle başlangıç; koleksiyon üyeliğine göre filtreleme, ürün/SKU araması, fiyat sıralaması, 12 ürünlük sayfalama.
2. Gerçek ürün galerisi; mevcut varyantlara göre karat, altın ayarı ve rengi; varyant fiyatı USD olarak; US/EU rehber ölçüsü ve D/E/F, VS1/VS2 tercihleri.
3. Tasarım özeti; varyant kimliğiyle mağaza bağlantısı; indirilebilir JSON özeti.

Seçimler localStorage ile aynı tarayıcıda korunur. Uyumsuz seçenek kombinasyonlarında seçilen alan korunarak gerçek bir varyantın diğer seçenekleri atanır; özet son seçimi gösterir.

## Sınırlar

Bu sürüm satışa entegre değildir. Sepete ekleme yapılmaz; ölçü, renk ve berraklık tercihleri ürün bağlantısıyla otomatik aktarılmaz. Mağazada ayrıca doğrulanmalıdır. Fiyat ve stok katalog taramasına aittir; canlı güncellenmez. Varyant fotoğrafı varsa gösterilir, yoksa ürün galerisi ve açık bir uyarı kullanılır. Metal rengini taklit etmek için fotoğrafa filtre uygulanmaz. US/EU listesi yalnızca rehberde açık eşleşmesi bulunan ölçülerden oluşur ve tüm mağaza ölçülerini kapsamaz. Canlı Shopify mağazası değiştirilmemiştir. `src/configurator.mjs` bu önizlemenin arayüzüne bağlı değildir.

## Kontrol

Gerçek Chromium üzerinde katalog sayısı, sayfalama, arama, ürün seçimi, fiyat, EU geçişi, renk/berraklık özeti, varyant bağlantısı, seçimlerin saklanması, boş Vintage sonucu ve mobil yatay taşma kontrolleri geçti. Desktop ve 390 px mobil ekran görüntüleri incelendi. Bu ortamdaki görsel erişimi için tarayıcı sistemin mevcut ağ proxy ayarıyla çalıştırıldı.

## Kalan işler

- Horizon taslak temasına bölüm entegrasyonu ve gerçek sepet bağlantısı.
- Ölçü, renk ve berraklığın mağazadaki ürün seçenekleriyle doğrulanmış aktarımı.
- Tam US/EU ölçü tablosu ve sipariş ölçü eşleştirmesi.
- Eksik varyant görsel eşleştirmeleri; boş Vintage koleksiyonu kontrolü.
- Canlı fiyat/stok yenilemesi.

Ölçü rehberi: https://us.zendiamond.com/pages/ringsizechartus
