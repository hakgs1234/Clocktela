import Section from '../components/Section'
import CTA from '../components/CTA'
import { jobs } from '../data/site'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Heart, Zap, Shield, Globe, Coffee } from 'lucide-react'

export default function Careers(){
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours"
    },
    {
      icon: Shield,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and books"
    },
    {
      icon: Globe,
      title: "Global Team",
      description: "Work with talented people from around the world"
    },
    {
      icon: Coffee,
      title: "Great Culture",
      description: "Inclusive, collaborative, and supportive environment"
    },
    {
      icon: Users,
      title: "Career Growth",
      description: "Clear career paths and mentorship programs"
    }
  ]

  const culture = [
    "We believe in the power of small, focused teams",
    "Continuous learning and professional development",
    "Work-life balance and mental health support",
    "Diversity, equity, and inclusion initiatives",
    "Open communication and transparent leadership",
    "Innovation and experimentation encouraged"
  ]

  return (
    <div>
      <Section 
        title="Join Our Team" 
        subtitle="Join a product‑obsessed team shipping meaningful software. Build the future with us."
        className="pt-24 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">
                    {job.level}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm">
                    {job.location}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-brand transition-colors duration-300">
                  {job.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {job.desc}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={`/careers/${job.id}`} 
                  className="btn-primary w-full text-center"
                >
                  View Role
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section 
        title="Why Work at Clocktela?" 
        subtitle="We offer competitive benefits and a supportive environment where you can thrive."
        className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Culture Section */}
      <Section 
        title="Our Culture" 
        subtitle="We're building more than just software—we're building a community of passionate professionals."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">What We Believe In</h3>
            <div className="space-y-4">
              {culture.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-brand/20 flex items-center justify-center">
                  <Users className="w-12 h-12 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Be part of something amazing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <CTA 
        title="Ready to Join Us?"
        subtitle="If you don't see a role that fits, we'd still love to hear from you. Send us your resume and let's start a conversation."
        primaryAction={{ label: "Send Resume", href: "/contact" }}
        secondaryAction={{ label: "Learn More", href: "/about" }}
      />
    </div>
  )
}
