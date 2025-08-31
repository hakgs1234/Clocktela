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
    { label: "Projects Completed", value: "5+", icon: TrendingUp },
    { label: "Happy Clients", value: "8+", icon: Heart },
    { label: "Team Members", value: "6+", icon: Users },
    { label: "Cities Served", value: "3+", icon: Globe }
  ]

  const team = [
          {
        name: "Hamaad Ayub Khan",
        role: "CEO & Founder",
        bio: "Passionate entrepreneur with expertise in software development and business strategy. Leading Clocktela's vision to transform Pakistani businesses through technology.",
        image: "/team/hamaad.jpg"
      },
    {
      name: "Fatima Ali",
      role: "CTO",
      bio: "Experienced full-stack developer specializing in modern web technologies and AI solutions. Committed to delivering scalable and innovative software solutions.",
      image: "/team/fatima.jpg"
    },
    {
      name: "Usman Hassan",
      role: "Head of Design",
      bio: "Creative designer focused on user experience and modern UI/UX principles. Bringing beautiful and functional designs to life for our clients.",
      image: "/team/usman.jpg"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Section 
        title="About Clocktela" 
        subtitle="We're a passionate team of designers, engineers, and problem‑solvers dedicated to transforming businesses through technology."
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
                Clocktela is a newly established software studio based in Islamabad, Pakistan, crafting AI‑powered, 
                cloud‑native products. We partner with startups and enterprises to deliver fast, reliable, and 
                beautiful experiences that drive business growth.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2024, we've quickly built a reputation for excellence, completing 5+ successful projects 
                and serving clients across Pakistan. Our small but experienced team brings together diverse expertise 
                in modern technologies, AI, and cloud solutions.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to help Pakistani businesses leverage cutting-edge technology to solve complex problems 
                and create meaningful impact in their industries, while maintaining the highest standards of quality 
                and innovation.
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
              At Clocktela, we're passionate about using technology to solve real-world problems for Pakistani businesses. 
              We believe that great software has the power to transform businesses, improve lives, and create lasting 
              impact in our local economy.
            </p>
            <p className="text-xl leading-relaxed">
              Our commitment is to deliver exceptional value to our clients through innovative solutions, 
              transparent communication, and unwavering dedication to quality. We're not just building 
              software—we're building partnerships for the future of Pakistan's digital economy.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
