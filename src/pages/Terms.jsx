import Section from '../components/Section'
import { motion } from 'framer-motion'
import { FileText, Shield, AlertTriangle, Users } from 'lucide-react'

export default function Terms(){
  const lastUpdated = "December 15, 2024"

  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using Clocktela's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated terms."
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into this agreement."
        }
      ]
    },
    {
      icon: FileText,
      title: "Services and Use",
      content: [
        {
          subtitle: "Service Description",
          text: "Clocktela provides software development, AI solutions, cloud services, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time."
        },
        {
          subtitle: "Acceptable Use",
          text: "You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services to transmit harmful code, violate intellectual property rights, or engage in any illegal activities."
        },
        {
          subtitle: "User Responsibilities",
          text: "You are responsible for maintaining the confidentiality of your account information, providing accurate information, and ensuring that your use of our services complies with applicable laws and regulations."
        }
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Our Rights",
          text: "All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are owned by Clocktela and are protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "Your Rights",
          text: "You retain ownership of any content you submit to us. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display such content in connection with our services."
        },
        {
          subtitle: "Third-Party Content",
          text: "Our services may contain links to third-party websites or content. We are not responsible for the content or privacy practices of these third-party sites and encourage you to review their terms and policies."
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        {
          subtitle: "Service Availability",
          text: "We strive to provide reliable services but cannot guarantee uninterrupted access. We are not liable for any damages resulting from service interruptions, technical issues, or maintenance activities."
        },
        {
          subtitle: "Limitation of Liability",
          text: "To the maximum extent permitted by law, Clocktela shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use."
        },
        {
          subtitle: "Disclaimer of Warranties",
          text: "Our services are provided 'as is' and 'as available' without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to merchantability and fitness for a particular purpose."
        }
      ]
    }
  ]

  return (
    <div>
      <Section 
        title="Terms of Service" 
        subtitle="The terms and conditions governing your use of Clocktela's services."
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
                <FileText className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Terms of Service</h1>
                <p className="text-zinc-600 dark:text-zinc-400">Last updated: {lastUpdated}</p>
              </div>
            </div>
            
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                These Terms of Service govern your use of Clocktela's website and services. By accessing or using our services, 
                you agree to be bound by these terms. Please read them carefully before using our services.
              </p>
            </div>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 card"
          >
            <h2 className="text-2xl font-semibold mb-6">Additional Terms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Payment Terms</h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• All fees are due upon receipt of invoice</li>
                  <li>• Late payments may result in service suspension</li>
                  <li>• Prices are subject to change with notice</li>
                  <li>• Refunds are handled on a case-by-case basis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Termination</h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Either party may terminate with written notice</li>
                  <li>• Outstanding fees must be paid upon termination</li>
                  <li>• Data will be handled according to our privacy policy</li>
                  <li>• Surviving provisions remain in effect</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 card"
          >
            <h2 className="text-2xl font-semibold mb-6">Governing Law and Disputes</h2>
            <div className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                These terms are governed by the laws of Pakistan. Any disputes arising from these terms or your use of our services 
                shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration association.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-brand/5 to-brand-light/5 rounded-2xl border border-brand/10"
          >
            <h3 className="font-semibold mb-3">Contact Information</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Email:</strong><br />
                legal@clocktela.dev
              </div>
              <div>
                <strong>Address:</strong><br />
                Clocktela HQ<br />
                Lahore, Pakistan
              </div>
              <div>
                <strong>Phone:</strong><br />
                +1 (234) 567-890
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
