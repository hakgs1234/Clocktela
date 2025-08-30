import Section from '../components/Section'
import { motion } from 'framer-motion'
import { Shield, UserCheck, Database, Lock, Mail, Clock } from 'lucide-react'

export default function GDPR(){
  const lastUpdated = "December 15, 2024"

  const rights = [
    {
      icon: UserCheck,
      title: "Right to Access",
      description: "You have the right to request access to your personal data and receive information about how we process it.",
      details: "We will provide you with a copy of your personal data within 30 days of your request."
    },
    {
      icon: Database,
      title: "Right to Rectification",
      description: "You have the right to request correction of inaccurate or incomplete personal data.",
      details: "We will update your information promptly and notify any third parties if necessary."
    },
    {
      icon: Lock,
      title: "Right to Erasure",
      description: "You have the right to request deletion of your personal data in certain circumstances.",
      details: "Also known as the 'right to be forgotten', this applies when data is no longer necessary or consent is withdrawn."
    },
    {
      icon: Clock,
      title: "Right to Restriction",
      description: "You have the right to request restriction of processing in certain situations.",
      details: "This allows you to limit how we use your data while maintaining it for legal purposes."
    },
    {
      icon: Mail,
      title: "Right to Portability",
      description: "You have the right to receive your personal data in a structured, machine-readable format.",
      details: "You can also request that we transfer your data directly to another controller."
    },
    {
      icon: Shield,
      title: "Right to Object",
      description: "You have the right to object to processing based on legitimate interests or direct marketing.",
      details: "We will stop processing unless we can demonstrate compelling legitimate grounds."
    }
  ]

  const complianceMeasures = [
    {
      title: "Data Protection by Design",
      description: "We implement privacy and data protection measures from the initial design stages of our systems and processes.",
      features: [
        "Privacy impact assessments",
        "Data minimization principles",
        "Secure development practices",
        "Regular security audits"
      ]
    },
    {
      title: "Data Processing Agreements",
      description: "We have formal agreements with all third-party processors to ensure GDPR compliance.",
      features: [
        "Standard contractual clauses",
        "Data processing addendums",
        "Security requirements",
        "Breach notification procedures"
      ]
    },
    {
      title: "Employee Training",
      description: "All employees receive regular training on data protection and GDPR compliance.",
      features: [
        "Annual privacy training",
        "Security awareness programs",
        "Incident response procedures",
        "Compliance monitoring"
      ]
    }
  ]

  return (
    <div>
      <Section 
        title="GDPR Compliance" 
        subtitle="Our commitment to protecting your data rights under the General Data Protection Regulation."
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
                <h1 className="text-3xl font-bold">GDPR Compliance</h1>
                <p className="text-zinc-600 dark:text-zinc-400">Last updated: {lastUpdated}</p>
              </div>
            </div>
            
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Clocktela is committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). 
                This page outlines your rights and our obligations under GDPR.
              </p>
            </div>
          </motion.div>

          {/* What is GDPR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">What is GDPR?</h2>
            <div className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. 
                It applies to all organizations operating within the EU and those that offer goods or services to individuals in the EU, 
                regardless of where the organization is based.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                GDPR gives individuals greater control over their personal data and requires organizations to be more transparent about 
                how they collect, use, and protect personal information.
              </p>
            </div>
          </motion.div>

          {/* Your Rights */}
          <div className="space-y-8 mb-12">
            <h2 className="text-2xl font-semibold">Your GDPR Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rights.map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                      <right.icon className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold">{right.title}</h3>
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                    {right.description}
                  </p>
                  
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                    {right.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compliance Measures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Our Compliance Measures</h2>
            <div className="space-y-8">
              {complianceMeasures.map((measure, index) => (
                <div key={measure.title}>
                  <h3 className="text-lg font-semibold mb-3">{measure.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {measure.description}
                  </p>
                  <ul className="space-y-2">
                    {measure.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Data Processing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Data Processing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Legal Basis for Processing</h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Consent (for marketing communications)</li>
                  <li>• Contract performance (for service delivery)</li>
                  <li>• Legitimate interests (for business operations)</li>
                  <li>• Legal obligations (for compliance)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Data Retention Periods</h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Customer data: 7 years after contract termination</li>
                  <li>• Marketing data: Until consent withdrawal</li>
                  <li>• Website analytics: 2 years</li>
                  <li>• Support communications: 3 years</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-r from-brand/5 to-brand-light/5 rounded-2xl border border-brand/10"
          >
            <h3 className="font-semibold mb-3">Exercising Your Rights</h3>
            <div className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                To exercise any of your GDPR rights, please contact our Data Protection Officer:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Email:</strong><br />
                  dpo@clocktela.dev
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
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                We will respond to your request within 30 days. If you're not satisfied with our response, 
                you have the right to lodge a complaint with your local data protection authority.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
