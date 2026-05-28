import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Wrench, 
  Cpu, 
  Layers, 
  Menu, 
  X,
  ChevronRight,
  MessageSquareCode
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Sistem Kurulumu",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Lütfen adınızı ve telefon numaranızı giriniz.");
      return;
    }
    toast.success("Talebiniz başarıyla alındı! En kısa sürede sizinle iletişime geçeceğiz.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Sistem Kurulumu",
      message: ""
    });
  };

  const services = [
    {
      id: "cold-room",
      category: "systems",
      title: "Endüstriyel Soğuk Oda Kurulumu",
      description: "İhtiyacınıza özel boyut ve sıcaklık derecelerinde, enerji tasarruflu modern soğuk hava depoları projelendiriyor ve anahtar teslim kuruyoruz.",
      specs: ["-40°C ila +15°C Çalışma Aralığı", "Yüksek Yoğunluklu Poliüretan Paneller", "Hijyenik ve Antibakteriyel Zemin Kaplamaları", "PLC Tabanlı Akıllı İzleme Sistemi"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706451843/6Z8fNrbXjtGDfefNAQSLFm/hero_cooling-ZjyKuFzg7dBba5772RotRm.webp"
    },
    {
      id: "chiller",
      category: "systems",
      title: "Chiller Soğutma Sistemleri",
      description: "Fabrikalar, plastik enjeksiyon tesisleri ve endüstriyel üretim hatları için yüksek kapasiteli su soğutmalı ve hava soğutmalı Chiller grupları.",
      specs: ["Vidalı veya Scroll Kompresör Seçenekleri", "Çevre Dostu R410A / R134A Gazları", "Yüksek Verimli Isı Eşanjörleri", "Kademeli Güç Kontrolü ile Maksimum Tasarruf"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "maintenance",
      category: "service",
      title: "Periyodik Bakım ve Teknik Servis",
      description: "Sistemlerinizin kesintisiz ve verimli çalışması için 7/24 hızlı teknik servis desteği ve profesyonel periyodik bakım anlaşmaları sunuyoruz.",
      specs: ["7/24 Acil Müdahale Hattı", "Gaz Kaçağı ve Basınç Kontrolleri", "Kompresör ve Fan Revizyonları", "Orijinal Yedek Parça Güvencesi"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706451843/6Z8fNrbXjtGDfefNAQSLFm/accessory-dohMMZFz99SzdBLtukqctK.webp"
    }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground swiss-grid flex flex-col selection:bg-accent/20">
      
      {/* ÜST BİLGİ BARı */}
      <div className="bg-primary text-primary-foreground text-xs py-2 px-4 border-b border-border/10 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone size={13} className="text-accent" /> 0537 408 54 04</span>

          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin size={13} className="text-accent" /> Diyarbakır, Türkiye</span>
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-accent" /> Pzt - Cmt: 08:30 - 19:00</span>
          </div>
        </div>
      </div>

      {/* NAVİGASYON */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary/10">
        <div className="container py-4 flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black tracking-tighter text-primary flex items-center gap-2">
              SÖKER <span className="text-accent font-light">|</span> <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Endüstriyel Soğutma</span>
            </span>
          </div>

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-primary/80">
            <a href="#hero" className="hover:text-accent transition-colors">Anasayfa</a>
            <a href="#about" className="hover:text-accent transition-colors">Hakkımızda</a>
            <a href="#services" className="hover:text-accent transition-colors">Hizmetlerimiz</a>
            <a href="#products" className="hover:text-accent transition-colors">Ürünler</a>
            <a href="#contact" className="hover:text-accent transition-colors">İletişim</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-2 border-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hızlı Teklif Al
            </Button>
          </div>

          {/* Mobil Menü Butonu */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobil Menü Paneli */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border p-6 flex flex-col gap-4 animate-fade-in">
            <a href="#hero" onClick={() => setMenuOpen(false)} className="font-semibold text-primary">Anasayfa</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="font-semibold text-primary">Hakkımızda</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="font-semibold text-primary">Hizmetlerimiz</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="font-semibold text-primary">Ürünler</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="font-semibold text-primary">İletişim</a>
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <span className="text-sm font-medium flex items-center gap-2"><Phone size={16} /> 0537 408 54 04</span>
              <Button 
                className="w-full bg-primary text-primary-foreground font-bold"
                onClick={() => {
                  setMenuOpen(false);
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hızlı Teklif Al
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO BÖLÜMÜ (Asimetrik ve Güçlü Başlık) */}
      <section id="hero" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden border-b border-border">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-3 py-1 text-xs font-bold tracking-wider uppercase border border-border">
              <span className="w-2 h-2 bg-accent animate-pulse"></span> Endüstriyel İklimlendirme Teknolojileri
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary tracking-tighter leading-none uppercase">
              Sıfır Derecenin <br />
              <span className="text-accent bg-primary px-3 py-1 inline-block my-1 text-primary-foreground">Mühendislik</span> <br />
              Gücü
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl font-normal leading-relaxed">
              Söker Endüstriyel Soğutma ve Söker Soğutma olarak; gıda, ilaç, kimya ve lojistik sektörleri için yüksek performanslı, enerji tasarruflu soğuk hava depoları ve endüstriyel soğutma sistemleri tasarlıyor, üretiyor ve kuruyoruz. Sökerendstrüriyelsöğutma hizmetleriyle Diyarbakır'da lider konumdayız.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-base flex items-center gap-2"
                onClick={() => {
                  const element = document.getElementById("services");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hizmetlerimizi İnceleyin <ChevronRight size={18} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary font-bold text-base hover:bg-secondary flex items-center gap-2"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                İletişime Geçin <ArrowUpRight size={18} />
              </Button>
            </div>

            {/* Güven Veren Metrikler */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary tracking-tight">100%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Müşteri Memnuniyeti</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary tracking-tight">7/24</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Teknik Servis</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary tracking-tight">A+++</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Enerji Verimliliği</p>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Yüksek Kaliteli 3D Görsel */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-accent"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary"></div>
            <div className="border-4 border-primary p-2 bg-background">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706451843/6Z8fNrbXjtGDfefNAQSLFm/hero_cooling-ZjyKuFzg7dBba5772RotRm.webp" 
                alt="Söker Endüstriyel Soğutma Sistemleri" 
                className="w-full object-cover filter contrast-105 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* HAKKIMIZDA BÖLÜMÜ */}
      <section id="about" className="py-24 bg-secondary border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="border-4 border-accent p-2 bg-background">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Mühendislik ve Kalite" 
                  className="w-full h-[400px] object-cover filter grayscale"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Biz Kimiz?</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">
                Güvenilir, Sürdürülebilir ve Akıllı Soğutma Çözümleri
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Söker Endüstriyel Soğutma ve söker sogutma, sektördeki köklü tecrübesiyle endüstriyel soğutma alanında lider çözümler üretmektedir. Müşterilerimizin soğuk zincir güvenliğini en üst düzeyde tutmak amacıyla mühendislik standartlarına uygun, yüksek kaliteli ekipmanlar kullanıyoruz. Sökerendüstriyelsoğutma hizmetleriyle Diyarbakır'da en güvenilir partnerız.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tasarım aşamasından montaj ve satış sonrası periyodik bakıma kadar her adımda, işletmenizin enerji maliyetlerini minimize edecek ve verimliliği maksimuma çıkaracak sistemler geliştirmeye odaklanıyoruz.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-primary text-primary-foreground p-1.5"><CheckCircle2 size={16} /></div>
                  <div>
                    <h4 className="font-bold text-primary">Sertifikalı Malzemeler</h4>
                    <p className="text-xs text-muted-foreground">Avrupa standartlarında CE sertifikalı ve çevre dostu ekipmanlar.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-primary text-primary-foreground p-1.5"><CheckCircle2 size={16} /></div>
                  <div>
                    <h4 className="font-bold text-primary">Hızlı Teknik Destek</h4>
                    <p className="text-xs text-muted-foreground">Arıza durumlarında işletmenizin aksamaması için anında servis.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HİZMETLERİMİZ VE UZMANLIK ALANLARI */}
      <section id="services" className="py-24 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Neler Yapıyoruz?</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mt-2">
                Hizmet ve Çözümlerimiz
              </h2>
            </div>
            
            {/* Kategori Filtreleme */}
            <div className="flex gap-2 border-2 border-primary p-1 bg-background">
              <button 
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 text-xs font-bold uppercase transition-all ${activeTab === "all" ? "bg-primary text-primary-foreground" : "text-primary hover:bg-secondary"}`}
              >
                Tümü
              </button>
              <button 
                onClick={() => setActiveTab("systems")}
                className={`px-4 py-2 text-xs font-bold uppercase transition-all ${activeTab === "systems" ? "bg-primary text-primary-foreground" : "text-primary hover:bg-secondary"}`}
              >
                Sistemler
              </button>
              <button 
                onClick={() => setActiveTab("service")}
                className={`px-4 py-2 text-xs font-bold uppercase transition-all ${activeTab === "service" ? "bg-primary text-primary-foreground" : "text-primary hover:bg-secondary"}`}
              >
                Teknik Servis
              </button>
            </div>
          </div>

          {/* Hizmet Kartları Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="border-2 border-primary bg-background overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="h-52 overflow-hidden border-b-2 border-primary">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow gap-4">
                  <h3 className="text-xl font-bold text-primary uppercase tracking-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    {service.specs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-primary/90 font-medium">
                        <span className="w-1.5 h-1.5 bg-accent"></span>
                        {spec}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SIKÇA SORULAN SORULAR VE DETAYLAR */}
      <section id="products" className="py-24 bg-secondary border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Sıkça Sorulanlar</span>
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter">
                Merak Edilen Teknik Detaylar
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Soğutma sistemleri ve kurulum süreçleri hakkında müşterilerimizden en sık aldığımız soruları ve teknik detayları sizler için derledik.
              </p>
              <div className="p-6 border-2 border-primary bg-background flex flex-col gap-3">
                <h4 className="font-bold text-primary flex items-center gap-2"><ThermometerSnowflake size={18} className="text-accent" /> İdeal Sıcaklık Nedir?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Muhafaza edilecek ürüne göre sıcaklıklar değişir. Örneğin; taze meyve/sebze için +2°C ila +4°C, dondurulmuş ürünler için -18°C ila -25°C idealdir.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 bg-background border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Soğuk oda panellerinin kalınlığı nasıl belirlenir?</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Panel kalınlığı, odanın kurulacağı bölgenin iklim koşullarına ve içeride hedeflenen sıcaklık derecesine göre seçilir. Genellikle pozitif soğutma (+4°C) için 80mm, negatif dondurma (-18°C) için 100-120mm, şoklama odaları (-40°C) için ise 150mm panel kalınlığı tercih edilir.
                </p>
              </div>

              <div className="p-6 bg-background border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Sistemlerinizde hangi marka kompresör ve ekipmanları kullanıyorsunuz?</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Sistemlerimizin uzun ömürlü ve verimli çalışması için dünya çapında kalitesi kanıtlanmış Copeland, Bitzer, Bock ve Danfoss gibi lider markaların kompresörlerini ve kontrol ekipmanlarını tercih ediyoruz.
                </p>
              </div>

              <div className="p-6 bg-background border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-primary uppercase tracking-tight">Enerji tasarrufu için ne gibi önlemler alıyorsunuz?</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Sistemlerimizde invertörlü (hız kontrollü) kompresörler, yüksek verimli kondenser fanları, elektronik genleşme vanaları ve akıllı defrost yönetim sistemleri kullanarak standart soğutma gruplarına kıyasla %35'e varan enerji tasarrufu sağlıyoruz.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* İLETİŞİM BÖLÜMÜ */}
      <section id="contact" className="py-24 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* İletişim Bilgileri */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-accent uppercase">İletişime Geçin</span>
                <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter mt-2">
                  Bizimle <br />İletişim Kurun
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Projeniz için ücretsiz keşif ve fiyat teklifi almak, teknik servis talebinde bulunmak veya sadece bilgi almak için bizimle doğrudan iletişime geçebilirsiniz.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Telefon Numaramız</p>
                    <a href="tel:05374085404" className="text-lg font-bold text-primary hover:text-accent transition-colors">0537 408 54 04</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">E-Posta Adresimiz</p>
                    <a href="mailto:info@ayazsogutma.com" className="text-lg font-bold text-primary hover:text-accent transition-colors">info@ayazsogutma.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Merkez Ofis</p>
                    <p className="text-sm font-bold text-primary">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>

              {/* Hızlı WhatsApp Butonu */}
              <div className="pt-4">
                <a 
                  href="https://wa.me/905374085404" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 border-2 border-emerald-800 transition-all w-full text-center"
                >
                  <MessageSquareCode size={20} /> WhatsApp İle Hızlı Mesaj Gönder
                </a>
              </div>
            </div>

            {/* Teklif / İletişim Formu */}
            <div className="lg:col-span-7">
              <div className="bg-secondary p-8 border-2 border-primary">
                <h3 className="text-2xl font-black text-primary uppercase tracking-tight mb-6">Hızlı Teklif & Servis Formu</h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-primary">Adınız Soyadınız *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Örn. Ahmet Yılmaz" 
                        className="p-3 bg-background border border-border focus:border-accent outline-none text-sm font-medium"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-primary">Telefon Numaranız *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Örn. 0532 XXX XX XX" 
                        className="p-3 bg-background border border-border focus:border-accent outline-none text-sm font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-primary">E-Posta Adresiniz</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Örn. ahmet@sirket.com" 
                        className="p-3 bg-background border border-border focus:border-accent outline-none text-sm font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-primary">İlgilendiğiniz Hizmet</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="p-3 bg-background border border-border focus:border-accent outline-none text-sm font-medium"
                      >
                        <option>Sistem Kurulumu</option>
                        <option>Soğuk Hava Deposu</option>
                        <option>Teknik Servis & Bakım</option>
                        <option>Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-primary">Mesajınız / Proje Detayları</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Projeniz veya talebiniz hakkında kısa bilgi veriniz..." 
                      className="p-3 bg-background border border-border focus:border-accent outline-none text-sm font-medium resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4 text-sm uppercase tracking-wider">
                    Formu Gönder
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ALT BİLGİ (FOOTER) */}
      <footer className="bg-primary text-primary-foreground py-12 mt-auto border-t-4 border-accent">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col gap-4">
            <span className="text-xl font-black tracking-tighter">AYAZ SOĞUTMA</span>
            <p className="text-xs text-primary-foreground/70 leading-relaxed">
              Endüstriyel iklimlendirme ve soğuk hava depoları alanında yüksek mühendislik standartlarıyla anahtar teslim çözümler sunuyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-accent uppercase tracking-wider text-sm">Hızlı Menü</h4>
            <div className="flex flex-col gap-2 text-xs text-primary-foreground/80">
              <a href="#hero" className="hover:text-accent transition-colors">Anasayfa</a>
              <a href="#about" className="hover:text-accent transition-colors">Hakkımızda</a>
              <a href="#services" className="hover:text-accent transition-colors">Hizmetlerimiz</a>
              <a href="#contact" className="hover:text-accent transition-colors">İletişim</a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-accent uppercase tracking-wider text-sm">Hizmetlerimiz</h4>
            <div className="flex flex-col gap-2 text-xs text-primary-foreground/80">
              <span>Soğuk Hava Deposu Kurulumu</span>
              <span>Chiller Grubu Satış & Servis</span>
              <span>Merkezi Soğutma Sistemleri</span>
              <span>7/24 Teknik Servis Desteği</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-accent uppercase tracking-wider text-sm">Bize Ulaşın</h4>
            <div className="flex flex-col gap-2 text-xs text-primary-foreground/80">
              <span className="flex items-center gap-1.5"><Phone size={12} /> 0537 408 54 04</span>
              <span className="flex items-center gap-1.5"><Mail size={12} /> info@ayazsogutma.com</span>
              <span className="flex items-center gap-1.5"><MapPin size={12} /> İstanbul, Türkiye</span>
            </div>
          </div>

        </div>

        <div className="container border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Söker Endüstriyel Soğutma. Tüm Hakları Saklıdır.</p>
          <p>Tasarım & Mühendislik: Söker Soğutma</p>
        </div>
      </footer>

    </div>
  );
}
