import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  Activity,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
  Play,
  ChevronRight,
  TrendingUp,
  Users,
  LineChart,
  PieChart,
  Crosshair,
  Timer,
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
    className="flex gap-4 p-4 rounded-xl bg-white/50 border border-slate-200/50 hover:bg-white hover:shadow-lg hover:border-purple-200 transition-all duration-300"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 border border-purple-200/50 flex items-center justify-center">
        <IconComponent className="w-5 h-5 text-purple-600" />
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
      className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 border border-purple-200/50 flex items-center justify-center mx-auto mb-4"
    >
      <IconComponent className="w-7 h-7 text-purple-600" />
    </motion.div>
    <h4 className="text-slate-800 font-bold text-lg mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{description}</p>
  </motion.div>
);

const StatCard = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="glass-card-elevated rounded-xl p-4 text-center"
  >
    <div className="text-2xl font-bold text-purple-600 mb-1">{value}</div>
    <div className="text-slate-500 text-sm">{label}</div>
  </motion.div>
);

function PlayerAnalytics() {
  const howItWorks = [
    {
      icon: LineChart,
      title: "Every Shot Analyzed",
      description: "See which shots win points and which ones let you down.",
    },
    {
      icon: Activity,
      title: "Your Movement Tracked",
      description: "Understand how you move — speed, positioning, and court coverage.",
    },
    {
      icon: PieChart,
      title: "Visual Heatmaps",
      description: "See where you&apos;re strongest and where you&apos;re leaving gaps.",
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Compare your performance over time and see how you&apos;re improving.",
    },
    {
      icon: Timer,
      title: "Insights After Every Match",
      description: "Get your stats immediately — no waiting, no manual tracking.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Know What to Practice",
      description: "Clear data shows exactly what&apos;s working and what needs attention.",
    },
    {
      icon: TrendingUp,
      title: "Personalized Suggestions",
      description: "Get recommendations tailored to your game and skill level.",
    },
    {
      icon: Users,
      title: "Share with Your Coach",
      description: "Send your stats to coaches for better, more focused training.",
    },
    {
      icon: Zap,
      title: "Works with Your Apps",
      description: "Connect to fitness and sports apps you already use.",
    },
    {
      icon: Crosshair,
      title: "Understand Your Shots",
      description: "See shot speed, placement, and which types win you points.",
    },
    {
      icon: Activity,
      title: "See How You Move",
      description: "Track distance, speed, and where you spend time on court.",
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" 
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge badge-secondary mb-6"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Player Analytics</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            <span className="text-slate-800">See How You&apos;re </span>
            <span className="text-gradient-cool">Really Playing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Stop guessing what to work on. Get clear insights into your strengths, 
            weaknesses, and progress over time — so every practice session 
            counts and you improve faster.
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
                <PlayCircle className="w-5 h-5 text-purple-600" />
                <span>See Demo</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            <StatCard value="50+" label="Metrics Tracked" />
            <StatCard value="<1s" label="Update Speed" />
            <StatCard value="99%" label="Accuracy" />
            <StatCard value="24/7" label="Available" />
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
                className="inline-flex items-center gap-2 badge badge-secondary mb-4"
              >
                <Activity className="w-4 h-4" />
                <span>How It Works</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800"
              >
                Understand Your <span className="text-gradient-cool">Game Better</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-600 text-lg mb-10"
              >
                Ever wonder why you win some matches easily and struggle in others? 
                Your analytics reveal patterns you can&apos;t see just by playing.
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/pa-how-it-works.svg"
                  alt="Player Analytics Dashboard"
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
          className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" 
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
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/pa-benefits.svg"
                  alt="Player Analytics Benefits"
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
                className="inline-flex items-center gap-2 badge badge-primary mb-4"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Key Benefits</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800"
              >
                Improve <span className="text-gradient">Faster</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-600 text-lg mb-8"
              >
                When you know exactly what to work on, you stop wasting time. 
                Focus your practice on what actually matters for your game.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "See real numbers on your improvement, not just feelings",
                  "Get practice recommendations based on your actual weaknesses",
                  "Share progress with your coach between sessions",
                  "Connect your data to other fitness apps you use",
                  "Discover patterns in your game you never noticed before",
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features Grid */}
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
              All the Insights <span className="text-gradient-cool">You Need</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Whether you&apos;re tracking your own progress or coaching others, 
              these tools help you understand the game at a deeper level.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Sample Metrics Section */}
      <section className="py-24 relative overflow-hidden section-accent">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800"
            >
              What You&apos;ll <span className="text-gradient">Learn</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card-elevated rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { category: "How You Move", metrics: ["Distance covered per match", "Your top speed", "How quickly you recover", "Time spent moving"], color: "purple" },
                { category: "Your Shots", metrics: ["Shot speed trends", "Where you place the ball", "Which shots win points", "Unforced error patterns"], color: "emerald" },
                { category: "Court Position", metrics: ["Areas you cover well", "Where you leave gaps", "Net vs baseline time", "Your strongest zones"], color: "cyan" },
                { category: "Match Performance", metrics: ["Points won per serve", "Average rally length", "Clutch performance", "Scoring patterns"], color: "orange" },
              ].map((section, index) => (
                <div key={index}>
                  <h4 className={`text-${section.color}-600 font-semibold mb-4 text-sm uppercase tracking-wider`}>
                    {section.category}
                  </h4>
                  <ul className="space-y-2">
                    {section.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${section.color}-500`} />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
                Ready to Level Up Your Game?
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                Be among the first to get personalized insights that show you 
                exactly how to improve. Sign up for early access.
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

export default PlayerAnalytics;
