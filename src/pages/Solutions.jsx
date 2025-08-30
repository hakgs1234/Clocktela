import Section from '../components/Section'
import CTA from '../components/CTA'
import { solutions } from '../data/site'
import { motion } from 'framer-motion'
import { Building2, Heart, ShoppingCart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Solutions(){
  const solutionDetails = [
    {
      ...solutions[0],
      icon: Building2,
      features: [
        "PCI DSS compliance",
        "Real-time transaction processing",
        "Fraud detection & prevention",
        "Multi-currency support",
        "Advanced analytics & reporting",
        "Secure API integrations"
      ],
      benefits: [
        "Reduce transaction costs by 30%",
        "Improve security compliance",
        "Scale with your business growth",
        "24/7 monitoring & support"
      ]
    },
    {
      ...solutions[1],
      icon: Heart,
      features: [
        "HIPAA-compliant infrastructure",
        "Medical imaging & AI analysis",
        "Patient portal & telemedicine",
        "Electronic health records",
        "Clinical decision support",
        "Integration with medical devices"
      ],
      benefits: [
        "Improve patient outcomes",
        "Reduce administrative overhead",
        "Ensure regulatory compliance",
        "Enable remote healthcare delivery"
      ]
    },
    {
      ...solutions[2],
      icon: ShoppingCart,
      features: [
        "Headless commerce architecture",
        "Advanced search & filtering",
        "Personalized recommendations",
        "Multi-channel selling",
        "Inventory management",
        "Customer analytics"
      ],
      benefits: [
        "Increase conversion rates by 40%",
        "Reduce cart abandonment",
        "Improve customer experience",
        "Scale across multiple platforms"
      ]
    }
  ]

  return (
    <div>
      <Section 
        title="Industry Solutions" 
        subtitle="Opinionated accelerators for common domains. We've built specialized solutions for various industries."
        className="pt-24 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutionDetails.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                  <solution.icon className="w-8 h-8 text-brand" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {solution.desc}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/contact" 
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

      <CTA 
        title="Ready to Transform Your Industry?"
        subtitle="Let's discuss how our specialized solutions can help your business thrive in the digital age."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Case Studies", href: "/case-studies" }}
      />
    </div>
  )
}
