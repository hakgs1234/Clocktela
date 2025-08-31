export const site = {
  name: "Clocktela",
  tagline: "Building intelligent software that ships fast.",
  nav: [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/solutions", label: "Solutions" },
    { to: "/products", label: "Products" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/pricing", label: "Pricing" },
    { to: "/careers", label: "Careers" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" }
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/clocktela/" },
    { label: "X", href: "https://x.com/clocktela" }
  ],
  footer: {
    email: "clocktela@gmail.com",
    phone: "+92 3196018340",
    address: "Islamabad, Pakistan"
  }
}

export const services = [
  { title: "Custom Software", desc: "From MVPs to enterprise platforms using modern stacks.", bullets: ["React & Vite", "Node & Python", "Scalable architectures"] },
  { title: "AI & Automation", desc: "Inject intelligence into workflows with LLMs and RAG.", bullets: ["Gen AI experiences", "Data pipelines", "Chatbots & copilots"] },
  { title: "Cloud & DevOps", desc: "CI/CD, observability, and cloud-native infra that scales.", bullets: ["Docker & Kubernetes", "AWS/Azure/GCP", "24/7 reliability"] }
]

export const solutions = [
  { title: "FinTech", desc: "PCI-aware stacks, secure transactions, real-time analytics." },
  { title: "HealthTech", desc: "HIPAA-mindful apps, imaging, triage, and virtual care." },
  { title: "E‑Commerce", desc: "Headless storefronts, search, recommendations, payments." }
]

export const products = [
  { title: "ClockFlow", desc: "Workflow automation with AI triggers and approvals." },
  { title: "VisionKit", desc: "Computer vision toolkit for inspection and dashboards." },
  { title: "TextSense", desc: "RAG-based knowledge engine for internal docs." }
]

export const plans = [
  { name: "Starter", price: 999, features: ["MVP in 4–6 weeks", "Basic analytics", "Email support"] },
  { name: "Growth", price: 3999, features: ["Scale-ready architecture", "SLA & monitoring", "Priority support"] },
  { name: "Enterprise", price: 9999, features: ["Dedicated team", "Compliance & SSO", "24/7 support"] }
]

export const jobs = [
  { id: "fe-001", title: "Frontend Engineer", location: "Remote / Lahore", level: "Mid–Senior", desc: "Own stunning UI with React, Tailwind, and motion.", requirements: ["3+ yrs React", "Strong CSS/Tailwind", "Animations & DX focus"] },
  { id: "be-002", title: "Backend Engineer", location: "Remote / Lahore", level: "Mid–Senior", desc: "APIs, databases, and performance tuning.", requirements: ["Node/Python", "SQL/NoSQL", "Cloud & CI/CD"] },
  { id: "ml-003", title: "ML Engineer", location: "Remote", level: "Senior", desc: "Ship Gen AI and classic ML to production.", requirements: ["LLMs/RAG", "MLOps", "Experimentation"] }
]

export const posts = [
  { slug: "shipping-faster-with-vite", title: "Shipping Faster with Vite + React", excerpt: "Why Vite supercharges DX and performance.", content: "Vite offers instant HMR, native ESM, and a lean build pipeline..." },
  { slug: "design-systems-that-scale", title: "Design Systems that Scale", excerpt: "How to keep product velocity while staying consistent.", content: "A modern design system relies on tokens, composition, and strong docs..." },
  { slug: "rag-in-production", title: "RAG in Production: Lessons", excerpt: "From prototype to reliable retrieval.", content: "Chunking strategies, evals, guardrails, and observability..." }
]

export const testimonials = [
  {
    quote: "Clocktela delivered our e-commerce platform in record time. Their expertise in modern tech stacks and attention to detail exceeded our expectations. Highly recommended for any Pakistani business looking to go digital.",
    author: "Ahmed Khan",
    role: "CEO",
    company: "PakMart Solutions",
    avatar: "/avatars/ahmed.jpg",
    location: "Karachi, Pakistan"
  },
  {
    quote: "As a startup in Lahore, we needed a reliable tech partner. Clocktela not only built our MVP but also guided us through the entire development process. Their local understanding and global standards are unmatched.",
    author: "Fatima Ali",
    role: "Founder",
    company: "TechStart Pakistan",
    avatar: "/avatars/fatima.jpg",
    location: "Lahore, Pakistan"
  },
  {
    quote: "The AI-powered analytics dashboard Clocktela built for us has transformed how we make business decisions. Their innovative approach and commitment to quality make them the go-to choice for Pakistani enterprises.",
    author: "Usman Hassan",
    role: "CTO",
    company: "DataFlow Systems",
    avatar: "/avatars/usman.jpg",
    location: "Islamabad, Pakistan"
  }
]
