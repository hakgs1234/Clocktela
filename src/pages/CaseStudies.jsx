import Section from '../components/Section'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap, Shield, Globe, Clock, DollarSign, Star, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    id: 'fintech-banking',
    title: "FinTech Banking Platform",
    subtitle: "0→1 in 12 weeks",
    industry: "Financial Services",
    duration: "12 weeks",
    team: "8 developers",
    description: "Built a secure mobile banking MVP with comprehensive financial services, real-time transactions, and advanced security features.",
    challenge: "A startup needed to launch a secure, compliant banking platform within 3 months to meet regulatory deadlines and investor requirements.",
    solution: "Developed a full-stack banking solution with biometric authentication, real-time payment processing, and comprehensive compliance features.",
    results: [
      { metric: "50K+", label: "Active Users" },
      { metric: "99.9%", label: "Uptime" },
      { metric: "12 weeks", label: "Time to Market" },
      { metric: "$2M+", label: "Revenue Generated" }
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    features: [
      "Biometric authentication",
      "Real-time payments",
      "Multi-currency support",
      "Advanced fraud detection",
      "Compliance dashboard"
    ],
    testimonial: {
      quote: "Clocktela delivered our banking platform ahead of schedule with exceptional quality. Their expertise in fintech and security was invaluable.",
      author: "Sarah Chen",
      role: "CTO",
      company: "NeoBank Solutions"
    },
    image: "/api/placeholder/600/400"
  },
  {
    id: 'healthcare-telemedicine',
    title: "Telehealth Platform",
    subtitle: "Healthcare Revolution",
    industry: "Healthcare",
    duration: "16 weeks",
    team: "12 developers",
    description: "Developed a comprehensive telehealth platform connecting patients with healthcare providers across multiple regions.",
    challenge: "A healthcare network needed to expand their services digitally while maintaining HIPAA compliance and ensuring seamless patient experience.",
    solution: "Created a full-featured telehealth platform with video consultations, e-prescriptions, patient management, and secure data handling.",
    results: [
      { metric: "100K+", label: "Patients Served" },
      { metric: "500+", label: "Healthcare Providers" },
      { metric: "95%", label: "Patient Satisfaction" },
      { metric: "40%", label: "Cost Reduction" }
    ],
    technologies: ["React", "WebRTC", "Python", "MongoDB", "Azure"],
    features: [
      "HD video consultations",
      "E-prescription system",
      "Patient portal",
      "Appointment scheduling",
      "Medical records management"
    ],
    testimonial: {
      quote: "The platform has transformed how we deliver care. Clocktela's understanding of healthcare regulations and user experience was outstanding.",
      author: "Dr. Michael Rodriguez",
      role: "Medical Director",
      company: "HealthConnect Network"
    },
    image: "/api/placeholder/600/400"
  },
  {
    id: 'retail-analytics',
    title: "Retail Analytics Platform",
    subtitle: "Smart Inventory Management",
    industry: "Retail",
    duration: "20 weeks",
    team: "10 developers",
    description: "Built an AI-powered retail analytics platform with computer vision for inventory management and customer insights.",
    challenge: "A retail chain was losing 20% of inventory to theft and inefficiencies, needing real-time analytics and automated inventory tracking.",
    solution: "Developed an edge computing solution with computer vision, IoT sensors, and predictive analytics for comprehensive retail intelligence.",
    results: [
      { metric: "20%", label: "Shrink Reduction" },
      { metric: "30%", label: "Efficiency Gain" },
      { metric: "Real-time", label: "Inventory Tracking" },
      { metric: "$5M+", label: "Annual Savings" }
    ],
    technologies: ["Python", "TensorFlow", "React", "Kubernetes", "GCP"],
    features: [
      "Computer vision analytics",
      "Real-time inventory tracking",
      "Predictive demand forecasting",
      "Customer behavior insights",
      "Automated reporting"
    ],
    testimonial: {
      quote: "Clocktela's retail analytics platform has revolutionized our operations. The AI insights have saved us millions in inventory costs.",
      author: "Jennifer Park",
      role: "Operations Director",
      company: "RetailCorp International"
    },
    image: "/api/placeholder/600/400"
  },
  {
    id: 'logistics-automation',
    title: "Logistics Automation System",
    subtitle: "Supply Chain Optimization",
    industry: "Logistics",
    duration: "24 weeks",
    team: "15 developers",
    description: "Created an intelligent logistics platform that optimizes routes, reduces delivery times, and improves fleet management.",
    challenge: "A logistics company needed to reduce delivery times by 30% while managing a fleet of 500+ vehicles across multiple regions.",
    solution: "Built an AI-powered logistics platform with real-time tracking, route optimization, and predictive maintenance capabilities.",
    results: [
      { metric: "30%", label: "Delivery Time Reduction" },
      { metric: "25%", label: "Fuel Cost Savings" },
      { metric: "500+", label: "Vehicles Managed" },
      { metric: "99.5%", label: "On-time Delivery" }
    ],
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
    features: [
      "AI route optimization",
      "Real-time fleet tracking",
      "Predictive maintenance",
      "Driver performance analytics",
      "Automated dispatching"
    ],
    testimonial: {
      quote: "Clocktela's logistics platform has transformed our operations. The AI optimization has significantly improved our efficiency and customer satisfaction.",
      author: "David Thompson",
      role: "CEO",
      company: "FastTrack Logistics"
    },
    image: "/api/placeholder/600/400"
  }
]

const stats = [
  { icon: TrendingUp, value: "150+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Zap, value: "99.9%", label: "Uptime Guarantee" },
  { icon: Star, value: "4.9/5", label: "Client Rating" }
]

export default function CaseStudies(){
  return (
    <div>
      <Section 
        title="Case Studies" 
        subtitle="Real-world solutions that drive business transformation."
        className="pt-24 pb-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand" />
                </div>
                <div className="text-3xl font-bold text-brand mb-2">{stat.value}</div>
                <div className="text-zinc-600 dark:text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-brand/10 text-brand text-sm font-medium rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-zinc-500 text-sm">{study.duration}</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-3">{study.title}</h2>
                      <p className="text-xl text-brand font-semibold mb-4">{study.subtitle}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3 text-brand">Challenge</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3 text-brand">Solution</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="font-semibold mb-4 text-brand">Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center p-4 bg-gradient-to-br from-brand/5 to-brand-light/5 rounded-xl">
                            <div className="text-2xl font-bold text-brand">{result.metric}</div>
                            <div className="text-sm text-zinc-600 dark:text-zinc-400">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-semibold mb-3 text-brand">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold mb-3 text-brand">Key Features</h3>
                      <ul className="space-y-2">
                        {study.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Testimonial & Image */}
                  <div className="space-y-6">
                    {/* Testimonial */}
                    <div className="card bg-gradient-to-br from-brand/5 to-brand-light/5 border-brand/10">
                      <div className="flex items-start gap-4">
                        <Quote className="w-8 h-8 text-brand flex-shrink-0 mt-1" />
                        <div>
                          <blockquote className="text-zinc-700 dark:text-zinc-300 italic mb-4">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div>
                            <div className="font-semibold">{study.testimonial.author}</div>
                            <div className="text-sm text-zinc-600 dark:text-zinc-400">
                              {study.testimonial.role}, {study.testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Placeholder Image */}
                    <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-16 h-16 text-brand/30 mx-auto mb-4" />
                        <p className="text-zinc-500 text-sm">Case Study Visualization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="card bg-gradient-to-r from-brand/5 to-brand-light/5 border-brand/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with custom software solutions. 
                Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/services" 
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  View Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
