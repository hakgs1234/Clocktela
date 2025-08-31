import Section from '../components/Section'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useState, useRef } from 'react'
import { site } from '../data/site'
import emailjs from '@emailjs/browser'
import { useEffect } from 'react'

export default function Contact(){
  const form = useRef()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("Uy6SK_36nOFWNWXAb")
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: site.footer.email,
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: site.footer.phone,
      description: "Mon-Fri from 9am to 6pm PKT"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: site.footer.address,
      description: "Schedule an in-person meeting"
    }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ]

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage("")
    
    try {
      // Send email with timeout
      const emailPromise = emailjs.sendForm(
        "service_wef4h3h", 
        "template_oiswnqt", 
        form.current, 
        "Uy6SK_36nOFWNWXAb"
      )

      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout after 10 seconds')), 10000)
      )

      await Promise.race([emailPromise, timeoutPromise])
      
      setStatusMessage("✅ Message sent successfully!")
      setSubmitted(true)
      setLoading(false)
      form.current.reset()
      setTimeout(() => setSubmitted(false), 5000)
      
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatusMessage(`❌ Failed to send message: ${error.message || 'Unknown error'}`)
      setLoading(false)
    }
  }

  return (
    <div>
      <Section 
        title="Get In Touch" 
        subtitle="Ready to start your project? Let's discuss how Clocktela can help bring your vision to life."
        className="pt-24 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200">Thanks! We'll get back to you within 24 hours.</span>
                </motion.div>
              )}

              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                    statusMessage.includes("✅") 
                      ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" 
                      : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  }`}
                >
                  <span className={statusMessage.includes("✅") ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}>
                    {statusMessage}
                  </span>
                </motion.div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input 
                      name="user_name" 
                      required 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Email *
                    </label>
                    <input 
                      name="user_email" 
                      type="email" 
                      required 
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Company
                  </label>
                  <input 
                    name="company" 
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Project Type
                  </label>
                  <select 
                    name="projectType"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="ai-automation">AI & Automation</option>
                    <option value="cloud-devops">Cloud & DevOps</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Project Details *
                  </label>
                  <textarea 
                    name="message" 
                    rows="5" 
                    required
                    placeholder="Tell us about your project, goals, and requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-brand/5 to-brand-light/5 border border-brand/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                    <p className="text-brand font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-brand" />
                <h3 className="text-xl font-semibold">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-zinc-200 dark:border-zinc-700 last:border-b-0">
                    <span className="text-zinc-700 dark:text-zinc-300">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="card p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-200">Quick Response</h3>
              <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
