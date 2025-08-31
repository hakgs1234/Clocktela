import Section from '../components/Section'
import { motion } from 'framer-motion'
import { site } from '../data/site'

export default function GDPR(){
  return (
    <div>
      <Section 
        title="GDPR Compliance" 
        subtitle="How we handle your data in compliance with the General Data Protection Regulation."
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

          <h2>1. Introduction</h2>
          <p>
            The General Data Protection Regulation (GDPR) is a comprehensive data protection law that 
            applies to organizations operating within the EU and those that offer goods or services to 
            EU residents. This document outlines how Clocktela complies with GDPR requirements.
          </p>

          <h2>2. Legal Basis for Processing</h2>
          <p>We process personal data based on the following legal grounds:</p>
          <ul>
            <li><strong>Consent:</strong> When you explicitly agree to our processing of your data</li>
            <li><strong>Contract:</strong> When processing is necessary to fulfill our contractual obligations</li>
            <li><strong>Legitimate Interest:</strong> When processing is necessary for our legitimate business interests</li>
            <li><strong>Legal Obligation:</strong> When processing is required by law</li>
          </ul>

          <h2>3. Your Rights Under GDPR</h2>
          <p>As a data subject, you have the following rights:</p>
          <ul>
            <li><strong>Right to Access:</strong> Request information about what personal data we hold about you</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
            <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data</li>
            <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured format</li>
            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Rights Related to Automated Decision Making:</strong> Request human review of automated decisions</li>
          </ul>

          <h2>4. Data We Collect</h2>
          <p>We collect the following categories of personal data:</p>
          <ul>
            <li><strong>Identity Data:</strong> Name, email address, phone number</li>
            <li><strong>Professional Data:</strong> Company name, job title, industry</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
            <li><strong>Usage Data:</strong> How you interact with our website and services</li>
            <li><strong>Communication Data:</strong> Messages, feedback, and correspondence</li>
          </ul>

          <h2>5. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you about projects and services</li>
            <li>Marketing and promotional activities (with consent)</li>
            <li>Legal and regulatory compliance</li>
            <li>Security and fraud prevention</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for 
            which it was collected, including legal, accounting, or reporting requirements. Our 
            retention periods are:
          </p>
          <ul>
            <li><strong>Active Clients:</strong> Duration of service + 7 years</li>
            <li><strong>Prospects:</strong> 2 years from last contact</li>
            <li><strong>Website Visitors:</strong> 26 months for analytics data</li>
            <li><strong>Marketing Contacts:</strong> Until consent withdrawal</li>
          </ul>

          <h2>7. International Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries outside the European Economic 
            Area (EEA). We ensure appropriate safeguards are in place through:
          </p>
          <ul>
            <li>Adequacy decisions by the European Commission</li>
            <li>Standard contractual clauses</li>
            <li>Binding corporate rules</li>
            <li>Other approved transfer mechanisms</li>
          </ul>

          <h2>8. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            data, including:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication</li>
            <li>Employee training on data protection</li>
            <li>Incident response procedures</li>
                  </ul>

          <h2>9. Data Breach Procedures</h2>
          <p>
            In the event of a personal data breach, we will:
          </p>
          <ul>
            <li>Assess the risk to individuals' rights and freedoms</li>
            <li>Notify the relevant supervisory authority within 72 hours if required</li>
            <li>Notify affected individuals without undue delay if there is a high risk</li>
            <li>Document all breaches and remedial actions taken</li>
                </ul>

          <h2>10. Third-Party Processors</h2>
          <p>
            We use third-party service providers who act as data processors. We ensure they:
          </p>
          <ul>
            <li>Process data only on our instructions</li>
            <li>Implement appropriate security measures</li>
            <li>Assist us in fulfilling data subject rights</li>
            <li>Provide sufficient guarantees for data protection</li>
                </ul>

          <h2>11. Exercising Your Rights</h2>
          <p>
            To exercise your GDPR rights, please contact us using the information below. We will 
            respond to your request within one month, though this may be extended in complex cases.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            For any questions about our GDPR compliance or to exercise your rights, please contact us:
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl">
            <p><strong>Email:</strong> {site.footer.email}</p>
            <p><strong>Phone:</strong> {site.footer.phone}</p>
            <p><strong>Address:</strong> {site.footer.address}</p>
                </div>

          <h2>13. Supervisory Authority</h2>
          <p>
            You have the right to lodge a complaint with your local data protection supervisory 
            authority if you believe we have not addressed your concerns adequately.
          </p>
          </motion.div>
      </Section>
    </div>
  )
}
