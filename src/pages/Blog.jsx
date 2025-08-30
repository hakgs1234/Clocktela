import Section from '../components/Section'
import { Link } from 'react-router-dom'
import { posts } from '../data/site'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react'
import { useState } from 'react'

export default function Blog(){
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'development', name: 'Development' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' }
  ]

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <Section 
        title="Blog & Insights" 
        subtitle="Ideas, notes, and engineering write‑ups. Stay updated with the latest in technology and software development."
        className="pt-24 pb-16"
      >
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-brand text-white'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/blog/${post.slug}`} 
                className="card-hover group block h-full"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">
                      <Tag className="w-3 h-3" />
                      {post.category || 'Development'}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                      <Calendar className="w-4 h-4" />
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-brand transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </div>
                    <span className="inline-flex items-center gap-1 text-brand font-medium group-hover:gap-2 transition-all duration-300">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <Search className="w-8 h-8 text-zinc-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Try adjusting your search terms or browse all categories.
            </p>
          </div>
        )}
      </Section>
    </div>
  )
}
