import Section from '../components/Section'
import { posts } from '../data/site'
import { useParams, Link } from 'react-router-dom'

export default function BlogPost(){
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <Section title="Not found"><Link to="/blog" className="text-brand">Back to blog</Link></Section>
  return (
    <Section title={post.title}>
      <article className="prose prose-zinc dark:prose-invert">
        <p>{post.content}</p>
      </article>
    </Section>
  )
}
