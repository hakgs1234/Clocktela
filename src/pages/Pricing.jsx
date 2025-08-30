import Section from '../components/Section'
import CTA from '../components/CTA'
import { plans } from '../data/site'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Shield, Users, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Pricing(){
  const features = [
    "Custom software development",
    "AI & automation solutions",
    "Cloud infrastructure setup",
    "24/7 monitoring & support",
    "Security audits & compliance",
    "Performance optimization",
    "Regular updates & maintenance",
    "Dedicated project manager"
  ]

  const faqs = [
    {
      question: "What's included in each plan?",
      answer: "Each plan includes full-stack development, testing, deployment, and ongoing support. Enterprise plans include additional features like dedicated teams and priority support."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. We'll work with you to ensure a smooth transition."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Absolutely! For enterprise clients or complex projects, we offer custom pricing tailored to your specific needs and requirements."
    },
    {
      question: "What's your development timeline?",
      answer: "Timelines vary by project complexity. Simple projects can be completed in 4-6 weeks, while complex applications may take 3-6 months."
    }
  ]

  return (
    <div>
      <Section 
        title="Pricing Plans" 
        subtitle="Transparent plans. Engagements tailored to outcomes. Choose the plan that best fits your business needs."
        className="pt-24 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`card-hover group relative ${
                plan.name === 'Growth' ? 'ring-2 ring-brand shadow-glow-lg' : ''
              }`}
            >
              {plan.name === 'Growth' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-brand">${plan.price}</span>
                    <span className="text-zinc-600 dark:text-zinc-400">/month</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Perfect for {plan.name.toLowerCase()} businesses
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.name === 'Growth' 
                      ? 'bg-brand text-white hover:bg-brand-dark shadow-glow' 
                      : 'border-2 border-brand text-brand hover:bg-brand hover:text-white'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Comparison */}
      <Section 
        title="What's Included" 
        subtitle="All plans include our core features and services."
        className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand/10 flex items-center justify-center">
                {index < 2 && <Zap className="w-8 h-8 text-brand" />}
                {index >= 2 && index < 4 && <Shield className="w-8 h-8 text-brand" />}
                {index >= 4 && index < 6 && <Users className="w-8 h-8 text-brand" />}
                {index >= 6 && <Clock className="w-8 h-8 text-brand" />}
              </div>
              <h3 className="font-semibold mb-2">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about our pricing and services."
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Custom Pricing CTA */}
      <Section className="py-16 bg-gradient-to-r from-brand/5 to-brand-light/5">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Custom Pricing?</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              For enterprise clients or complex projects, we offer custom pricing tailored to your 
              specific needs. Let's discuss your requirements and create a plan that works for you.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Custom Quote
            </Link>
          </motion.div>
        </div>
      </Section>

      <CTA 
        title="Ready to Get Started?"
        subtitle="Choose a plan and let's start building something amazing together."
        primaryAction={{ label: "Start Your Project", href: "/contact" }}
        secondaryAction={{ label: "Schedule a Call", href: "/contact" }}
      />
    </div>
  )
}
