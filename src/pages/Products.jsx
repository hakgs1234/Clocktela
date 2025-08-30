import Section from '../components/Section'
import CTA from '../components/CTA'
import { products } from '../data/site'
import { motion } from 'framer-motion'
import { Workflow, Eye, FileText, ArrowRight, Zap, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Products(){
  const productDetails = [
    {
      ...products[0],
      icon: Workflow,
      features: [
        "AI-powered workflow automation",
        "Custom approval processes",
        "Real-time notifications",
        "Integration with 100+ tools",
        "Advanced analytics dashboard",
        "Role-based permissions"
      ],
      benefits: [
        "Reduce manual tasks by 80%",
        "Improve process efficiency",
        "Ensure compliance & audit trails",
        "Scale with your organization"
      ]
    },
    {
      ...products[1],
      icon: Eye,
      features: [
        "Computer vision algorithms",
        "Real-time object detection",
        "Quality control automation",
        "Custom model training",
        "API & SDK access",
        "Cloud & edge deployment"
      ],
      benefits: [
        "Improve accuracy by 95%",
        "Reduce inspection time by 70%",
        "Lower operational costs",
        "Enable 24/7 monitoring"
      ]
    },
    {
      ...products[2],
      icon: FileText,
      features: [
        "RAG-powered search engine",
        "Document processing & indexing",
        "Natural language queries",
        "Knowledge graph generation",
        "Multi-format support",
        "Enterprise security"
      ],
      benefits: [
        "Find information 10x faster",
        "Improve decision making",
        "Reduce training time",
        "Centralize knowledge base"
      ]
    }
  ]

  return (
    <div>
      <Section 
        title="Our Products" 
        subtitle="Reusable building blocks we've open-sourced and refined. These products help accelerate development and reduce time-to-market."
        className="pt-24 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productDetails.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                  <product.icon className="w-8 h-8 text-brand" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {product.desc}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
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
                    {product.benefits.map((benefit, idx) => (
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

      {/* Product Benefits */}
      <Section 
        title="Why Choose Our Products?" 
        subtitle="Built with enterprise-grade quality and designed for scale."
        className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Zap className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Fast Implementation</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Get up and running quickly with our pre-built solutions and comprehensive documentation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Built with security-first principles and compliance standards for enterprise use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-brand" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Get support from our team of experts who built and maintain these products.
            </p>
          </motion.div>
        </div>
      </Section>

      <CTA 
        title="Ready to Get Started?"
        subtitle="Choose the product that fits your needs and let's start building something amazing together."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Documentation", href: "/docs" }}
      />
    </div>
  )
}
