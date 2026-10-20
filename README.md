# MET DIAMOND Ring Builder

## Çalışan önizleme

`index.html` dosyasını indirip tarayıcıda açın. Ek kurulum gerektirmez; ürün fotoğrafları için internet gerekir. Bu depo tam bir Shopify teması değildir ve doğrudan tema olarak yayımlanmamalıdır.

20 Ekim 2026 tarihli MET DIAMOND koleksiyon verileriyle 64 benzersiz ürün içeren görsel önizleme hazırlanmıştır. Her stil koleksiyonundan en fazla 12 ürün alınmıştır; tüm katalog değildir. Vintage koleksiyonu bu sorguda ürün döndürmemiştir.

- 8 stil: Solitaire, Hidden Halo, Pavé, Halo, Three Stone, Vintage, Bezel, Toi et Moi.
- 9 şekil: Round, Oval, Emerald, Pear, Radiant, Princess, Marquise, Cushion, Asscher.
- Gerçek ürün fotoğrafları ve galeri küçük resimleri; çizim kullanılmaz.
- Stil üyeliği koleksiyon verisinden; şekil filtresi ürün başlığından belirlenir.
- Karat, altın ayarı ve rengi gerçek ürün seçeneklerinden alınır; Base configuration gizlenir.
- Seçimler gerçek varyant kimliğiyle ürün sayfasına yönlendirilir.
- US/EU geçişi rehber ölçü eşleştirmeleriyle çalışır; yaklaşık EU karşılığı açıkça belirtilir. Yalnızca kaynak tabloda eşleşmesi olan US ölçüleri listelenir.

## Sınırlar

Fiyat ve güncel stok ürün sayfasında doğrulanır. Renk, berraklık ve yüzük ölçüsü önizleme tercihleridir; bağlantıya veya siparişe aktarılmaz. Varyant görseli varsa kullanılır; yoksa ürün galerisi gösterilir ve metal renginin doğrulanmadığı belirtilir. Katalog anlık olarak yenilenmez. Canlı Shopify mağazası değiştirilmemiştir. Arayüz henüz `src/configurator.mjs` seçim motoruna bağlı değildir.

## Doğrulama

JavaScript sözdizimi kontrolü ve DOM üzerinde etkileşim kontrolleri geçti: stil/şekil sayısı, gerçek görsel kaynağı, boş eşleşme, koleksiyon bağlantısı, ürün seçimi ve EU geçişi. Bu ortamda tarayıcı kurulumu başarısız olduğundan ekran görüntüsü ve gerçek tarayıcıda görsel kontrol tamamlanamadı.

## Sonraki entegrasyon

Tam katalog sayfalaması; ürün başlığı yerine doğrulanmış şekil alanları; canlı varyant/görsel/ölçü eşleştirmesi; renk ve berraklık sipariş alanları; Horizon taslak temasında sepet doğrulaması.

Ölçü rehberi: https://us.zendiamond.com/pages/ringsizechartus
