import Hero from '../components/Hero'
import Section from '../components/Section'
import { ServiceCard, TestimonialCard } from '../components/Card'
import CTA from '../components/CTA'
import { services, solutions, products, testimonials } from '../data/site'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, TrendingUp, Shield, Zap } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Home(){
  const stats = [
    { label: "Projects Delivered", value: "5+", icon: TrendingUp },
    { label: "Happy Clients", value: "8+", icon: Users },
    { label: "Uptime Guarantee", value: "99.9%", icon: Shield },
    { label: "Team Members", value: "6+", icon: Zap }
  ]

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Stats Section */}
      <Section className="py-12 md:py-16 bg-gradient-to-r from-brand/5 to-brand-light/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-brand" />
              </div>
              <div className="text-3xl font-bold text-brand mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section 
        title="What We Do" 
        subtitle="Full‑stack product teams to take you from idea to impact. We specialize in building scalable, modern applications that drive business growth."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.desc}
              features={service.bullets}
              href="/services"
              icon={index === 0 ? TrendingUp : index === 1 ? Zap : Shield}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="btn-secondary inline-flex items-center gap-2"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>

      {/* Solutions Section */}
      <Section 
        title="Industry Solutions" 
        subtitle="Opinionated accelerators for common domains. We've built specialized solutions for various industries."
        className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                  <Star className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-brand transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Products Section */}
      <Section 
        title="Our Products" 
        subtitle="Reusable building blocks we've open-sourced and refined. These products help accelerate development and reduce time-to-market."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-brand transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {product.desc}
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section 
        title="What Our Clients Say" 
        subtitle="Don't just take our word for it. Here's what our Pakistani clients have to say about working with Clocktela."
        className="bg-gradient-to-r from-brand/5 to-brand-light/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
              location={testimonial.location}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how Clocktela can help transform your business with cutting-edge software solutions."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Case Studies", href: "/case-studies" }}
      />
    </div>
  )
}
