import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ChevronRight,
  Eye,
  Brain,
  BarChart3,
  Zap,
  Target,
  Shield,
  Cpu,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Building2,
  Trophy,
  Clock,
  Activity,
  AlertTriangle,
  XCircle,
  Lightbulb,
  Rocket,
  Timer,
  Award,
  Camera,
  Server,
  PlayCircle,
  ChevronDown,
  Star,
  Gauge,
  MonitorPlay,
  Monitor,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourtNG from "./components/CourtNG";

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Floating Particle Component
const FloatingParticle = ({ delay = 0, duration = 8, size = 4, color = "emerald" }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ 
      opacity: [0, 0.6, 0],
      y: [-20, -150],
      x: [0, Math.random() * 100 - 50],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
    className={`absolute w-${size} h-${size} rounded-full bg-${color}-500/30`}
    style={{ 
      width: size, 
      height: size,
      left: `${Math.random() * 100}%`,
      bottom: 0,
    }}
  />
);

// Animated Background Orbs
const BackgroundOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
    />
    <motion.div
      animate={{ 
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"
    />
    <motion.div
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-32 left-1/3 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
    />
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon: IconComponent, title, description, link, image, delay, color = "emerald" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Link to={link} className="block group">
        <div className="feature-card h-full">
          {/* Image Preview */}
          <div className="relative mb-6 rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-slate-100 to-slate-200">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`icon-box bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 border-${color}-500/30`}
              >
                <IconComponent className={`w-5 h-5 text-${color}-600`} />
              </motion.div>
            </div>
            <div className="absolute top-4 right-4 badge badge-success text-xs">
              <Star className="w-3 h-3" />
              Featured
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">{description}</p>

          {/* Link */}
          <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Problem Card Component
const ProblemCard = ({ icon: IconComponent, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="problem-card group"
  >
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6 text-red-500" />
        </div>
      </div>
      <div>
        <h4 className="text-slate-800 font-semibold mb-1">{title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

// Solution Card Component
const SolutionCard = ({ icon: IconComponent, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="solution-card group"
  >
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6 text-emerald-600" />
        </div>
      </div>
      <div>
        <h4 className="text-slate-800 font-semibold mb-1">{title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

// Capability Item
const CapabilityItem = ({ icon: IconComponent, title, description }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex gap-4 p-4 rounded-xl bg-white/50 border border-slate-200/50 hover:bg-white hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 border border-emerald-200/50 flex items-center justify-center">
        <IconComponent className="w-5 h-5 text-emerald-600" />
      </div>
    </div>
    <div>
      <h4 className="text-slate-800 font-semibold mb-1">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// Roadmap Item
const RoadmapItem = ({ phase, title, items, status, index }) => {
  const statusColors = {
    completed: "bg-emerald-500",
    current: "bg-cyan-500 animate-pulse",
    upcoming: "bg-slate-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative pl-10"
    >
      <div className={`absolute left-0 top-1 w-4 h-4 rounded-full ${statusColors[status]} shadow-lg z-10`} />
      <div className="glass-card-elevated rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge badge-primary text-xs">{phase}</span>
          {status === "current" && (
            <span className="badge badge-success text-xs">
              <Activity className="w-3 h-3" />
              In Progress
            </span>
          )}
        </div>
        <h4 className="text-lg font-bold text-slate-800 mb-3">{title}</h4>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
              <CheckCircle2 className={`w-4 h-4 ${status === "completed" ? "text-emerald-500" : "text-slate-400"}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Typing Animation Component
const TypingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-gradient">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("http://localhost:5001/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      await res.json();
      setForm({ name: "", email: "", message: "" });
      setFormStatus("success");
      setTimeout(() => setFormStatus(""), 3000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 3000);
    }
  };

  const features = [
    {
      icon: Eye,
      title: "Never Argue a Call Again",
      description:
        "Get instant, precise in/out decisions on every shot. No more disputed line calls or waiting for referees — just fair, accurate officiating you can trust.",
      link: "/computer-vision",
      image: "/feature-ai-referee.svg",
      color: "emerald",
    },
    {
      icon: Brain,
      title: "Your Personal AI Referee",
      description:
        "Walk onto the court and it greets you. It watches every rally, calls every line, announces the score, and officiates your entire match — like having a professional referee just for you.",
      link: "/match-orchestration",
      image: "/feature-match-orchestration.svg",
      color: "cyan",
    },
    {
      icon: BarChart3,
      title: "See Your Game Like Never Before",
      description:
        "Discover where you excel and where to improve. Get personalized insights on your movement, shots, and tactics that help you level up your game.",
      link: "/player-analytics",
      image: "/feature-player-analytics.svg",
      color: "purple",
    },
  ];

  const problems = [
    { icon: AlertTriangle, title: "Frustrating Call Disputes", description: "You've lost points to bad calls or spent more time arguing than playing" },
    { icon: XCircle, title: "No Way to Track Progress", description: "You want to improve but have no data on what's working and what's not" },
    { icon: Users, title: "Always Waiting for Referees", description: "Can't start your game until someone's available to keep score" },
    { icon: Activity, title: "Inconsistent Playing Experience", description: "Every venue feels different, making it hard to stay in your groove" },
  ];

  const solutions = [
    { icon: Eye, title: "Fair, Instant Calls", description: "Every line call is accurate and immediate — no debates" },
    { icon: Zap, title: "The Court Officiates for You", description: "Walk on and play — the court greets you, runs your game, and calls every shot" },
    { icon: Target, title: "Your Performance, Measured", description: "See exactly how you're improving over time" },
    { icon: BarChart3, title: "Personalized Insights", description: "Get recommendations tailored to your game" },
  ];

  const stats = [
    { value: 24, suffix: "B", prefix: "$", label: "Sports Tech Market", icon: TrendingUp },
    { value: 13, suffix: "%", label: "Annual Growth Rate", icon: Gauge },
    { value: 12, suffix: "K+", label: "Target Courts in India", icon: Target },
    { value: 30, suffix: "ms", prefix: "<", label: "Decision Latency", icon: Timer },
  ];

  const capabilities = [
    {
      icon: Camera,
      title: "See Every Angle",
      description: "Multiple cameras capture your game from all sides — nothing gets missed.",
    },
    {
      icon: Cpu,
      title: "Instant Processing",
      description: "Decisions happen in milliseconds, right on the court, no delays.",
    },
    {
      icon: Shield,
      title: "Fair for Every Sport",
      description: "Rules are automatically applied correctly for your game.",
    },
    {
      icon: MonitorPlay,
      title: "Hear the Score Called Out",
      description: "\"15-love!\" — the court announces every point and key moments of your match.",
    },
    {
      icon: Globe,
      title: "Play Your Sport",
      description: "Works for badminton, tennis, pickleball, and more sports coming.",
    },
    {
      icon: Server,
      title: "Your Stats, Your Way",
      description: "Access your performance data anytime, anywhere.",
    },
  ];

  const targetUsers = [
    { icon: Building2, label: "Sports Venues", count: "500+" },
    { icon: Trophy, label: "Academies", count: "1000+" },
    { icon: Users, label: "Tournament Organizers", count: "200+" },
    { icon: TrendingUp, label: "Broadcasters", count: "50+" },
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      items: ["Accurate line calls", "Automatic scoring", "Badminton support", "Works offline"],
    },
    {
      phase: "Phase 2",
      title: "More for You",
      status: "current",
      items: ["Better court coverage", "Detailed player stats", "Save your matches", "Mobile app access"],
    },
    {
      phase: "Phase 3",
      title: "More Sports",
      status: "upcoming",
      items: ["Tennis & pickleball", "Join local leagues", "Smarter officiating", "Watch live matches"],
    },
    {
      phase: "Phase 4",
      title: "Play Anywhere",
      status: "upcoming",
      items: ["Courts worldwide", "Track your ranking", "Find players & matches", "Connect with apps"],
    },
  ];

  const typingTexts = [
    "Courts That Run Games",
    "Courts That Coaches You",
    "Every Call, Instant & Fair",
    "Real-Time Analytics",
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <BackgroundOrbs />
        <div className="absolute inset-0 bg-grid-light opacity-50" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.5} duration={8 + Math.random() * 4} size={4 + Math.random() * 4} />
          ))}
        </div>

        <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 badge badge-primary mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Now in Early Development</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              <span className="text-slate-800">The Operating System for </span>
              <br />
              <TypingText texts={typingTexts} />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Walk onto a court that greets you, officiates your game, and calls every line. 
              It announces the score, tracks your stats, and runs your match end-to-end — 
              like having a professional referee who never misses a thing.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center shadow-xl shadow-emerald-500/25"
              >
                <Sparkles className="w-5 h-5" />
                <span>Join Early Access</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("demo")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <PlayCircle className="w-5 h-5 text-emerald-600" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-slate-200"
            >
              <p className="text-slate-500 text-sm mb-6">Designed for the future of sports</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {targetUsers.map((user, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-2 text-slate-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm"
                  >
                    <user.icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium">{user.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById("problems").scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-slate-500 text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-emerald-600" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Problem & Solution Section */}
      <section id="problems" className="py-24 relative section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 badge badge-warning mb-4"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>The Challenge</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800"
            >
              Playing Shouldn&apos;t Be <span className="text-gradient-warm">This Hard</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              You just want to play, compete, and get better. But too often, the experience 
              gets in the way.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Problems */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="line-decoration bg-gradient-to-r from-red-500 to-orange-500" />
                <h3 className="text-xl font-bold text-slate-800">Sound Familiar?</h3>
              </div>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <ProblemCard key={index} {...problem} index={index} />
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="line-decoration" />
                <h3 className="text-xl font-bold text-slate-800">Here&apos;s How It Changes</h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <SolutionCard key={index} {...solution} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 badge badge-primary mb-4"
            >
              <Zap className="w-4 h-4" />
              <span>Core Capabilities</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800"
            >
              Everything You Need to <span className="text-gradient">Play Better</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Step onto a court that takes care of the details so you can focus 
              on playing, competing, and improving.
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-dots-light opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 badge badge-secondary mb-4"
              >
                <Brain className="w-4 h-4" />
                <span>The Technology</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-800"
              >
                Your Game, <span className="text-gradient-cool">Instantly Understood</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-600 text-lg mb-10"
              >
              The moment you step on, the court comes alive. It watches every rally, 
              calls \"Out!\" or \"In!\" instantly, announces the score after each point, 
              and manages your entire match — from first serve to \"Game, set, match!\"
              </motion.p>

              <div className="space-y-4">
                {capabilities.slice(0, 4).map((cap, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CapabilityItem {...cap} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Visual - Architecture */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative glass-card-elevated rounded-2xl p-6">
                {/* Architecture Diagram */}
                <div className="space-y-4">
                  {/* Vision Module */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-transparent border border-emerald-200/50"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-800 font-semibold">Vision Module</div>
                      <div className="text-slate-500 text-sm">Object detection & tracking</div>
                    </div>
                    <div className="badge badge-success text-xs">Active</div>
                  </motion.div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-500 to-cyan-500" />
                  </div>

                  {/* Game Logic */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-transparent border border-purple-200/50"
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-800 font-semibold">Game Logic Engine</div>
                      <div className="text-slate-500 text-sm">Rule processing & decisions</div>
                    </div>
                    <div className="badge badge-success text-xs">Active</div>
                  </motion.div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-cyan-500" />
                  </div>

                  {/* Analytics */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-transparent border border-cyan-200/50"
                  >
                    <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-800 font-semibold">Analytics Module</div>
                      <div className="text-slate-500 text-sm">Performance insights & data</div>
                    </div>
                    <div className="badge badge-success text-xs">Active</div>
                  </motion.div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 mt-4">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 rounded-xl bg-emerald-50"
                    >
                      <div className="text-2xl font-bold text-emerald-600">&lt;30ms</div>
                      <div className="text-slate-500 text-sm">Latency</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 rounded-xl bg-cyan-50"
                    >
                      <div className="text-2xl font-bold text-cyan-600">99.9%</div>
                      <div className="text-slate-500 text-sm">Accuracy</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 relative overflow-hidden section-accent">
        <BackgroundOrbs />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 badge badge-primary mb-4"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Our Vision</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800"
            >
              The Future of <span className="text-gradient">Your Game</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-3xl mx-auto"
            >
              Imagine stepping onto any court and hearing \"Ready to play?\" The court knows who you are, 
              officiates your entire match, and gives you pro-level analytics after. That&apos;s every game, everywhere.
            </motion.p>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "It Sees Everything",
                description: "Every ball, every line, every movement — the court watches like a hawk and never blinks",
                color: "emerald",
              },
              {
                icon: Brain,
                title: "It Knows the Rules",
                description: "Foot faults, let serves, line calls — the court knows your sport inside and out",
                color: "purple",
              },
              {
                icon: Zap,
                title: "It Speaks Up",
                description: "\"Out!\" \"Fault!\" \"30-15!\" — instant voice calls keep your game flowing smoothly",
                color: "cyan",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass-card-elevated rounded-2xl p-8 text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 badge badge-secondary mb-4"
              >
                <Rocket className="w-4 h-4" />
                <span>Roadmap</span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold text-slate-800"
              >
                What&apos;s Coming for You
              </motion.h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[1.45rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500 hidden md:block" />
              
              <div className="grid md:grid-cols-2 gap-6">
                {roadmap.map((item, index) => (
                  <RoadmapItem key={index} {...item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section id="market" className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-grid-light opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 badge badge-primary mb-4"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Market Opportunity</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800"
            >
              Join the <span className="text-gradient">CourtNG Movement</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Players everywhere are discovering a better way to play. 
              Be among the first to experience courts that work for you.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-elevated rounded-2xl p-6 text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </motion.div>
                <div className="stat-number mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Additional Market Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 glass-card-elevated rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "For Players",
                  icon: Target,
                  description: "Practice and compete with instant feedback. Track your progress over time and improve faster than ever before.",
                },
                {
                  title: "For Coaches",
                  icon: Rocket,
                  description: "Get detailed data on your players. Build training plans based on real performance metrics, not guesswork.",
                },
                {
                  title: "For Venues",
                  icon: Award,
                  description: "Attract more players with premium technology. Run more games with less staff and stand out from the competition.",
                },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4 }}
                  className="text-center md:text-left"
                >
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="text-slate-800 font-bold text-lg">{item.title}</h4>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why CourtNG Section */}
      <section className="py-24 relative overflow-hidden section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle2, text: "Play Without Referees", color: "emerald" },
                  { icon: Clock, text: "Instant Decisions", color: "purple" },
                  { icon: Globe, text: "Your Sport, Covered", color: "cyan" },
                  { icon: Shield, text: "Calls You Can Trust", color: "orange" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card-elevated rounded-xl p-6"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-3`}
                    >
                      <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                    </motion.div>
                    <p className="text-slate-800 font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 badge badge-primary mb-4"
              >
                <Trophy className="w-4 h-4" />
                <span>Why CourtNG</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-800"
              >
                Built for <span className="text-gradient">Players Like You</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 text-slate-600"
              >
                <p>
                  Picture this: You walk onto the court and it greets you by name. 
                  \"Ready when you are.\" You serve, and after a long rally — \"Out! 15-love.\" 
                  The court saw it, called it, and updated the score. You just play.
                </p>
                <p>
                  No more pausing to remember the score. No more debates about close calls. 
                  No more waiting for someone to officiate. The court handles everything 
                  with the precision of a professional referee.
                </p>
                <p>
                  After the match, you see your stats, watch replays of key points, and 
                  understand exactly how you played. This is what every game should feel like.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary flex items-center gap-2"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Court Demo Section */}
      <section id="demo" className="py-24 relative overflow-hidden section-accent">
        <BackgroundOrbs />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 badge badge-primary mb-4"
            >
              <Eye className="w-4 h-4" />
              <span>Interactive Demo</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800"
            >
              See It in <span className="text-gradient">Action</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              See how the court watches your game from every angle, tracks every shot, 
              and officiates every rally — all happening invisibly so you can just play.
            </motion.p>
          </div>

          {/* 3D Court - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="relative mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-50" />
              <CourtNG />
            </div>
          </motion.div>

          {/* Mobile Fallback */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:hidden"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 shadow-xl">
              <img
                src="/feature-ai-referee.svg"
                alt="CourtNG Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
                  <Monitor className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-slate-800 font-medium">View on desktop for 3D demo</p>
                  <p className="text-slate-500 text-sm">Interactive experience available on larger screens</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-gradient-radial-light" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card-elevated rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="grid lg:grid-cols-2 gap-12 relative">
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 badge badge-primary mb-4"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800"
                >
                  Ready to Play Smarter?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-slate-600 text-lg mb-8"
                >
                  Be among the first to experience the future of playing. 
                  Sign up now and we&apos;ll let you know when CourtNG is available near you.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    "A court that greets you and runs your match end-to-end",
                    "Instant line calls — \"Out!\" \"In!\" — called out loud",
                    "Score announced after every point, automatically",
                    "Your stats and highlights after every game",
                    "Be first to experience the future of playing",
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Right Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-modern w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="input-modern w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your court or facility..."
                      className="input-modern w-full resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={formStatus === "sending"}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                  {formStatus === "error" && (
                    <p className="text-red-500 text-sm text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
