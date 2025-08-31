import Section from '../components/Section'
import { motion } from 'framer-motion'
import { site } from '../data/site'

export default function Terms(){
  return (
    <div>
      <Section 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our services."
        className="pt-24 pb-16"
      >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto prose prose-zinc dark:prose-invert"
        >
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Clocktela's services, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, please do not 
            use this service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Clocktela provides software development, AI solutions, and cloud services. We offer custom 
            software development, consulting, and technical support to businesses and organizations.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>As a user of our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not interfere with or disrupt our services</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Payment terms will be specified in individual project agreements. Generally, we require:
          </p>
          <ul>
            <li>Initial deposit for project commencement</li>
            <li>Milestone payments for ongoing projects</li>
            <li>Final payment upon project completion</li>
            <li>Payment within 30 days of invoice date</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            Unless otherwise specified in a project agreement:
          </p>
          <ul>
            <li>Client retains ownership of their existing intellectual property</li>
            <li>Clocktela retains ownership of our proprietary tools and frameworks</li>
            <li>Custom code developed for clients becomes their property upon final payment</li>
            <li>We may use anonymized project examples in our portfolio</li>
                </ul>

          <h2>6. Confidentiality</h2>
          <p>
            We are committed to maintaining the confidentiality of your business information and 
            project details. We will not disclose confidential information to third parties without 
            your explicit consent, except as required by law.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Clocktela's liability is limited to the amount paid for our services. We are not liable 
            for indirect, incidental, or consequential damages arising from the use of our services.
          </p>

          <h2>8. Warranty and Support</h2>
          <p>
            We provide a warranty period for our deliverables as specified in project agreements. 
            Support and maintenance services are available under separate agreements.
          </p>

          <h2>9. Termination</h2>
          <p>
            Either party may terminate a project agreement with written notice. Upon termination:
          </p>
          <ul>
            <li>Client pays for work completed up to termination date</li>
            <li>We deliver all completed work and documentation</li>
            <li>Confidentiality obligations remain in effect</li>
                </ul>

          <h2>10. Force Majeure</h2>
          <p>
            Neither party is liable for delays or failures due to circumstances beyond their control, 
            including natural disasters, government actions, or technical failures.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These terms are governed by the laws of Pakistan. Any disputes will be resolved through 
            negotiation, mediation, or arbitration as specified in project agreements.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. We will notify users of material changes 
            and continued use of our services constitutes acceptance of updated terms.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            If you have questions about these terms, please contact us:
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl">
            <p><strong>Email:</strong> {site.footer.email}</p>
            <p><strong>Phone:</strong> {site.footer.phone}</p>
            <p><strong>Address:</strong> {site.footer.address}</p>
            </div>
          </motion.div>
      </Section>
    </div>
  )
}
