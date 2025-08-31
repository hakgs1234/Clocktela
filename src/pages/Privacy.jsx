import Section from '../components/Section'
import { motion } from 'framer-motion'
import { site } from '../data/site'

export default function Privacy(){
  return (
    <div>
      <Section 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your personal information."
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

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, 
            contact us, or use our services. This may include:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Company and job title</li>
            <li>Project requirements and specifications</li>
            <li>Communication preferences</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate with you about your projects</li>
            <li>Send you updates and marketing materials (with your consent)</li>
            <li>Analyze usage patterns and trends</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy or as required by law.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze usage, 
            and provide personalized content. You can control cookie settings through your browser.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            Our services may integrate with third-party services. These services have their own 
            privacy policies, and we encourage you to review them.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect 
            personal information from children under 13.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any 
            material changes by posting the new policy on our website.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please contact us:
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
