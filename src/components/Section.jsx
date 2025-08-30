import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

export default function Section({ 
  children, 
  title, 
  subtitle, 
  className, 
  container = true,
  animation = true,
  ...props 
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const content = (
    <div className={cn("py-16 md:py-24", className)} {...props}>
      {(title || subtitle) && (
        <motion.div
          variants={animation ? itemVariants : {}}
          initial={animation ? "hidden" : false}
          animate={animation ? "visible" : false}
          className="text-center mb-16"
        >
          {title && (
            <h2 className="heading-responsive font-bold mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      
      <motion.div
        variants={animation ? containerVariants : {}}
        initial={animation ? "hidden" : false}
        animate={animation ? "visible" : false}
      >
        {children}
      </motion.div>
    </div>
  )

  return container ? (
    <div className="container mx-auto px-4">
      {content}
    </div>
  ) : content
}

// Specialized section variants
export function HeroSection({ children, className, ...props }) {
  return (
    <Section 
      className={cn("py-8 md:py-12", className)} 
      {...props}
    >
      {children}
    </Section>
  )
}

export function ContentSection({ children, className, ...props }) {
  return (
    <Section 
      className={cn("py-12 md:py-16", className)} 
      {...props}
    >
      {children}
    </Section>
  )
}

export function CtaSection({ children, className, ...props }) {
  return (
    <Section 
      className={cn("py-16 md:py-20 bg-gradient-to-r from-brand/5 to-brand-light/5", className)} 
      {...props}
    >
      {children}
    </Section>
  )
}
