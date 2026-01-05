import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Workflow,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Play,
  ChevronRight,
  Timer,
  Gauge,
  Radio,
  Smartphone,
  Monitor,
  Bell,
  Sparkles,
  PlayCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FeatureItem = ({ icon: IconComponent, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ x: 10 }}
    className="flex gap-4 p-4 rounded-xl bg-white/50 border border-slate-200/50 hover:bg-white hover:shadow-lg hover:border-orange-200 transition-all duration-300"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200/50 flex items-center justify-center">
        <IconComponent className="w-5 h-5 text-orange-600" />
      </div>
    </div>
    <div>
      <h4 className="text-slate-800 font-semibold mb-1">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const BenefitCard = ({ icon: IconComponent, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="glass-card-elevated rounded-2xl p-6 text-center"
  >
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200/50 flex items-center justify-center mx-auto mb-4"
    >
      <IconComponent className="w-7 h-7 text-orange-600" />
    </motion.div>
    <h4 className="text-slate-800 font-bold text-lg mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{description}</p>
  </motion.div>
);

function MatchOrchestration() {
  const howItWorks = [
    {
      icon: Brain,
      title: "Event-Driven Rules Engine",
      description: "Vision events trigger a sophisticated rules engine modeling rally state & possession in real-time.",
    },
    {
      icon: Shield,
      title: "Service Validation",
      description: "AI analysis of foot placement, contact height, and timing ensures legal serve verification.",
    },
    {
      icon: Timer,
      title: "Instant Fault Detection",
      description: "Faults and out-of-play instantly stop rallies and update scores with zero delay.",
    },
    {
      icon: Radio,
      title: "Real-Time Broadcasting",
      description: "LED scoreboards and mobile apps updated instantly via WebSocket events.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Sub-Second Updates",
      description: "Score changes and officiating decisions happen in under 30ms.",
    },
    {
      icon: Gauge,
      title: "Flawless Accuracy",
      description: "AI ensures consistent, bias-free calls for every rally.",
    },
    {
      icon: Monitor,
      title: "Scoreboard Integration",
      description: "Seamless connection to LED displays and broadcast systems.",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Players and spectators get live updates on their devices.",
    },
    {
      icon: Bell,
      title: "Audio Feedback",
      description: "Clear audio cues for serves, faults, and score changes.",
    },
    {
      icon: Workflow,
      title: "Game Flow Control",
      description: "Automated management of sets, games, and tiebreakers.",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center hero-gradient overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-light opacity-50" />
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl" 
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge badge-warning mb-6"
          >
            <Brain className="w-4 h-4" />
            <span>Match Orchestration</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            <span className="text-slate-800">Zero Human </span>
            <span className="text-gradient-warm">Intervention</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Automate rally detection, service validation, and scoring for 
            seamless, dispute-free gameplay — all in real-time with AI-powered 
            match management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link to="/#contact" className="btn-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Get Early Access</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link to="/#demo" className="btn-secondary flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-orange-600" />
                <span>See Demo</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-dots-light opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 badge badge-warning mb-4"
              >
                <Workflow className="w-4 h-4" />
                <span>How It Works</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800"
              >
                Intelligent Game <span className="text-gradient-warm">Management</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-600 text-lg mb-10"
              >
                Our AI orchestration engine manages every aspect of the game — from 
                serve validation to score updates — without any human intervention.
              </motion.p>

              <div className="space-y-4">
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FeatureItem {...item} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/mo-how-it-works.svg"
                  alt="Match Orchestration Workflow"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden section-accent">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/mo-benefits.svg"
                  alt="Match Orchestration Benefits"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 badge badge-secondary mb-4"
              >
                <Zap className="w-4 h-4" />
                <span>Game Changer</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800"
              >
                Why This Changes <span className="text-gradient-cool">Everything</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-600 text-lg mb-8"
              >
                With AI-powered match orchestration, we deliver bias-free, 
                high-speed officiating and open new doors for player analytics 
                and broadcast enhancement.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Sub-second score updates and officiating decisions",
                  "Flawless accuracy for every rally without disputes",
                  "Seamless scoreboard and broadcast integration",
                  "Zero training needed for venue operators",
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-grid-light opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800"
            >
              Complete Automation <span className="text-gradient">Suite</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Everything you need to run matches without human intervention — 
              all powered by AI and integrated seamlessly.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card-elevated rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
                Ready to Automate Your Games?
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                Join our early access program and experience seamless, 
                automated match orchestration for your venue.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/#contact" className="btn-primary flex items-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/" className="btn-secondary flex items-center gap-2">
                    <span>Back to Home</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MatchOrchestration;
