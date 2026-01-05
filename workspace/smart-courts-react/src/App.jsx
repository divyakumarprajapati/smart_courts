import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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

// Feature Card Component
const FeatureCard = ({ icon: IconComponent, title, description, link, image, delay }) => {
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
          <div className="relative mb-6 rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="icon-box">
                <IconComponent className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">{description}</p>

          {/* Link */}
          <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Capability Item
const CapabilityItem = ({ icon: IconComponent, title, description }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
        <IconComponent className="w-5 h-5 text-emerald-400" />
      </div>
    </div>
    <div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

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
    },
    {
      icon: Brain,
      title: "Match Orchestration",
      description:
        "Intelligent automation to manage rallies, validate serves, update scores, and control game flow — zero human intervention required.",
      link: "/match-orchestration",
      image: "/match-orchestrations.png",
    },
    {
      icon: BarChart3,
      title: "Player Analytics",
      description:
        "Deep performance insights with movement heatmaps, shot analysis, reaction times, and tactical recommendations for players and coaches.",
      link: "/player-analytics",
      image: "/plater-analytics-thumb.png",
    },
  ];

  const stats = [
    { value: 24, suffix: "B", prefix: "$", label: "Sports Tech Market" },
    { value: 13, suffix: "%", label: "Annual Growth Rate" },
    { value: 12, suffix: "K+", label: "Target Courts in India" },
    { value: 30, suffix: "ms", prefix: "<", label: "Decision Latency" },
  ];

  const capabilities = [
    {
      icon: Target,
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
      icon: Zap,
      title: "Real-Time Feedback",
      description: "Live scoreboards, audio cues, instant replays, and highlights.",
    },
    {
      icon: Globe,
      title: "Multi-Sport Ready",
      description: "Scalable from badminton to tennis, basketball, and beyond.",
    },
    {
      icon: Activity,
      title: "Data Pipeline",
      description: "Structured analytics with optional cloud sync for insights.",
    },
  ];

  const targetUsers = [
    { icon: Building2, label: "Sports Venues" },
    { icon: Trophy, label: "Academies" },
    { icon: Users, label: "Tournament Organizers" },
    { icon: TrendingUp, label: "Broadcasters" },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              <span className="text-white">The Operating System for </span>
              <span className="text-gradient">Smart Sports Courts</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
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
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Join Early Access</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("demo")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Play className="w-5 h-5" />
                <span>See it in Action</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-white/5"
            >
              <p className="text-gray-500 text-sm mb-6">Designed for the future of sports</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {targetUsers.map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <user.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{user.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Everything Your Court Needs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
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
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-transparent to-purple-950/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 badge badge-primary mb-4"
              >
                <Brain className="w-4 h-4" />
                <span>The Technology</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              >
                AI That Sees, Thinks, and Decides
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-10"
              >
                CourtNG combines computer vision, intelligent rule engines, and 
                edge computing to create a seamless, automated court experience 
                with sub-30ms decision latency.
              </motion.p>

              <div className="space-y-6">
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

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glass-card p-6">
                {/* Architecture Diagram */}
                <div className="space-y-4">
                  {/* Vision Module */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Vision Module</div>
                      <div className="text-gray-400 text-sm">Object detection & tracking</div>
                    </div>
                    <div className="badge badge-success text-xs">Active</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-500 to-cyan-500" />
                  </div>

                  {/* Game Logic */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Game Logic Engine</div>
                      <div className="text-gray-400 text-sm">Rule processing & decisions</div>
                    </div>
                    <div className="badge badge-success text-xs">Active</div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-cyan-500" />
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Analytics Module</div>
                      <div className="text-gray-400 text-sm">Performance insights & data</div>
                    </div>
                    <div className="badge badge-success text-xs">Active</div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">&lt;30ms</div>
                      <div className="text-gray-500 text-sm">Latency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-gray-500 text-sm">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-50 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Court Demo Section */}
      <section id="demo" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 badge badge-primary mb-4"
            >
              <Play className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Experience CourtNG in Action
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Watch our AI system track players, follow the ball, and make real-time decisions 
              with multiple camera angles.
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
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-30" />
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
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
              <img
                src="/3d-court-illustration.png"
                alt="CourtNG Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <p className="text-white font-medium">View on desktop for 3D demo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section id="market" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />
        
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              A Massive, Growing Market
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
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
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="stat-number text-emerald-400 mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Additional Market Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 glass-card rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-2">Initial Focus</h4>
                <p className="text-gray-400">
                  Badminton & tennis clubs, training academies, and indoor sports 
                  centers where automation creates immediate ROI.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-2">Expansion Path</h4>
                <p className="text-gray-400">
                  Multi-sport support, league integration, broadcast partnerships, 
                  and community features on our roadmap.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-2">Competitive Edge</h4>
                <p className="text-gray-400">
                  Edge-first architecture, sport-agnostic design, and full automation 
                  set us apart from traditional solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why CourtNG Section */}
      <section className="py-24 relative overflow-hidden">
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
                  { icon: CheckCircle2, text: "Zero Referee Dependency", color: "blue" },
                  { icon: Clock, text: "Sub-30ms Decisions", color: "purple" },
                  { icon: Globe, text: "Multi-Sport Ready", color: "cyan" },
                  { icon: Shield, text: "99.9% Accuracy", color: "green" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`glass-card rounded-xl p-6 border border-${item.color}-500/20`}
                  >
                    <item.icon className={`w-8 h-8 text-${item.color}-400 mb-3`} />
                    <p className="text-white font-medium">{item.text}</p>
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
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              >
                Built Different, Built Better
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-400"
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
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary flex items-center gap-2"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
                  className="text-3xl sm:text-4xl font-bold mb-6"
                >
                  Ready to Transform Your Court?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-lg mb-8"
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
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
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
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
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
                  </button>
                  {formStatus === "error" && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
