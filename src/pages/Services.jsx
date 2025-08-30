import Section from '../components/Section'
import CTA from '../components/CTA'
import { services } from '../data/site'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Code, Brain, Cloud, Users, Clock, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services(){
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, technical requirements, and success metrics.",
      icon: Users
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Our team creates detailed technical specifications and user experience designs.",
      icon: Brain
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using modern technologies with continuous testing and quality assurance.",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "We deploy your application with proper monitoring, security, and performance optimization.",
      icon: Cloud
    }
  ]

  const benefits = [
    "Scalable architecture that grows with your business",
    "Modern tech stack with best practices",
    "24/7 monitoring and support",
    "Security-first approach",
    "Performance optimization",
    "Regular updates and maintenance"
  ]

  return (
    <div>
      {/* Hero Section */}
      <Section 
        title="Our Services" 
        subtitle="Battle‑tested process, measurable outcomes. We deliver high-quality software solutions that drive real business value."
        className="pt-24 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                  {index === 0 && <Code className="w-8 h-8 text-brand" />}
                  {index === 1 && <Brain className="w-8 h-8 text-brand" />}
                  {index === 2 && <Cloud className="w-8 h-8 text-brand" />}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section 
        title="Our Development Process" 
        subtitle="A proven methodology that ensures successful project delivery and long-term success."
        className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
                <step.icon className="w-10 h-10 text-brand" />
              </div>
              <div className="text-sm font-semibold text-brand mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section 
        title="Why Choose Clocktela?" 
        subtitle="We combine technical expertise with business acumen to deliver solutions that drive real results."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">What You Get</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-brand/5 to-brand-light/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Our Commitment</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fast Delivery</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Quick turnaround times without compromising quality</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Security First</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Enterprise-grade security and compliance</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Performance</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Optimized for speed and scalability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTA 
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can help bring your vision to life with our expert development services."
        primaryAction={{ label: "Get a Quote", href: "/contact" }}
        secondaryAction={{ label: "View Case Studies", href: "/case-studies" }}
      />
    </div>
  )
}
