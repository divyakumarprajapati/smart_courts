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
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FeatureItem = ({ icon: IconComponent, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex gap-4"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center">
        <IconComponent className="w-5 h-5 text-cyan-400" />
      </div>
    </div>
    <div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const BenefitCard = ({ icon: IconComponent, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card rounded-2xl p-6 text-center"
  >
    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
      <IconComponent className="w-7 h-7 text-cyan-400" />
    </div>
    <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

const StatCard = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card rounded-xl p-4 text-center"
  >
    <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </motion.div>
);

function PlayerAnalytics() {
  const howItWorks = [
    {
      icon: LineChart,
      title: "Trajectory Clustering",
      description: "Advanced rally segmentation for precise shot labeling and pattern recognition.",
    },
    {
      icon: Activity,
      title: "Pose Analysis",
      description: "Quantified footwork metrics, reach analysis, and recovery time measurements.",
    },
    {
      icon: PieChart,
      title: "Heatmap Generation",
      description: "Visual representation of player strengths, weaknesses, and court coverage.",
    },
    {
      icon: TrendingUp,
      title: "Performance Benchmarking",
      description: "Compare against skill tiers and personal history to track improvement.",
    },
    {
      icon: Timer,
      title: "Real-Time Dashboards",
      description: "Interactive dashboards that update in near real-time during matches.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Data-Driven Feedback",
      description: "Objective insights replace guesswork for measurable improvement.",
    },
    {
      icon: TrendingUp,
      title: "Custom Training Plans",
      description: "AI-generated recommendations based on performance trends.",
    },
    {
      icon: Users,
      title: "Shareable Reports",
      description: "Export analytics for coaches, recruiters, and team reviews.",
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Connect with apps and broadcast systems via our REST APIs.",
    },
    {
      icon: Crosshair,
      title: "Shot Analysis",
      description: "Detailed breakdown of shot types, speeds, and placement accuracy.",
    },
    {
      icon: Activity,
      title: "Movement Tracking",
      description: "Distance covered, speed variations, and court positioning data.",
    },
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center hero-gradient overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge badge-primary mb-6"
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
            <span className="text-white">Data-Powered </span>
            <span className="text-gradient">Performance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Actionable insights from movement, shots, and tactics — empowering 
            players and coaches to improve with data-backed precision and 
            AI-driven recommendations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/#contact" className="btn-primary flex items-center gap-2">
              <span>Get Early Access</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/#demo" className="btn-secondary flex items-center gap-2">
              <Play className="w-5 h-5" />
              <span>See Demo</span>
            </Link>
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
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 badge badge-primary mb-4"
              >
                <Activity className="w-4 h-4" />
                <span>How It Works</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Deep Performance Insights
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-10"
              >
                Our AI analyzes every aspect of player performance — from footwork 
                to shot selection — providing actionable insights that drive real improvement.
              </motion.p>

              <div className="space-y-6">
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
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/player-analytics.png"
                  alt="Player Analytics Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-3xl opacity-30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-cyan-950/10" />
        
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
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/player-analytics-benefits.png"
                  alt="Player Analytics Benefits"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-3xl blur-3xl opacity-30 -z-10" />
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
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Transform Training & Performance
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-8"
              >
                Replace subjective coaching with objective data. Our analytics 
                help players identify strengths, address weaknesses, and track 
                progress over time.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Objective, data-driven feedback for measurable improvement",
                  "Customized training plans based on performance trends",
                  "Shareable reports for coaches, recruiters, and scouts",
                  "Integration-ready APIs for apps and broadcasts",
                  "Faster identification of strengths and weak spots",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Complete Analytics Suite
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Everything players and coaches need to understand performance 
              and drive continuous improvement.
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-transparent to-teal-950/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Metrics That Matter
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { category: "Movement", metrics: ["Distance Covered", "Top Speed", "Average Speed", "Recovery Time"] },
                { category: "Shot Analysis", metrics: ["Shot Speed", "Placement %", "Winner Ratio", "Error Rate"] },
                { category: "Positioning", metrics: ["Court Coverage", "Net Approaches", "Baseline Time", "Hot Zones"] },
                { category: "Game Stats", metrics: ["Points Won", "Rally Length", "Ace Count", "Break Points"] },
              ].map((section, index) => (
                <div key={index}>
                  <h4 className="text-cyan-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                    {section.category}
                  </h4>
                  <ul className="space-y-2">
                    {section.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
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
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Unlock Your Potential?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join our early access program and start training with 
              professional-grade analytics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#contact" className="btn-primary flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/" className="btn-secondary flex items-center gap-2">
                <span>Back to Home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PlayerAnalytics;
