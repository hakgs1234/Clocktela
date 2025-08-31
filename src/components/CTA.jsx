import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
import { cn } from '../lib/utils'
import { site } from '../data/site'

export default function CTA({ 
  title = "Ready to get started?",
  subtitle = "Let's build something amazing together. Get in touch with our team to discuss your project.",
  primaryAction = { label: "Start Your Project", href: "/contact" },
  secondaryAction = { label: "Schedule a Call", href: "/contact" },
  variant = "default",
  className 
}) {
  const variants = {
    default: "bg-gradient-to-r from-brand to-brand-light",
    subtle: "bg-gradient-to-r from-brand/10 to-brand-light/10 border border-brand/20",
    dark: "bg-zinc-900 dark:bg-zinc-800"
  }

  const textVariants = {
    default: "text-white",
    subtle: "text-zinc-900 dark:text-white",
    dark: "text-white"
  }

  const buttonVariants = {
    default: "bg-white text-brand hover:bg-zinc-100",
    subtle: "bg-brand text-white hover:bg-brand-dark",
    dark: "bg-brand text-white hover:bg-brand-dark"
  }

  const secondaryButtonVariants = {
    default: "border-white text-white hover:bg-white hover:text-brand",
    subtle: "border-brand text-brand hover:bg-brand hover:text-white",
    dark: "border-zinc-600 text-zinc-300 hover:bg-zinc-700"
  }

  return (
    <section className={cn(
      "py-16 md:py-20",
      variants[variant],
      className
    )}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
            textVariants[variant]
          )}>
            {title}
          </h2>
          
          <p className={cn(
            "text-lg md:text-xl mb-8 leading-relaxed",
            variant === "default" ? "text-white/90" : "text-zinc-600 dark:text-zinc-300"
          )}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              to={primaryAction.href}
              className={cn(
                "btn-primary px-8 py-4 text-base font-semibold flex items-center gap-2 group",
                buttonVariants[variant]
              )}
            >
              {primaryAction.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            {secondaryAction && (
              <Link 
                to={secondaryAction.href}
                className={cn(
                  "px-8 py-4 rounded-2xl border-2 font-semibold text-base transition-all duration-300 flex items-center gap-2 group",
                  secondaryButtonVariants[variant]
                )}
              >
                {secondaryAction.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className={cn(
              "flex items-center gap-3 p-4 rounded-xl",
              variant === "default" ? "bg-white/10" : "bg-white/50 dark:bg-zinc-800/50"
            )}>
              <Mail className={cn("w-5 h-5", textVariants[variant])} />
              <div className="text-left">
                <div className={cn("font-semibold", textVariants[variant])}>Email Us</div>
                <div className={cn("text-sm", variant === "default" ? "text-white/80" : "text-zinc-600 dark:text-zinc-400")}>
                  {site.footer.email}
                </div>
              </div>
            </div>

            <div className={cn(
              "flex items-center gap-3 p-4 rounded-xl",
              variant === "default" ? "bg-white/10" : "bg-white/50 dark:bg-zinc-800/50"
            )}>
              <Phone className={cn("w-5 h-5", textVariants[variant])} />
              <div className="text-left">
                <div className={cn("font-semibold", textVariants[variant])}>Call Us</div>
                <div className={cn("text-sm", variant === "default" ? "text-white/80" : "text-zinc-600 dark:text-zinc-400")}>
                  {site.footer.phone}
                </div>
              </div>
            </div>

            <div className={cn(
              "flex items-center gap-3 p-4 rounded-xl",
              variant === "default" ? "bg-white/10" : "bg-white/50 dark:bg-zinc-800/50"
            )}>
              <MessageCircle className={cn("w-5 h-5", textVariants[variant])} />
              <div className="text-left">
                <div className={cn("font-semibold", textVariants[variant])}>Live Chat</div>
                <div className={cn("text-sm", variant === "default" ? "text-white/80" : "text-zinc-600 dark:text-zinc-400")}>
                  Available 24/7
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Specialized CTA variants
export function HeroCTA({ ...props }) {
  return (
    <CTA 
      variant="default"
      title="Transform Your Business Today"
      subtitle="Join hundreds of companies that trust Clocktela to build their digital future."
      {...props}
    />
  )
}

export function ContactCTA({ ...props }) {
  return (
    <CTA 
      variant="subtle"
      title="Let's Discuss Your Project"
      subtitle="Schedule a free consultation with our experts to explore how we can help bring your vision to life."
      primaryAction={{ label: "Schedule Consultation", href: "/contact" }}
      secondaryAction={{ label: "View Portfolio", href: "/case-studies" }}
      {...props}
    />
  )
}

export function NewsletterCTA({ ...props }) {
  return (
    <CTA 
      variant="dark"
      title="Stay Updated with Clocktela"
      subtitle="Get the latest insights on software development, AI trends, and industry best practices delivered to your inbox."
      primaryAction={{ label: "Subscribe Now", href: "/newsletter" }}
      {...props}
    />
  )
}
