import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2, Users, Award, CheckCircle, Heart,
  Lightbulb, Shield, Star, Home, Hospital,
  ShoppingBag, UtensilsCrossed, GraduationCap,
  ArrowRight, Phone, Mail, MapPin
} from "lucide-react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');

  :root {
    --white:#ffffff; --gray-50:#f8fafc; --gray-100:#f1f5f9;
    --gray-200:#e2e8f0; --gray-400:#94a3b8; --gray-600:#475569; --gray-800:#1e293b;
    --blue:#1a3c6e; --blue-md:#2563eb; --blue-lt:#dbeafe;
    --orange:#f97316; --orange-lt:#fff7ed;
    --shadow-sm:0 1px 3px rgba(0,0,0,0.08);
    --shadow-md:0 4px 20px rgba(0,0,0,0.10);
    --shadow-lg:0 10px 40px rgba(0,0,0,0.12);
  }

  .ab*,.ab*::before,.ab*::after{margin:0;padding:0;box-sizing:border-box}
  .ab{font-family:'Poppins',sans-serif;background:var(--white);color:var(--gray-800);overflow-x:hidden}

  .ab-title-banner{
    background:linear-gradient(135deg,#0a0f2e 0%,#1a1040 50%,#0a1628 100%);
    padding:2rem 5%;text-align:center;overflow:hidden;position:relative;
  }
  .ab-title-banner::before{
    content:'';position:absolute;inset:0;
    background-image:radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px);
    background-size:28px 28px;pointer-events:none;
  }
  .ab-title-line{
    display:inline-flex;flex-wrap:wrap;justify-content:center;
    align-items:baseline;gap:0.2em;line-height:1;
    position:relative;z-index:1;
  }
  .ab-tw{display:inline-block;font-family:'Playfair Display',serif;font-weight:700;animation:abWordPop .8s cubic-bezier(.34,1.56,.64,1) both;}
  .ab-tw-xl{font-size:clamp(2rem,5vw,5rem)}
  .ab-tw-lg{font-size:clamp(1.4rem,3.5vw,3.8rem)}
  .ab-tw-md{font-size:clamp(0.9rem,2.2vw,2.2rem);font-weight:400}
  .ab-tw-sm{font-size:clamp(0.7rem,1.5vw,1.5rem);font-weight:300}
  .ab-tw-white{color:#ffffff}
  .ab-tw-orange{background:linear-gradient(135deg,#f97316,#fbbf24);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-style:italic}
  .ab-tw-teal{background:linear-gradient(135deg,#5eead4,#06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  .ab-tw-pink{background:linear-gradient(135deg,#f472b6,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-style:italic}
  .ab-tw-muted{color:rgba(255,255,255,0.3)}
  .ab-tw:nth-child(1){animation-delay:.04s}
  .ab-tw:nth-child(2){animation-delay:.14s}
  .ab-tw:nth-child(3){animation-delay:.24s}
  .ab-tw:nth-child(4){animation-delay:.34s}
  .ab-tw:nth-child(5){animation-delay:.44s}
  .ab-tw:nth-child(6){animation-delay:.54s}
  .ab-title-dots{display:flex;justify-content:center;gap:7px;margin-top:0.9rem;position:relative;z-index:1}
  .ab-td{width:6px;height:6px;border-radius:50%;animation:abDotBounce 1.8s ease infinite}
  .ab-td:nth-child(1){background:#f97316;animation-delay:0s}
  .ab-td:nth-child(2){background:#a78bfa;animation-delay:.18s}
  .ab-td:nth-child(3){background:#5eead4;animation-delay:.36s}
  .ab-td:nth-child(4){background:#f472b6;animation-delay:.54s}
  .ab-td:nth-child(5){background:#fbbf24;animation-delay:.72s}

  .ab-hero{background:linear-gradient(135deg,var(--blue) 0%,#0f2952 50%,#1e4080 100%);min-height:88vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:7rem 5% 5rem;position:relative;overflow:hidden}
  .ab-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px);background-size:32px 32px}
  .ab-hero::after{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,0.15) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
  .ab-hero-inner{position:relative;z-index:2;max-width:760px}
  .ab-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#fcd34d;font-size:0.72rem;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;padding:0.5rem 1.2rem;border-radius:999px;margin-bottom:1.8rem;animation:fadeUp .7s ease both}
  .ab-hero h1{font-family:'Playfair Display',serif;font-size:clamp(2.6rem,7vw,5rem);font-weight:700;color:#fff;line-height:1.1;margin-bottom:1.4rem;animation:fadeUp .7s .12s ease both}
  .ab-hero h1 span{color:var(--orange);font-style:italic}
  .ab-hero-sub{font-size:1.05rem;color:rgba(255,255,255,0.75);line-height:1.8;max-width:560px;margin:0 auto 2.8rem;font-weight:300;animation:fadeUp .7s .24s ease both}
  .ab-hero-stats{display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;animation:fadeUp .7s .36s ease both}
  .ab-hero-stat{text-align:center}
  .ab-hero-stat-num{font-family:'Playfair Display',serif;font-size:2.4rem;font-weight:700;color:var(--orange);line-height:1}
  .ab-hero-stat-label{font-size:0.78rem;color:rgba(255,255,255,0.65);letter-spacing:0.08em;margin-top:4px}
  .ab-hero-divider{width:60px;height:2px;background:var(--orange);margin:2rem auto;border-radius:2px;animation:fadeUp .7s .3s ease both}
  .ab-hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:2.5rem;animation:fadeUp .7s .46s ease both}
  .ab-btn-hero-pri{display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:#fff;font-size:0.88rem;font-weight:600;letter-spacing:0.06em;padding:0.9rem 2.2rem;border-radius:999px;border:none;cursor:pointer;box-shadow:0 4px 18px rgba(249,115,22,0.4);transition:all .3s}
  .ab-btn-hero-pri:hover{background:#ea6c0a;transform:translateY(-3px);box-shadow:0 8px 28px rgba(249,115,22,0.5)}
  .ab-btn-hero-out{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#fff;font-size:0.88rem;font-weight:500;letter-spacing:0.06em;padding:0.9rem 2.2rem;border-radius:999px;border:2px solid rgba(255,255,255,0.35);cursor:pointer;transition:all .3s}
  .ab-btn-hero-out:hover{background:rgba(255,255,255,0.1);border-color:#fff;transform:translateY(-2px)}

  .ab-wave{display:block;width:100%;overflow:hidden;line-height:0;background:var(--blue)}
  .ab-wave svg{display:block;width:100%}

  .ab-sec{padding:6rem 5%}
  .ab-sec-gray{background:var(--gray-50)}
  .ab-sec-blue{background:var(--blue);color:#fff}
  .ab-sec-head{text-align:center;margin-bottom:3.5rem}
  .ab-chip{display:inline-flex;align-items:center;gap:6px;background:var(--blue-lt);color:var(--blue-md);font-size:0.72rem;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;padding:0.38rem 1rem;border-radius:999px;margin-bottom:1rem}
  .ab-chip-orange{background:var(--orange-lt);color:var(--orange)}
  .ab-chip-white{background:rgba(255,255,255,0.15);color:#fff}
  .ab-sec-title{font-family:'Playfair Display',serif;font-size:clamp(2rem,4.5vw,3.2rem);font-weight:700;color:var(--gray-800);line-height:1.15;margin-bottom:1rem}
  .ab-sec-title span{color:var(--orange);font-style:italic}
  .ab-sec-title-white{color:#fff}
  .ab-sec-desc{font-size:1rem;color:var(--gray-600);line-height:1.8;max-width: 100%; max-width: 600px; height: auto;margin:0 auto}
  .ab-sec-desc-white{color:rgba(255,255,255,0.75)}

  .ab-story-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
  .ab-story-text p{font-size:0.97rem;color:var(--gray-600);line-height:1.9;margin-bottom:1.2rem}
  .ab-story-checks{display:flex;flex-direction:column;gap:0.75rem;margin-top:1.5rem}
  .ab-check{display:flex;align-items:center;gap:10px;font-size:0.92rem;font-weight:500;color:var(--gray-800)}
  .ab-story-visual{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
  .ab-stat-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:16px;padding:2rem 1.5rem;text-align:center;box-shadow:var(--shadow-md);transition:transform .3s,box-shadow .3s}
  .ab-stat-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg)}
  .ab-stat-card:nth-child(2){margin-top:1.5rem}
  .ab-stat-card:nth-child(4){margin-top:-1.5rem}
  .ab-stat-icon-wrap{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem}
  .ab-stat-icon-blue{background:var(--blue-lt);color:var(--blue-md)}
  .ab-stat-icon-orange{background:var(--orange-lt);color:var(--orange)}
  .ab-stat-num{font-family:'Playfair Display',serif;font-size:2.6rem;font-weight:700;color:var(--blue);line-height:1}
  .ab-stat-lbl{font-size:0.78rem;color:var(--gray-600);margin-top:4px;letter-spacing:0.05em}

  .ab-steps{display:grid;grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));gap:2rem;max-width:1200px;margin:0 auto}
  .ab-step-card{background:var(--white);border-radius:20px;padding:2.5rem 2rem;box-shadow:var(--shadow-md);border:1.5px solid var(--gray-200);position:relative;transition:transform .3s,box-shadow .3s;overflow:hidden}
  .ab-step-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--blue),var(--orange));border-radius:20px 20px 0 0}
  .ab-step-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg)}
  .ab-step-num-badge{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:var(--blue);color:#fff;font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;margin-bottom:1.2rem}
  .ab-step-icon-wrap{width:56px;height:56px;border-radius:16px;background:var(--blue-lt);display:flex;align-items:center;justify-content:center;color:var(--blue-md);margin-bottom:1.2rem}
  .ab-step-title{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:600;color:var(--gray-800);margin-bottom:0.7rem}
  .ab-step-desc{font-size:0.88rem;color:var(--gray-600);line-height:1.75}

  .ab-types-grid{display:grid;grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));gap:1.8rem;max-width:1200px;margin:0 auto}
  .ab-type-card{background:var(--white);border-radius:20px;padding:2.5rem 2rem;border:1.5px solid var(--gray-200);box-shadow:var(--shadow-sm);transition:all .35s;cursor:pointer;position:relative;overflow:hidden}
  .ab-type-card::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--orange));transform:scaleX(0);transition:transform .35s;transform-origin:left}
  .ab-type-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:var(--blue-lt)}
  .ab-type-card:hover::after{transform:scaleX(1)}
  .ab-type-icon{width:64px;height:64px;border-radius:18px;display:flex;align-items:center;justify-content:center;margin-bottom:1.4rem;transition:transform .3s}
  .ab-type-card:hover .ab-type-icon{transform:scale(1.08)}
  .ab-type-name{font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:600;color:var(--gray-800);margin-bottom:0.6rem}
  .ab-type-desc{font-size:0.86rem;color:var(--gray-600);line-height:1.7;margin-bottom:1.2rem}
  .ab-type-tag{display:inline-flex;align-items:center;gap:5px;font-size:0.72rem;font-weight:600;letter-spacing:0.1em;color:var(--blue-md);background:var(--blue-lt);padding:0.32rem 0.85rem;border-radius:999px}

  .ab-values-grid{display:grid;grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));gap:2rem;max-width:1200px;margin:0 auto}
  .ab-value-card{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:20px;padding:2.5rem 1.8rem;text-align:center;transition:background .3s,transform .3s}
  .ab-value-card:hover{background:rgba(255,255,255,0.14);transform:translateY(-5px)}
  .ab-value-icon{width:68px;height:68px;border-radius:50%;background:rgba(249,115,22,0.2);border:2px solid rgba(249,115,22,0.4);display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;color:#fed7aa;transition:background .3s,border-color .3s}
  .ab-value-card:hover .ab-value-icon{background:rgba(249,115,22,0.35);border-color:var(--orange)}
  .ab-value-title{font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:600;color:#fff;margin-bottom:0.7rem}
  .ab-value-desc{font-size:0.85rem;color:rgba(255,255,255,0.65);line-height:1.75}

  .ab-team-grid{display:grid;grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));gap:2rem;max-width:1200px;margin:0 auto}
  .ab-team-card{background:var(--white);border:1.5px solid var(--gray-200);border-radius:20px;padding:2.5rem 1.5rem;text-align:center;box-shadow:var(--shadow-sm);transition:all .35s}
  .ab-team-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:var(--blue-lt)}
  .ab-team-avatar{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--blue-md));border:3px solid var(--blue-lt);margin:0 auto 1.4rem;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:700;color:#fff;transition:border-color .3s}
  .ab-team-card:hover .ab-team-avatar{border-color:var(--orange)}
  .ab-team-name{font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:600;color:var(--gray-800);margin-bottom:0.3rem}
  .ab-team-role{font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--orange);margin-bottom:0.9rem}
  .ab-team-bio{font-size:0.82rem;color:var(--gray-600);line-height:1.7}

  .ab-cta{background:linear-gradient(135deg,#fff7ed,#dbeafe);padding:6rem 5%;text-align:center;position:relative;overflow:hidden}
  .ab-cta::before{content:'✦';position:absolute;font-size:20rem;color:rgba(249,115,22,0.04);top:-4rem;left:-4rem;line-height:1;pointer-events:none}
  .ab-cta::after{content:'◈';position:absolute;font-size:18rem;color:rgba(26,60,110,0.04);bottom:-4rem;right:-4rem;line-height:1;pointer-events:none}
  .ab-cta-inner{position:relative;z-index:2;max-width:680px;margin:0 auto}
  .ab-cta-title{font-family:'Playfair Display',serif;font-size:clamp(2rem,4.5vw,3rem);font-weight:700;color:var(--blue);margin-bottom:1rem;line-height:1.2}
  .ab-cta-title span{color:var(--orange);font-style:italic}
  .ab-cta-desc{font-size:0.97rem;color:var(--gray-600);line-height:1.8;margin-bottom:2.5rem}
  .ab-btn-wrap{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
  .ab-btn-primary{display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:#fff;font-size:0.88rem;font-weight:600;letter-spacing:0.06em;padding:0.9rem 2.2rem;border-radius:999px;border:none;cursor:pointer;box-shadow:0 4px 18px rgba(249,115,22,0.35);transition:all .3s}
  .ab-btn-primary:hover{background:#ea6c0a;transform:translateY(-2px);box-shadow:0 6px 24px rgba(249,115,22,0.45)}
  .ab-btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--blue);font-size:0.88rem;font-weight:600;letter-spacing:0.06em;padding:0.9rem 2.2rem;border-radius:999px;border:2px solid var(--blue);cursor:pointer;transition:all .3s}
  .ab-btn-outline:hover{background:var(--blue);color:#fff;transform:translateY(-2px)}

  .ab-contact-bar{background:var(--gray-800);padding:2rem 5%;display:flex;align-items:center;justify-content:center;gap:4rem;flex-wrap:wrap}
  .ab-contact-item{display:flex;align-items:center;gap:10px;font-size:0.88rem;color:rgba(255,255,255,0.75)}
  .ab-contact-item svg{color:var(--orange);flex-shrink:0}

  .ab-footer{padding:2rem 5%;background:var(--gray-800);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
  .ab-footer-logo{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:700;color:#fff}
  .ab-footer-logo span{color:var(--orange)}
  .ab-footer-copy{font-size:0.8rem;color:rgba(255,255,255,0.45)}

  .ab-reveal{opacity:0;transform:translateY(28px);transition:opacity .75s ease,transform .75s ease}
  .ab-reveal.vis{opacity:1;transform:translateY(0)}

  @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
  @keyframes abWordPop{from{opacity:0;transform:translateY(22px) scale(0.88)}to{opacity:1;transform:translateY(0) scale(1)}}
  @keyframes abDotBounce{0%,100%{transform:scale(1);opacity:.55}50%{transform:scale(1.7);opacity:1}}

  @media(max-width:1024px){.ab-values-grid{grid-template-columns:repeat(2,1fr)}.ab-team-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:900px){.ab-story-grid{grid-template-columns:1fr;gap:3rem}.ab-steps{grid-template-columns:1fr}.ab-types-grid{grid-template-columns:1fr 1fr}.ab-hero-stats{gap:2rem}}
  @media(max-width:600px){.ab-types-grid{grid-template-columns:1fr}.ab-values-grid{grid-template-columns:1fr}.ab-team-grid{grid-template-columns:1fr}.ab-story-visual{grid-template-columns:1fr 1fr}.ab-stat-card:nth-child(2),.ab-stat-card:nth-child(4){margin-top:0}.ab-btn-wrap,.ab-hero-btns{flex-direction:column;align-items:center}.ab-title-line{gap:0.1em}}
`;

const STATS = [
  { num:"12K+", label:"Bookings Done", iconBg:"ab-stat-icon-orange", Icon:CheckCircle },
  { num:"6",    label:"Building Types",iconBg:"ab-stat-icon-blue",   Icon:Building2   },
];

const STEPS = [
  { num:"01", Icon:Users,       title:"Register & Login",        desc:"Create your account in seconds. Secure authentication keeps your data safe while your profile personalises every recommendation." },
  { num:"02", Icon:Building2,   title:"Choose Building Type",    desc:"Select from 6 categories — Home, Hospital, Mall, Restaurant, Apartment, or College and explore designs built for your vision." },
  { num:"03", Icon:Star,        title:"Explore Styles & Designs",desc:"Each category offers 6 distinct styles. View full images, architect profiles, and detailed cost breakdowns before deciding." },
  { num:"04", Icon:CheckCircle, title:"Review All Details",      desc:"Study structural cost, finishing cost, timeline, architect credentials — transparently laid out on one clean page." },
  { num:"05", Icon:Award,       title:"Book with Confidence",    desc:'Hit "Book Now" — your booking confirms instantly with a dedicated architect assigned to your project.' },
  { num:"06", Icon:Heart,       title:"Build Your Dream",        desc:"From booking to blueprint to construction, ArchVista stays with you every step of the way." },
];

const BUILDING_TYPES = [
  { Icon:Home,            bg:"#dbeafe", ic:"#2563eb", name:"Homes",         desc:"From minimalist villas to traditional Telugu architecture — designs that reflect who you are." },
  { Icon:Hospital,        bg:"#dcfce7", ic:"#16a34a", name:"Hospitals",     desc:"Functional, compassionate spaces designed around healing and patient wellbeing." },
  { Icon:ShoppingBag,     bg:"#fef3c7", ic:"#d97706", name:"Shopping Malls",desc:"Retail environments engineered for footfall, experience, and commerce." },
  { Icon:UtensilsCrossed, bg:"#fce7f3", ic:"#db2777", name:"Restaurants",   desc:"Ambience is half the meal. Dining spaces crafted to elevate every sensory moment." },
  { Icon:Building2,       bg:"#ede9fe", ic:"#7c3aed", name:"Apartments",    desc:"Urban living reimagined — compact efficiency and premium finishes in every unit." },
  { Icon:GraduationCap,   bg:"#fff7ed", ic:"#ea580c", name:"Colleges",      desc:"Learning environments that inspire — open campuses and modern labs." },
];

const VALUES = [
  { Icon:Shield,    title:"Transparency", desc:"Full cost breakdowns, no hidden fees. Every rupee accounted for before you commit." },
  { Icon:Award,     title:"Quality",      desc:"Every architect is verified, certified, and reviewed by real clients." },
  { Icon:Lightbulb, title:"Innovation",   desc:"Smart booking, digital blueprints, and AI-assisted cost estimation." },
  { Icon:Heart,     title:"Trust",        desc:"From your first login to final walkthrough, we stand behind every booking." },
];

const TEAM = [
  { initials:"RK", name:"Ravi Kumar",   role:"Founder & CEO",      bio:"15 years in commercial architecture. Envisioned ArchVista to democratize quality design across India." },
  { initials:"PS", name:"Priya Sharma", role:"Head of Design",     bio:"IIT Bombay architect. Curates every design style and ensures it meets our quality standards." },
  { initials:"AR", name:"Arun Reddy",   role:"CTO",                bio:"Built the booking engine from scratch. Passionate about seamless user experiences." },
  { initials:"MN", name:"Meera Nair",   role:"Architect Relations", bio:"Maintains relationships with 500+ architects, ensuring every partner upholds our promise." },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("vis"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, style }) {
  const ref = useReveal();
  return <div ref={ref} className="ab-reveal" style={style}>{children}</div>;
}

function TitleBanner() {
  return (
    <div className="ab-title-banner">
      <div className="ab-title-line">
        <span className="ab-tw ab-tw-xl ab-tw-white">Smart</span>
        <span className="ab-tw ab-tw-xl ab-tw-orange">Architecture</span>
        <span className="ab-tw ab-tw-md ab-tw-muted">&amp;</span>
        <span className="ab-tw ab-tw-lg ab-tw-teal">Booking</span>
        <span className="ab-tw ab-tw-sm ab-tw-muted">by</span>
        <span className="ab-tw ab-tw-lg ab-tw-pink">Platform</span>
      </div>
      <div className="ab-title-dots">
        {[1,2,3,4,5].map(i => <div key={i} className="ab-td" />)}
      </div>
    </div>
  );
}

function Hero({ onBook }) {
  return (
    <>
      <TitleBanner />
      <section className="ab-hero">
        <div className="ab-hero-inner">
          <div className="ab-badge"><Building2 size={13} />Smart Architecture Booking Platform</div>
          <h1>We Design the Spaces<br />You <span>Dream Of</span></h1>
          <div className="ab-hero-divider" />
          <p className="ab-hero-sub">India's premier platform connecting you with certified architects across 6 building categories — transparent, trusted, and seamless.</p>
          <div className="ab-hero-stats">
            {STATS.map(s => (
              <div className="ab-hero-stat" key={s.label}>
                <div className="ab-hero-stat-num">{s.num}</div>
                <div className="ab-hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="ab-hero-btns">
            <button className="ab-btn-hero-pri" onClick={onBook}>Book Your Design <ArrowRight size={16} /></button>
            <button className="ab-btn-hero-out" onClick={onBook}>Explore Buildings <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>
      <div className="ab-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" height="60">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#f8fafc"/>
        </svg>
      </div>
    </>
  );
}

function StorySection() {
  return (
    <section className="ab-sec ab-sec-gray">
      <div className="ab-story-grid">
        <Reveal>
          <div className="ab-story-text">
            <div className="ab-chip"><Building2 size={12} /> Our Story</div>
            <h2 className="ab-sec-title">Born from a <span>Vision</span></h2>
            <p>ArchVista was founded with one belief — finding and booking the perfect architecture should be as seamless as booking a flight. The gap between clients and world-class architects was wide, opaque, and frustrating.</p>
            <p>We built a platform that removes every friction point. From first browse to final booking, every step is transparent, elegant, and human — with certified architects and verified designs across six key categories.</p>
            <div className="ab-story-checks">
              {["500+ verified architects nationwide","Transparent cost breakdown","6 building categories, 6 styles each","Instant booking confirmation"].map(t => (
                <div className="ab-check" key={t}><CheckCircle size={18} color="#2563eb" />{t}</div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="ab-story-visual">
            {STATS.map(s => (
              <div className="ab-stat-card" key={s.label}>
                <div className={`ab-stat-icon-wrap ${s.iconBg}`}><s.Icon size={22} /></div>
                <div className="ab-stat-num">{s.num}</div>
                <div className="ab-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="ab-sec">
      <Reveal>
        <div className="ab-sec-head">
          <div className="ab-chip ab-chip-orange"><Star size={12} /> Platform Flow</div>
          <h2 className="ab-sec-title">How <span>ArchVista</span> Works</h2>
          <p className="ab-sec-desc">Six simple steps from idea to your dream building</p>
        </div>
      </Reveal>
      <div className="ab-steps">
        {STEPS.map((s, i) => (
          <Reveal key={s.num} style={{ transitionDelay:`${i * 80}ms` }}>
            <div className="ab-step-card">
              <div className="ab-step-num-badge">{s.num}</div>
              <div className="ab-step-icon-wrap"><s.Icon size={24} /></div>
              <div className="ab-step-title">{s.title}</div>
              <p className="ab-step-desc">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BuildingTypesSection() {
  return (
    <section className="ab-sec ab-sec-gray">
      <Reveal>
        <div className="ab-sec-head">
          <div className="ab-chip"><Building2 size={12} /> What We Design</div>
          <h2 className="ab-sec-title">Six Spaces, <span>Infinite</span> Possibilities</h2>
          <p className="ab-sec-desc">Each category has 6 unique architectural styles to choose from</p>
        </div>
      </Reveal>
      <div className="ab-types-grid">
        {BUILDING_TYPES.map((b, i) => (
          <Reveal key={b.name} style={{ transitionDelay:`${i * 70}ms` }}>
            <div className="ab-type-card">
              <div className="ab-type-icon" style={{ background:b.bg, color:b.ic }}><b.Icon size={28} /></div>
              <div className="ab-type-name">{b.name}</div>
              <p className="ab-type-desc">{b.desc}</p>
              <span className="ab-type-tag"><Star size={10} /> 6 Styles Available</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="ab-sec ab-sec-blue">
      <Reveal>
        <div className="ab-sec-head">
          <div className="ab-chip ab-chip-white"><Heart size={12} /> What Drives Us</div>
          <h2 className="ab-sec-title ab-sec-title-white">Our Core <span>Values</span></h2>
          <p className="ab-sec-desc ab-sec-desc-white">The principles that guide every decision we make</p>
        </div>
      </Reveal>
      <div className="ab-values-grid">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} style={{ transitionDelay:`${i * 80}ms` }}>
            <div className="ab-value-card">
              <div className="ab-value-icon"><v.Icon size={26} /></div>
              <div className="ab-value-title">{v.title}</div>
              <p className="ab-value-desc">{v.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="ab-sec">
      <Reveal>
        <div className="ab-sec-head">
          <div className="ab-chip"><Users size={12} /> The People</div>
          <h2 className="ab-sec-title">Meet Our <span>Team</span></h2>
          <p className="ab-sec-desc">Architects, technologists, and designers united by one mission</p>
        </div>
      </Reveal>
      <div className="ab-team-grid">
        {TEAM.map((t, i) => (
          <Reveal key={t.name} style={{ transitionDelay:`${i * 80}ms` }}>
            <div className="ab-team-card">
              <div className="ab-team-avatar">{t.initials}</div>
              <div className="ab-team-name">{t.name}</div>
              <div className="ab-team-role">{t.role}</div>
              <p className="ab-team-bio">{t.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTASection({ onBook }) {
  return (
    <>
      <TitleBanner />
      <section className="ab-cta">
        <Reveal>
          <div className="ab-cta-inner">
            <div className="ab-chip ab-chip-orange"><Star size={12} /> Get Started</div>
            <h2 className="ab-cta-title">Ready to Build Something<br /><span>Remarkable?</span></h2>
            <p className="ab-cta-desc">Join thousands of clients who trusted ArchVista to shape their most important spaces. Your journey starts with a single click.</p>
            <div className="ab-btn-wrap">
              <button className="ab-btn-primary" onClick={onBook}>Book Your Design <ArrowRight size={16} /></button>
              <button className="ab-btn-outline" onClick={onBook}>Explore Buildings <ArrowRight size={16} /></button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ContactBar() {
  return (
    <div className="ab-contact-bar">
      {[
        { Icon:Phone, text:"+91 98765 43210" },
        { Icon:Mail,  text:"tejasri@gmail.com" },
        { Icon:MapPin,text:"Hyderabad, Andhra Pradesh" },
      ].map(({ Icon, text }) => (
        <div className="ab-contact-item" key={text}><Icon size={16} /><span>{text}</span></div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="ab-footer">
      <div className="ab-footer-logo">Arch<span>Vista</span></div>
      <p className="ab-footer-copy">© 2025 ArchVista. Smart Architecture Booking Platform.</p>
    </footer>
  );
}

export default function AboutUs() {
  const navigate = useNavigate();
  const goLogin  = () => navigate("/login");

  return (
    <>
      <style>{`${styles}
        @media (max-width: 600px) {
          .card-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
            grid-template-columns: 1fr !important;
            padding: 15px !important;
            gap: 20px !important;
          }
          .card {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      <div className="ab">
        <Hero          onBook={goLogin} />
        <StorySection />
        <HowItWorksSection />
        <BuildingTypesSection />
        <ValuesSection />
        <TeamSection />
        <CTASection    onBook={goLogin} />
        <ContactBar />
        <Footer />
      </div>
    </>
  );
}