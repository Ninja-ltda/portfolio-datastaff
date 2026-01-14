import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, TrendingUp, Users, Globe, CheckCircle, Menu, X } from 'lucide-react';

// Screenshot component with multiple API rotation
const ScreenshotImage = ({ url, title, index }) => {
  const [currentApiIndex, setCurrentApiIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const screenshotApis = [
    `https://api.screenshotone.com/take?url=${encodeURIComponent(url)}&viewport_width=1200&viewport_height=800&format=jpg&block_ads=true`,
    `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`,
    `https://shot.screenshotapi.net/screenshot?token=DEMO&url=${encodeURIComponent(url)}&width=800&height=600&output=image`,
    `https://api.apiflash.com/v1/urltoimage?access_key=demo&url=${encodeURIComponent(url)}&width=800&height=600&format=jpeg`,
  ];

  const handleImageError = () => {
    if (currentApiIndex < screenshotApis.length - 1) {
      setCurrentApiIndex(prev => prev + 1);
    } else {
      setImgError(true);
    }
  };

  const getApiUrl = () => {
    const distributedIndex = (index + currentApiIndex) % screenshotApis.length;
    return screenshotApis[distributedIndex];
  };

  if (imgError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <Globe size={48} className="text-white opacity-50" />
      </div>
    );
  }

  return (
    <img 
      src={getApiUrl()}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      loading="lazy"
      onError={handleImageError}
    />
  );
};

// Componente para Card com Cache
const PortfolioCard = ({ item, index }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      <div className="aspect-video bg-slate-900 relative overflow-hidden">
        <ScreenshotImage url={item.url} title={item.title} index={index} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg group-hover:text-blue-400 transition">
            {item.title}
          </h3>
          <ArrowRight className="text-blue-400 opacity-0 group-hover:opacity-100 transition" size={20} />
        </div>
        <p className="text-slate-400 text-sm mb-3">{item.category}</p>
        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
          {item.tag}
        </span>
      </div>
    </a>
  );
};

const PortfolioInterativo = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef(null);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Personalizações
  const WHATSAPP_NUMBER = '+351932763918';
  const EMAIL = 'data.staff.ads@gmail.com';
  const STATS_TARGET = {
    sites: 32,
    clientes: 21,
    conversao: 230
  };

  // Animated stats
  const [stats, setStats] = useState({
    sites: 0,
    clientes: 0,
    conversao: 0
  });

  // Portfolio items
  const portfolioItems = [
    {
      title: "Ribs and Company",
      url: "https://ribsandcompany.com/",
      category: "Restauração Premium",
      tag: "E-commerce + Reservas"
    },
    {
      title: "Atira-te ao Rio",
      url: "https://www.atirateaorio.com/",
      category: "Entretenimento",
      tag: "Identidade Visual Forte"
    },
    {
      title: "Bonds City",
      url: "https://www.bonds.city/",
      category: "Networking Digital",
      tag: "Plataforma Interativa"
    },
    {
      title: "Paragem Restaurante",
      url: "https://paragem-restaurante--eaeleo.replit.app/",
      category: "Restauração",
      tag: "Menu Digital + Pedidos"
    },
    {
      title: "Bullguer",
      url: "https://bullguer.pt/",
      category: "Fast Food Premium",
      tag: "Menu Digital + Pedidos"
    },
    {
      title: "Independente Hostel",
      url: "https://www.independente.eu/",
      category: "Hospitalidade",
      tag: "Reservas Multilocal"
    },
    {
      title: "Independente Bica",
      url: "https://www.independente.eu/lisboa-bica/",
      category: "Hostel Local",
      tag: "Design Imersivo"
    },
    {
      title: "Independente Príncipe Real",
      url: "https://www.independente.eu/principe-real/",
      category: "Boutique Hostel",
      tag: "Experiência Premium"
    },
    {
      title: "Tanka Sapkota",
      url: "https://www.tankasapkota.pt/",
      category: "Gastronomia",
      tag: "Experiência Gastronómica"
    },
    {
      title: "Sekko",
      url: "https://www.sekko.pt/",
      category: "Moda & Lifestyle",
      tag: "E-commerce Elegante"
    },
    {
      title: "Prégaria e Companhia",
      url: "https://pregariaecompanhia.eatbu.com/?lang=pt",
      category: "Restauração Clássica",
      tag: "Reservas Online"
    }
  ];

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      // Check if stats section is visible
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !statsVisible) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsVisible]);

  // Animate stats when visible
  useEffect(() => {
    if (statsVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          sites: Math.floor(progress * STATS_TARGET.sites),
          clientes: Math.floor(progress * STATS_TARGET.clientes),
          conversao: Math.floor(progress * STATS_TARGET.conversao)
        });

        if (currentStep >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [statsVisible]);

  // Particle animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-sans">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Presence
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:text-blue-400 transition">Início</a>
              <a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a>
              <a href="#stats" className="hover:text-blue-400 transition">Resultados</a>
              <a href="#cta" className="hover:text-blue-400 transition">Contacto</a>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#hero" className="block hover:text-blue-400 transition">Início</a>
              <a href="#portfolio" className="block hover:text-blue-400 transition">Portfolio</a>
              <a href="#stats" className="block hover:text-blue-400 transition">Resultados</a>
              <a href="#cta" className="block hover:text-blue-400 transition">Contacto</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Canvas */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transforme Seu Negócio
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Com Presença Digital
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Sites profissionais que convertem visitantes em clientes. 
            Do design à implementação em tempo recorde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl"
            >
              Ver Portfolio <ArrowRight size={20} />
            </a>
            <a 
              href="#cta"
              className="px-8 py-4 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 transition border border-slate-600"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Floating elements */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
              <Zap className="mx-auto mb-2 text-yellow-400" size={32} />
              <p className="text-sm">Entrega em 72h</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
              <TrendingUp className="mx-auto mb-2 text-green-400" size={32} />
              <p className="text-sm">ROI Comprovado</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700">
              <Users className="mx-auto mb-2 text-blue-400" size={32} />
              <p className="text-sm">Suporte Local</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" ref={statsRef} className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Resultados que Falam
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl border border-blue-700/50">
              <div className="text-6xl font-bold text-blue-400 mb-4">
                {stats.sites}+
              </div>
              <p className="text-xl text-slate-300">Sites Desenvolvidos</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl border border-purple-700/50">
              <div className="text-6xl font-bold text-purple-400 mb-4">
                {stats.clientes}+
              </div>
              <p className="text-xl text-slate-300">Clientes Satisfeitos</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-pink-900/50 to-red-900/50 rounded-xl border border-pink-700/50">
              <div className="text-6xl font-bold text-pink-400 mb-4">
                {stats.conversao}%
              </div>
              <p className="text-xl text-slate-300">Taxa de Conversão Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Portfolio de Inspiração
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Exemplos de layouts adaptáveis ao seu negócio
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center bg-slate-800/30 p-8 rounded-xl border border-slate-700">
            <p className="text-slate-300 text-lg mb-4">
              <CheckCircle className="inline mr-2 text-green-400" size={24} />
              Qualquer um destes layouts pode ser adaptado ao seu negócio
            </p>
            <p className="text-slate-400">
              Personalizamos cores, conteúdo e funcionalidades de acordo com as suas necessidades
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto Para Decolar?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Invista na presença digital do seu negócio hoje. 
            Sites a partir de 150€ com entrega em 72 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="px-8 py-4 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2 shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a 
              href={`mailto:${EMAIL}`}
              className="px-8 py-4 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 transition border border-slate-600"
            >
              Email
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="font-bold text-lg mb-2 text-blue-400">Pacote Básico</h3>
              <p className="text-3xl font-bold mb-4">150€</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Site Responsivo</li>
                <li>✓ 3-5 Páginas</li>
                <li>✓ Entrega 72h</li>
                <li>✓ 1 Revisão</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-lg border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 px-4 py-1 rounded-full text-xs font-bold">
                MAIS POPULAR
              </div>
              <h3 className="font-bold text-lg mb-2 text-blue-400">Pacote Profissional</h3>
              <p className="text-3xl font-bold mb-4">250€</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Tudo do Básico</li>
                <li>✓ SEO Otimizado</li>
                <li>✓ Google Maps</li>
                <li>✓ Formulário Contato</li>
                <li>✓ 3 Revisões</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="font-bold text-lg mb-2 text-purple-400">Pacote Premium</h3>
              <p className="text-3xl font-bold mb-4">350€</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Tudo do Profissional</li>
                <li>✓ Sistema Reservas</li>
                <li>✓ Integração Redes</li>
                <li>✓ Analytics</li>
                <li>✓ Suporte 30 dias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Digital Presence
          </div>
          <p className="text-slate-400 mb-6">
            Transformando negócios locais em marcas digitais
          </p>
          <div className="flex justify-center gap-6 text-slate-400">
            <a href="https://maps.google.com/?q=Lisboa,Portugal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Lisboa</a>
            <a href="https://maps.google.com/?q=Setúbal,Portugal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Setúbal</a>
            <a href="https://maps.google.com/?q=Portugal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Portugal</a>
          </div>
          <p className="mt-8 text-slate-500 text-sm">
            © 2026 Digital Presence. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioInterativo;
