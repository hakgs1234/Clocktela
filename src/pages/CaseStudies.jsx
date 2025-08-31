import Section from '../components/Section'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap, Shield, Globe, Clock, DollarSign, Star, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    id: 'ecommerce-platform',
    title: "E-Commerce Platform",
    subtitle: "Digital Transformation",
    industry: "Retail",
    duration: "8 weeks",
    team: "4 developers",
    description: "Built a modern e-commerce platform for a Pakistani retail business, enabling online sales and digital transformation.",
    challenge: "A traditional retail store in Karachi needed to establish an online presence to compete with modern e-commerce players and reach customers nationwide.",
    solution: "Developed a full-featured e-commerce platform with secure payment integration, inventory management, and mobile-responsive design optimized for Pakistani market.",
    results: [
      { metric: "500+", label: "Products Listed" },
      { metric: "200+", label: "Monthly Orders" },
      { metric: "8 weeks", label: "Time to Market" },
      { metric: "40%", label: "Revenue Increase" }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    features: [
      "Secure payment gateway",
      "Inventory management",
      "Order tracking system",
      "Mobile-responsive design",
      "Admin dashboard"
    ],
    testimonial: {
      quote: "Clocktela transformed our traditional business into a modern e-commerce platform. Their understanding of the Pakistani market and technical expertise exceeded our expectations.",
      author: "Ahmed Khan",
      role: "CEO",
      company: "PakMart Solutions",
      location: "Karachi, Pakistan"
    },
    image: "/api/placeholder/600/400"
  },
  {
    id: 'startup-mvp',
    title: "Startup MVP Platform",
    subtitle: "From Idea to Launch",
    industry: "Technology",
    duration: "6 weeks",
    team: "3 developers",
    description: "Developed a minimum viable product for a Lahore-based startup, helping them validate their business idea and secure funding.",
    challenge: "A startup in Lahore needed to quickly build and launch an MVP to validate their business concept and attract potential investors within a tight timeline.",
    solution: "Created a lean MVP with core features, user authentication, and analytics to help the startup test their hypothesis and gather user feedback.",
    results: [
      { metric: "1000+", label: "Beta Users" },
      { metric: "85%", label: "User Retention" },
      { metric: "6 weeks", label: "Development Time" },
      { metric: "$50K+", label: "Funding Secured" }
    ],
    technologies: ["React", "Firebase", "Tailwind CSS", "Vercel", "Analytics"],
    features: [
      "User authentication",
      "Core functionality",
      "Analytics dashboard",
      "Feedback system",
      "Admin panel"
    ],
    testimonial: {
      quote: "Clocktela helped us go from concept to launch in just 6 weeks. Their agile approach and technical expertise were crucial in securing our first round of funding.",
      author: "Fatima Ali",
      role: "Founder",
      company: "TechStart Pakistan",
      location: "Lahore, Pakistan"
    },
    image: "/api/placeholder/600/400"
  },
  {
    id: 'analytics-dashboard',
    title: "AI Analytics Dashboard",
    subtitle: "Data-Driven Decisions",
    industry: "Technology",
    duration: "10 weeks",
    team: "5 developers",
    description: "Built an AI-powered analytics dashboard for a Pakistani enterprise, providing real-time insights and predictive analytics.",
    challenge: "An Islamabad-based company needed to consolidate data from multiple sources and provide actionable insights to improve business decision-making.",
    solution: "Developed a comprehensive analytics platform with AI-powered insights, real-time data visualization, and predictive analytics capabilities.",
    results: [
      { metric: "Real-time", label: "Data Processing" },
      { metric: "50%", label: "Decision Speed" },
      { metric: "10+", label: "Data Sources" },
      { metric: "95%", label: "Accuracy Rate" }
    ],
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker"],
    features: [
      "Real-time analytics",
      "AI-powered insights",
      "Custom dashboards",
      "Data visualization",
      "Predictive modeling"
    ],
    testimonial: {
      quote: "The AI analytics dashboard has revolutionized how we make business decisions. Clocktela's innovative approach and commitment to quality make them the go-to choice for Pakistani enterprises.",
      author: "Usman Hassan",
      role: "CTO",
      company: "DataFlow Systems",
      location: "Islamabad, Pakistan"
    },
    image: "/api/placeholder/600/400"
  },
  {
    id: 'healthcare-management',
    title: "Healthcare Management System",
    subtitle: "Digital Healthcare",
    industry: "Healthcare",
    duration: "12 weeks",
    team: "6 developers",
    description: "Created a comprehensive healthcare management system for a medical facility in Pakistan, streamlining patient care and administrative processes.",
    challenge: "A medical facility needed to digitize their patient records, appointment scheduling, and administrative processes to improve efficiency and patient care.",
    solution: "Built a secure healthcare management system with patient portals, appointment scheduling, medical records, and administrative tools compliant with local regulations.",
    results: [
      { metric: "1000+", label: "Patients Managed" },
      { metric: "60%", label: "Efficiency Gain" },
      { metric: "24/7", label: "System Availability" },
      { metric: "99.9%", label: "Data Security" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    features: [
      "Patient management",
      "Appointment scheduling",
      "Medical records",
      "Billing system",
      "Admin dashboard"
    ],
    testimonial: {
      quote: "Clocktela's healthcare management system has transformed our facility. The system is intuitive, secure, and has significantly improved our patient care and operational efficiency.",
      author: "Dr. Aisha Malik",
      role: "Medical Director",
      company: "HealthCare Plus",
      location: "Lahore, Pakistan"
    },
    image: "/api/placeholder/600/400"
  }
]

const stats = [
  { icon: TrendingUp, value: "5+", label: "Projects Delivered" },
  { icon: Users, value: "8+", label: "Happy Clients" },
  { icon: Zap, value: "99.9%", label: "Uptime Guarantee" },
  { icon: Star, value: "4.9/5", label: "Client Rating" }
]

export default function CaseStudies(){
  return (
    <div>
      <Section 
        title="Case Studies" 
        subtitle="Real-world solutions that drive business transformation for Pakistani companies."
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
                            {study.testimonial.location && (
                              <div className="text-xs text-zinc-500 dark:text-zinc-500">
                                {study.testimonial.location}
                              </div>
                            )}
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
