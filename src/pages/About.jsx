import Section from '../components/Section'
import { motion } from 'framer-motion'
import { Users, Target, Zap, Shield, Heart, Award, TrendingUp, Globe } from 'lucide-react'

export default function About(){
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best results come from working together with our clients and team."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "We build lasting relationships based on transparency, reliability, and trust."
    }
  ]

  const stats = [
    { label: "Years Experience", value: "8+", icon: Award },
    { label: "Projects Completed", value: "500+", icon: TrendingUp },
    { label: "Happy Clients", value: "200+", icon: Heart },
    { label: "Countries Served", value: "25+", icon: Globe }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former tech lead at Google with 10+ years in software development.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Expert in cloud architecture and AI systems with a PhD in Computer Science.",
      image: "/team/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning designer with experience at top design agencies.",
      image: "/team/emily.jpg"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Section 
        title="About Clocktela" 
        subtitle="We're designers, engineers, and problem‑solvers obsessed with impact."
        className="pt-24 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Clocktela is a boutique software studio crafting AI‑powered, cloud‑native products. 
                We partner with startups and enterprises to deliver fast, reliable, and beautiful experiences.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2016, we've grown from a small team of passionate developers to a full-service 
                software studio serving clients worldwide. We believe in small, senior teams; strong product 
                thinking; and continuous delivery.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to help businesses leverage technology to solve complex problems and 
                create meaningful impact in their industries.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-brand/20 flex items-center justify-center">
                  <Users className="w-12 h-12 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Passionate experts dedicated to your success
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-16 bg-gradient-to-r from-brand/5 to-brand-light/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-brand" />
              </div>
              <div className="text-3xl font-bold text-brand mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section 
        title="Our Values" 
        subtitle="The principles that guide everything we do and every decision we make."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section 
        title="Meet Our Team" 
        subtitle="The talented individuals behind Clocktela's success."
        className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand/10 to-brand-light/10 flex items-center justify-center">
                <Users className="w-12 h-12 text-brand" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-brand font-medium mb-4">{member.role}</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission Section */}
      <Section 
        title="Our Mission" 
        subtitle="Driving innovation and creating value through technology."
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-zinc dark:prose-invert mx-auto"
          >
            <p className="text-xl leading-relaxed mb-8">
              At Clocktela, we're passionate about using technology to solve real-world problems. 
              We believe that great software has the power to transform businesses, improve lives, 
              and create lasting impact.
            </p>
            <p className="text-xl leading-relaxed">
              Our commitment is to deliver exceptional value to our clients through innovative solutions, 
              transparent communication, and unwavering dedication to quality. We're not just building 
              software—we're building partnerships for the future.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
