import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye,
  Camera,
  Cpu,
  Zap,
  Target,
  Shield,
  ArrowRight,
  CheckCircle2,
  Play,
  ChevronRight,
  Factory,
  ShieldCheck,
  ShoppingCart,
  Car,
  Heart,
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
        <IconComponent className="w-5 h-5 text-blue-400" />
      </div>
    </div>
    <div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const IndustryCard = ({ icon: IconComponent, title, items, gradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card rounded-2xl p-6"
  >
    <div className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4`}>
      <IconComponent className="w-7 h-7 text-white" />
    </div>
    <h4 className="text-white font-bold text-lg mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2 text-gray-400 text-sm">
          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

function ComputerVision() {
  const howItWorks = [
    {
      icon: Camera,
      title: "Multi-View Capture",
      description: "60-120 FPS synchronized cameras with precise timestamps for complete court coverage.",
    },
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "On-device AI performs pose estimation & ball tracking in under 30ms latency.",
    },
    {
      icon: Target,
      title: "Homography Mapping",
      description: "Precise boundary detection with sub-pixel accuracy for in/out judgments.",
    },
    {
      icon: Shield,
      title: "Temporal Logic",
      description: "Confidence-scored foul identification using multi-frame analysis.",
    },
    {
      icon: Zap,
      title: "Structured Events",
      description: "Edge compute streams secure events while keeping video data local.",
    },
  ];

  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      items: ["Instant defect detection", "Automated quality checks", "Production line monitoring"],
      gradient: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      items: ["Live threat alerts", "Suspicious activity recognition", "Perimeter monitoring"],
      gradient: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      items: ["Customer movement heatmaps", "Queue length tracking", "Inventory monitoring"],
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
    {
      icon: Car,
      title: "Traffic",
      items: ["Real-time congestion alerts", "Pedestrian safety monitoring", "Incident detection"],
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Healthcare",
      items: ["Posture tracking for rehab", "Patient fall detection", "Movement analysis"],
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 badge badge-primary mb-6"
          >
            <Eye className="w-4 h-4" />
            <span>Computer Vision</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            <span className="text-white">AI That </span>
            <span className="text-gradient">Sees Everything</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Real-time AI vision system that tracks every ball, player, and boundary 
            with sub-second accuracy — enabling automated refereeing, match orchestration, 
            and next-generation sports analytics.
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
                <Cpu className="w-4 h-4" />
                <span>How It Works</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Precision Vision at the Edge
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-10"
              >
                Our multi-camera system captures every moment with military-grade precision, 
                processing everything locally for instant decisions without cloud dependency.
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
                  src="/3d-court-illustration.png"
                  alt="Computer Vision System"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Changer Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-blue-950/10" />
        
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
                  src="/game-changer.png"
                  alt="Game Changer AI"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-30 -z-10" />
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
                <Zap className="w-4 h-4" />
                <span>Game Changer</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Why This Changes Everything
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg mb-8"
              >
                By combining low-latency edge AI with high-fidelity tracking, we 
                eliminate human bias, speed up officiating, and unlock entirely 
                new layers of insight for coaches, broadcasters, and fans.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Sub-second decision-making for professional-level accuracy",
                  "Scalable from pro leagues to grassroots sports",
                  "Modular integration with any scoreboard or broadcast system",
                  "Privacy-first design with local processing",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Sports Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 badge badge-primary mb-4"
            >
              <Target className="w-4 h-4" />
              <span>Future Expansion</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Beyond Sports
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Our AI vision technology can revolutionize multiple industries, 
              opening B2B revenue streams far beyond sports.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
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
              Ready to See the Future?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join our early access program and experience the power of 
              AI-driven computer vision for your court.
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

export default ComputerVision;
