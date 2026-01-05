import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Play,
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
  Layers,
  MonitorPlay,
  Camera,
  Wifi,
  Server,
  PlayCircle,
  ChevronDown,
  Star,
  Gauge,
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
      title: "AI Referee System",
      description:
        "Real-time computer vision for precise ball tracking, line-in/out judgments, and automated foul detection with sub-second accuracy.",
      link: "/computer-vision",
      image: "/3d-court-illustration.png",
      color: "emerald",
    },
    {
      icon: Brain,
      title: "Match Orchestration",
      description:
        "Intelligent automation to manage rallies, validate serves, update scores, and control game flow — zero human intervention required.",
      link: "/match-orchestration",
      image: "/match-orchestrations.png",
      color: "cyan",
    },
    {
      icon: BarChart3,
      title: "Player Analytics",
      description:
        "Deep performance insights with movement heatmaps, shot analysis, reaction times, and tactical recommendations for players and coaches.",
      link: "/player-analytics",
      image: "/plater-analytics-thumb.png",
      color: "purple",
    },
  ];

  const problems = [
    { icon: AlertTriangle, title: "Manual Scoring & Refereeing", description: "Human errors and inconsistencies affect game fairness" },
    { icon: XCircle, title: "No Real-Time Insights", description: "Players and viewers miss valuable performance data" },
    { icon: Users, title: "High Human Dependency", description: "Requires multiple staff for basic court operations" },
    { icon: Activity, title: "Inconsistent Experience", description: "Quality varies significantly across different venues" },
  ];

  const solutions = [
    { icon: Eye, title: "AI-Powered Vision", description: "Computer vision detects every event with precision" },
    { icon: Zap, title: "Instant Decisions", description: "Sub-30ms latency for real-time decision making" },
    { icon: Target, title: "Rule Automation", description: "Configurable rule engine for any sport" },
    { icon: BarChart3, title: "Rich Analytics", description: "Comprehensive data for performance improvement" },
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
      title: "Multi-Camera Vision",
      description: "60-120 FPS synchronized capture with object detection and tracking.",
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "On-premise AI inference with NVIDIA Jetson-class hardware.",
    },
    {
      icon: Shield,
      title: "Rule Engine",
      description: "Configurable logic per sport with probabilistic edge-case handling.",
    },
    {
      icon: MonitorPlay,
      title: "Real-Time Feedback",
      description: "Live scoreboards, audio cues, instant replays, and highlights.",
    },
    {
      icon: Globe,
      title: "Multi-Sport Ready",
      description: "Scalable from badminton to tennis, basketball, and beyond.",
    },
    {
      icon: Server,
      title: "Data Pipeline",
      description: "Structured analytics with optional cloud sync for insights.",
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
      items: ["Core vision models", "Basic rule engine", "Single-sport support", "Local deployment"],
    },
    {
      phase: "Phase 2",
      title: "Enhancement",
      status: "current",
      items: ["Multi-camera support", "Advanced analytics", "Cloud sync", "Mobile app"],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      status: "upcoming",
      items: ["Multi-sport support", "League integration", "AI officiating v2", "Broadcasting tools"],
    },
    {
      phase: "Phase 4",
      title: "Scale",
      status: "upcoming",
      items: ["Global deployment", "Player rankings", "Community features", "API ecosystem"],
    },
  ];

  const typingTexts = [
    "Smart Sports Courts",
    "AI-Powered Officiating",
    "Real-Time Analytics",
    "Automated Game Flow",
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
              Transform any court into an intelligent, automated environment. 
              AI-powered officiating, real-time analytics, and seamless game management — 
              no referees needed.
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
              Traditional Courts Are <span className="text-gradient-warm">Falling Behind</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Today&apos;s sports courts face critical limitations that restrict scalability, 
              accuracy, and engagement.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Problems */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="line-decoration bg-gradient-to-r from-red-500 to-orange-500" />
                <h3 className="text-xl font-bold text-slate-800">Current Problems</h3>
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
                <h3 className="text-xl font-bold text-slate-800">Our Solutions</h3>
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

      {/* Video Showcase Section */}
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
              <Play className="w-4 h-4" />
              <span>See It In Action</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800"
            >
              Experience <span className="text-gradient">CourtNG</span> Live
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Watch our AI system track players, follow the ball, and make real-time decisions 
              with multiple camera angles.
            </motion.p>
          </div>

          {/* Video Player Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60" />
            <div className="relative video-preview rounded-2xl overflow-hidden bg-slate-900 aspect-video">
              {/* Video Placeholder with Play Button */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="/3d-court-illustration.png"
                  alt="CourtNG Demo"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group"
                >
                  <Play className="w-8 h-8 text-emerald-600 ml-1 group-hover:scale-110 transition-transform" />
                </motion.button>
              </div>
              
              {/* Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4">
                  <Play className="w-5 h-5 text-white" />
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-emerald-500 rounded-full" />
                  </div>
                  <span className="text-white text-sm">2:34 / 5:00</span>
                </div>
              </div>

              {/* Live Stats Overlay */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="badge bg-red-500 text-white border-none text-xs">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-1" />
                  LIVE
                </div>
                <div className="badge bg-white/20 backdrop-blur text-white border-none text-xs">
                  AI Active
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Court Demo - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 hidden md:block"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Interactive 3D Court View</h3>
              <p className="text-slate-600">Explore our multi-camera setup in 3D</p>
            </div>
            <div className="relative mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
              <CourtNG />
            </div>
          </motion.div>
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
              Everything Your <span className="text-gradient">Court Needs</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              A complete AI-first operating system that automates officiating, 
              orchestrates gameplay, and delivers actionable insights.
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
                AI That <span className="text-gradient-cool">Sees, Thinks, and Decides</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-600 text-lg mb-10"
              >
                CourtNG combines computer vision, intelligent rule engines, and 
                edge computing to create a seamless, automated court experience 
                with sub-30ms decision latency.
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
              Powering the Future of <span className="text-gradient">Play</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-3xl mx-auto"
            >
              Our long-term goal is to become the default intelligence platform for sports courts globally — 
              similar to how operating systems power devices. CourtNG aims to power play itself.
            </motion.p>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "See",
                description: "Multi-camera computer vision captures every moment with precision",
                color: "emerald",
              },
              {
                icon: Brain,
                title: "Think",
                description: "AI processes data in real-time to understand game context",
                color: "purple",
              },
              {
                icon: Zap,
                title: "Decide",
                description: "Intelligent rule engine makes instant, accurate decisions",
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
                Our Journey to Transform Sports
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
              A Massive, <span className="text-gradient">Growing Market</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              The sports technology industry is experiencing explosive growth. 
              CourtNG is positioned to capture significant market share across multiple segments.
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
                  title: "Initial Focus",
                  icon: Target,
                  description: "Badminton & tennis clubs, training academies, and indoor sports centers where automation creates immediate ROI.",
                },
                {
                  title: "Expansion Path",
                  icon: Rocket,
                  description: "Multi-sport support, league integration, broadcast partnerships, and community features on our roadmap.",
                },
                {
                  title: "Competitive Edge",
                  icon: Award,
                  description: "Edge-first architecture, sport-agnostic design, and full automation set us apart from traditional solutions.",
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
                  { icon: CheckCircle2, text: "Zero Referee Dependency", color: "emerald" },
                  { icon: Clock, text: "Sub-30ms Decisions", color: "purple" },
                  { icon: Globe, text: "Multi-Sport Ready", color: "cyan" },
                  { icon: Shield, text: "99.9% Accuracy", color: "orange" },
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
                Built Different, <span className="text-gradient">Built Better</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 text-slate-600"
              >
                <p>
                  Traditional sports rely on fallible human referees, manual scorekeeping, 
                  and offer no real-time insights. CourtNG changes everything.
                </p>
                <p>
                  Our AI-first platform doesn&apos;t just automate — it transforms. Every match 
                  becomes a data-rich experience. Every decision is consistent, instant, and fair.
                </p>
                <p>
                  Think of CourtNG as the operating system for sports courts — just as iOS 
                  powers iPhones, CourtNG powers intelligent play.
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
                  Ready to Transform Your Court?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-slate-600 text-lg mb-8"
                >
                  Join our early access program and be among the first to experience 
                  the future of intelligent sports courts.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    "Instant match insights powered by AI",
                    "Eliminate referee errors with real-time decisions",
                    "Automated game orchestration saves time",
                    "Unlock player performance analytics",
                    "Priority access to new features",
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
