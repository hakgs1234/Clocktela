import Section from '../components/Section'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Users } from 'lucide-react'

export default function Privacy(){
  const lastUpdated = "December 15, 2024"

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you contact us, subscribe to our newsletter, or use our services. This may include your name, email address, phone number, company name, and project details."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect certain information about your use of our website, including your IP address, browser type, operating system, pages visited, time spent on pages, and referring website."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to enhance your experience, analyze website usage, and provide personalized content. You can control cookie settings through your browser preferences."
        }
      ]
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, respond to your inquiries, and deliver the software solutions you request."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you updates about our services, respond to your questions, and provide customer support."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to improve our website, services, and user experience. This helps us develop better products and provide more relevant content."
        }
      ]
    },
    {
      icon: Lock,
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or serving users. These providers are bound by confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety, or that of our users or the public."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections."
        }
      ]
    },
    {
      icon: Shield,
      title: "Data Security and Protection",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements."
        },
        {
          subtitle: "International Transfers",
          text: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers."
        }
      ]
    }
  ]

  return (
    <div>
      <Section 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your personal information."
        className="pt-24 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
                <p className="text-zinc-600 dark:text-zinc-400">Last updated: {lastUpdated}</p>
              </div>
            </div>
            
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                At Clocktela, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold mb-3 text-brand">{item.subtitle}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 card"
          >
            <h2 className="text-2xl font-semibold mb-6">Your Rights and Choices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Access and Control</h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Access your personal information</li>
                  <li>• Update or correct your data</li>
                  <li>• Request deletion of your information</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Contact Us</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-1 text-sm">
                  <p><strong>Email:</strong> privacy@clocktela.dev</p>
                  <p><strong>Address:</strong> Clocktela HQ, Lahore, Pakistan</p>
                  <p><strong>Phone:</strong> +1 (234) 567-890</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-brand/5 to-brand-light/5 rounded-2xl border border-brand/10"
          >
            <h3 className="font-semibold mb-3">Updates to This Policy</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
