import Section from '../components/Section'
import { jobs } from '../data/site'
import { useParams } from 'react-router-dom'

export default function Job(){
  const { id } = useParams()
  const job = jobs.find(j => j.id === id)
  if (!job) return <Section title="Role not found" />
  const onApply = (e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    const list = JSON.parse(localStorage.getItem('applications')||"[]")
    list.push({ ...data, id, date: new Date().toISOString() })
    localStorage.setItem('applications', JSON.stringify(list))
    e.target.reset()
    alert("Application submitted! (saved locally for demo)")
  }
  return (
    <Section title={job.title} subtitle={`${job.level} • ${job.location}`}>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2">About the role</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{job.desc}</p>
          <h3 className="font-semibold mt-6 mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-sm">{job.requirements.map(r => <li key={r}>{r}</li>)}</ul>
        </div>
        <form onSubmit={onApply} className="p-6 rounded-2xl glass space-y-3">
          <h3 className="font-semibold text-lg">Apply now</h3>
          <input name="name" required placeholder="Full name" className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"/>
          <input name="email" type="email" required placeholder="Email" className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"/>
          <input name="portfolio" placeholder="Portfolio / GitHub URL" className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"/>
          <textarea name="note" rows="4" placeholder="Short note" className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"></textarea>
          <button className="px-4 py-2 rounded-xl bg-brand text-white shadow-glow w-full">Submit application</button>
        </form>
      </div>
    </Section>
  )
}
