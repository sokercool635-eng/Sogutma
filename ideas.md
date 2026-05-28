# Ayaz Endüstriyel Soğutma - Tasarım Konseptleri

Bu belgede, Ayaz Endüstriyel Soğutma kurumsal web sitesi için geliştirilmiş üç farklı tasarım yaklaşımı yer almaktadır.

<response>
<text>
## Yaklaşım 1: "Kutup Esintisi" - Minimalist ve Teknolojik İsviçre Tasarımı (Swiss Design)

*   **Tasarım Akımı**: Neo-Brütalist ve İsviçre Tarzı Minimalizm (Swiss Design)
*   **Temel İlkeler**:
    1.  Maksimum kontrast ve keskin tipografi.
    2.  Gereksiz tüm süslemelerden arındırılmış, işlevsel hiyerarşi.
    3.  Geniş negatif alanlar (whitespace) ile endüstriyel ferahlık hissi.
    4.  Asimetrik grid yapıları ve güçlü hizalamalar.
*   **Renk Felsefesi**: Buzul beyazı (#F4F9FC) ve derin okyanus laciverti (#0A1931) ana renkleri oluşturur. Vurgu rengi olarak neon soğuk mavi (#00F0FF) kullanılarak endüstriyel soğutma teknolojisi ve elektrik hissi vurgulanır. Renkler, yüksek kontrastla okunabilirliği ve profesyonelliği zirveye taşır.
*   **Yerleşim Paradigması**: Geleneksel simetrik 3'lü kolon yapıları yerine, sol hizalı büyük başlıklar, sağa yaslanmış detay kartları ve geniş asimetrik boşluklar içeren bir yerleşim tercih edilir. Sayfa geçişlerinde ve bölümlerde keskin dikey çizgiler (border-r, border-b) sınırları belirler.
*   **İmza Öğeler**:
    1.  Arka planda hafif buzlu cam (backdrop-blur) efektleri ve ince teknik ızgara (grid) desenleri.
    2.  "Sıfır Derece" hissini veren yarı şeffaf, donuk kart tasarımları.
*   **Etkileşim Felsefesi**: Kullanıcı fareyi öğelerin üzerine getirdiğinde (hover), kartlar hafifçe kayar ve neon mavi gölgeler (glow) yayar. Her buton basışında mikro ölçekli fiziksel tepki (scale-97) hissedilir.
*   **Animasyon Kuralları**: Tüm geçişler ultra hızlı ve akıcıdır (150ms, cubic-bezier(0.16, 1, 0.3, 1)). Sayfa ilk açıldığında içerikler aşağıdan yukarıya doğru hafif bir süzülme efektiyle (fade-in-up) kademeli olarak (staggered) belirir.
*   **Tipografi Sistemi**: Başlıklarda güçlü ve kalın bir grotesk yazı tipi olan **Syne** veya **Space Grotesk** kullanılır. Gövde metinlerinde ise yüksek okunabilirliğe sahip **Plus Jakarta Sans** tercih edilir.
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Yaklaşım 2: "Endüstriyel Güç" - Premium ve Maskülen Dark Mode (Premium Dark)

*   **Tasarım Akımı**: High-Tech Endüstriyel ve Premium Dark Mode
*   **Temel İlkeler**:
    1.  Karanlık arka plan üzerinde parıldayan çelik ve buz efektleri.
    2.  Güvenilirlik, dayanıklılık ve mühendislik kalitesini yansıtan ağırbaşlı duruş.
    3.  Yüksek kaliteli 3D makine render'ları ve teknik çizim esintileri.
*   **Renk Felsefesi**: Kömür grisi (#121214) ve koyu titanyum (#1A1A1E) arka planı oluşturur. Soğutma gücünü simgeleyen derin kriyojenik mavi (#0052FF) ve temiz beyaz (#FFFFFF) metinler için kullanılır. Vurgu rengi olarak ise sıcaklık kontrol panellerini andıran dijital turuncu (#FF5722) mikro detaylarda yer alır.
*   **Yerleşim Paradigması**: Büyük tam ekran (Hero) bölümleri, kartların havada asılı duruyormuş gibi hissettirdiği derin gölgeli katmanlar. Yan yana dizilen teknik özellikler, bir makine kontrol paneli arayüzünü andıracak şekilde tasarlanmıştır.
*   **İmza Öğeler**:
    1.  Metalik fırçalanmış doku hissi veren arka plan gradyanları.
    2.  Sıcaklık ve basınç göstergelerini andıran dairesel grafiksel ögeler ve canlı durum göstergeleri (pulse animasyonlu yeşil/kırmızı noktalar).
*   **Etkileşim Felsefesi**: Fare ile üzerine gelinen butonlar ve kartlar, içten dışa doğru yayılan hafif bir mavi ışık sızması (radial gradient glow) ile tepki verir.
*   **Animasyon Kuralları**: Ağır sanayi hissini pekiştirmek için daha oturaklı ve kararlı geçişler (250ms, cubic-bezier(0.25, 1, 0.5, 1)). Slaytlar ve teknik detaylar yana doğru kayarak (slide-in) yumuşakça geçiş yapar.
*   **Tipografi Sistemi**: Başlıklarda teknik ve köşeli bir karakteri olan **Orbitron** veya **Rajdhani** kullanılır. Gövde metinlerinde ise modern endüstriyel standart olan **Roboto Mono** veya **Inter** tercih edilir.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Yaklaşım 3: "Sıfır Altı" - Akışkan Sıvı ve Buz Kristali (Fluid & Frost)

*   **Tasarım Akımı**: Glassmorphism ve Akışkan Organik Tasarım
*   **Temel İlkeler**:
    1.  Doğal buz kristalleşmesi ve hava akımını simgeleyen akışkan formlar.
    2.  Yumuşak geçişler, derinlik hissi veren katmanlar ve yarı saydamlık.
    3.  Modern, cana yakın ve çevre dostu (eko-soğutma) bir kurumsal kimlik.
*   **Renk Felsefesi**: Saf kar beyazı (#FFFFFF) arka plan, akışkan buzul mavisi gradyanları (#E0F2FE -> #BAE6FD) ve derin gökyüzü mavisi (#0369A1). Vurgu rengi olarak ise çevre dostu soğutma teknolojilerini simgeleyen taze nane yeşili (#10B981) kullanılır.
*   **Yerleşim Paradigması**: Keskin köşeler yerine yumuşak dalgalı (wave) geçişler ve oval hatlara sahip kartlar. Bilgiler, suyun akışı gibi doğal bir hiyerarşiyle yukarıdan aşağıya süzülür.
*   **İmza Öğeler**:
    1.  Arka planda yavaşça dönen veya şekil değiştiren soyut buzul ve hava akımı vektörleri (blob'lar).
    2.  Cam efekti verilmiş (glassmorphism) yarı saydam bilgi panelleri ve filtreli arka planlar.
*   **Etkileşim Felsefesi**: Fare hareketlerine duyarlı, su damlası veya dalgalanma efekti yaratan mikro etkileşimler.
*   **Animasyon Kuralları**: Son derece yumuşak, organik ve akışkan animasyonlar (400ms, cubic-bezier(0.34, 1.56, 0.64, 1)). Ögeler sanki suyun üzerinde yüzüyormuş gibi hafifçe sallanır (floating).
*   **Tipografi Sistemi**: Başlıklarda yuvarlak hatlara sahip modern bir sans-serif olan **Lexend** veya **Outfit** kullanılır. Gövde metinlerinde ise temiz ve arkadaş canlısı **Satoshi** veya **Outfit Light** tercih edilir.
</text>
<probability>0.09</probability>
</response>

---

# Seçilen Konsept: Yaklaşım 1 - "Kutup Esintisi" (Minimalist ve Teknolojik İsviçre Tasarımı)

Ayaz Endüstriyel Soğutma'nın mühendislik gücünü, profesyonelliğini ve endüstriyel soğutma alanındaki net, tavizsiz kalitesini en iyi yansıtacak yaklaşımın **"Kutup Esintisi"** olduğuna karar verilmiştir. Bu konsept, temiz buzul beyazı arka planı, derin okyanus laciverti tipografisi ve parıldayan neon soğuk mavi detaylarıyla firmaya son derece modern, güvenilir ve yüksek teknolojili bir kurumsal kimlik kazandıracaktır.
