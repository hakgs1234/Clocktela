import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

export default function Card({ 
  children, 
  className, 
  href, 
  onClick, 
  hover = true, 
  animation = true,
  ...props 
}) {
  const Component = href ? Link : 'div'
  
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: hover ? {
      y: -8,
      transition: { duration: 0.2, ease: "easeOut" }
    } : {}
  }

  return (
    <motion.div
      variants={animation ? cardVariants : {}}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={cn(
        "card",
        hover && "card-hover",
        className
      )}
      onClick={onClick}
      {...props}
    >
      <Component to={href} className="block">
        {children}
      </Component>
    </motion.div>
  )
}

// Specialized card variants
export function ServiceCard({ title, description, icon: Icon, features = [], href }) {
  return (
    <Card href={href} className="group">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-brand" />
          </div>
          <h3 className="text-xl font-semibold group-hover:text-brand transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
          {description}
        </p>
        
        {features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex items-center gap-2 text-brand font-medium text-sm group-hover:gap-3 transition-all duration-300">
          Learn more
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Card>
  )
}

export function TestimonialCard({ quote, author, role, company, avatar }) {
  return (
    <Card className="relative">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="w-8 h-8 text-brand/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
            "{quote}"
          </p>
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
          {avatar && (
            <img 
              src={avatar} 
              alt={author}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <div>
            <div className="font-semibold text-zinc-900 dark:text-zinc-100">
              {author}
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {role} at {company}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export function PricingCard({ name, price, description, features = [], popular = false, cta = "Get Started", href }) {
  return (
    <Card 
      href={href} 
      className={cn(
        "relative",
        popular && "ring-2 ring-brand shadow-glow-lg"
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-brand text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-brand">${price}</span>
          <span className="text-zinc-600 dark:text-zinc-400">/month</span>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className="w-full btn-primary">
          {cta}
        </button>
      </div>
    </Card>
  )
}
