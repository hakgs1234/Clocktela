import Section from '../components/Section'
import { motion } from 'framer-motion'
import { Cookie, Settings, Shield, Eye } from 'lucide-react'

export default function Cookies(){
  const lastUpdated = "December 15, 2024"

  const cookieTypes = [
    {
      icon: Cookie,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.",
      examples: [
        "Authentication cookies",
        "Session management",
        "Security features",
        "Load balancing"
      ],
      duration: "Session or up to 1 year"
    },
    {
      icon: Eye,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: [
        "Page view tracking",
        "User behavior analysis",
        "Performance monitoring",
        "Traffic sources"
      ],
      duration: "Up to 2 years"
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
      examples: [
        "Language preferences",
        "Theme settings",
        "Form data retention",
        "Personalized content"
      ],
      duration: "Up to 1 year"
    },
    {
      icon: Shield,
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites to display relevant and engaging advertisements.",
      examples: [
        "Ad targeting",
        "Social media integration",
        "Email marketing",
        "Retargeting campaigns"
      ],
      duration: "Up to 2 years"
    }
  ]

  const cookieControls = [
    {
      title: "Browser Settings",
      description: "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies, though this may affect website functionality.",
      steps: [
        "Open your browser settings",
        "Navigate to privacy/security section",
        "Adjust cookie preferences",
        "Save your changes"
      ]
    },
    {
      title: "Third-Party Opt-Out",
      description: "For third-party cookies, you can opt out through the respective service providers' websites or use industry opt-out tools.",
      steps: [
        "Visit the service provider's website",
        "Look for privacy or opt-out options",
        "Follow their opt-out process",
        "Confirm your preferences"
      ]
    }
  ]

  return (
    <div>
      <Section 
        title="Cookie Policy" 
        subtitle="How we use cookies and similar technologies to enhance your experience."
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
                <Cookie className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Cookie Policy</h1>
                <p className="text-zinc-600 dark:text-zinc-400">Last updated: {lastUpdated}</p>
              </div>
            </div>
            
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                This Cookie Policy explains how Clocktela uses cookies and similar technologies when you visit our website. 
                By using our website, you consent to the use of cookies in accordance with this policy.
              </p>
            </div>
          </motion.div>

          {/* What are Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">What Are Cookies?</h2>
            <div className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember 
                information about your visit, such as your preferred language and other settings, which can make your next visit 
                easier and more useful.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We use cookies to improve your browsing experience, analyze website traffic, and understand where our visitors 
                are coming from. By continuing to use our website, you agree to our use of cookies.
              </p>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <div className="space-y-8 mb-12">
            <h2 className="text-2xl font-semibold">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm">
                    <strong>Duration:</strong> {type.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cookie Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Managing Your Cookie Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieControls.map((control, index) => (
                <div key={control.title}>
                  <h3 className="text-lg font-semibold mb-3">{control.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {control.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Steps:</h4>
                    <ol className="space-y-1">
                      {control.steps.map((step, idx) => (
                        <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">
                          {idx + 1}. {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cookie Consent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Cookie Consent</h2>
            <div className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                When you first visit our website, you'll see a cookie consent banner that allows you to accept or decline 
                non-essential cookies. You can change your preferences at any time by clicking the "Cookie Settings" link 
                in our footer.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Essential cookies cannot be disabled as they are necessary for the website to function properly. 
                You can control other types of cookies through your browser settings or our cookie consent tool.
              </p>
            </div>
          </motion.div>

          {/* Updates and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-r from-brand/5 to-brand-light/5 rounded-2xl border border-brand/10"
          >
            <h3 className="font-semibold mb-3">Updates and Contact</h3>
            <div className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. 
                We will notify you of any material changes by posting the updated policy on our website.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                If you have questions about our use of cookies, please contact us at{' '}
                <span className="text-brand font-medium">privacy@clocktela.dev</span>
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
