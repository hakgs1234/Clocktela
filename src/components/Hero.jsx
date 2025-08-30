import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Hero(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(111,79,245,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(111,79,245,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-medium text-sm mb-8"
          >
            <Star className="w-4 h-4 fill-current" />
            Trusted by 500+ companies worldwide
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="heading-responsive font-extrabold tracking-tight leading-tight mb-6"
          >
            Ship smarter with{' '}
            <span className="gradient-text relative">
              Clocktela
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-light rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            We design, build, and scale delightful software, powered by AI and cloud-native best practices. 
            Transform your ideas into reality with our expert team.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              to="/contact" 
              className="btn-primary group flex items-center gap-2 text-base"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <button className="btn-secondary group flex items-center gap-2 text-base">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">500+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">99.9%</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand mb-2">24/7</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Support Available</div>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Trusted by industry leaders</p>
            <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {/* Placeholder logos - replace with actual client logos */}
              <div className="w-20 h-8 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
              <div className="w-20 h-8 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
              <div className="w-20 h-8 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
              <div className="w-20 h-8 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-10 hidden lg:block"
        >
          <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center">
            <Zap className="w-8 h-8 text-brand" />
          </div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-20 left-10 hidden lg:block"
        >
          <div className="w-16 h-16 bg-brand-light/10 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-brand-light" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-zinc-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
