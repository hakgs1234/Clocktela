import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function EmailJSTest() {
  const form = useRef()
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init("Uy6SK_36nOFWNWXAb")
  }, [])

  const testEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('Sending test email...')

    try {
      const result = await emailjs.sendForm(
        "service_wef4h3h",
        "template_oiswnqt", 
        form.current,
        "Uy6SK_36nOFWNWXAb"
      )
      
      console.log('SUCCESS!', result)
      setStatus('✅ Test email sent successfully!')
      form.current.reset()
    } catch (error) {
      console.error('FAILED...', error)
      setStatus(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">EmailJS Test</h3>
      
      <form ref={form} onSubmit={testEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name:</label>
          <input 
            name="user_name" 
            type="text" 
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Test Name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input 
            name="user_email" 
            type="email" 
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="test@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Company:</label>
          <input 
            name="company" 
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Test Company"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Project Type:</label>
          <select name="projectType" className="w-full px-3 py-2 border rounded-md">
            <option value="web-app">Web Application</option>
            <option value="mobile-app">Mobile Application</option>
            <option value="ai-automation">AI & Automation</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Message:</label>
          <textarea 
            name="message" 
            required
            rows="3"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="This is a test message from EmailJS"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Test Email'}
        </button>
      </form>
      
      {status && (
        <div className={`mt-4 p-3 rounded-md ${
          status.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status}
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-600">
        <p><strong>Service ID:</strong> service_wef4h3h</p>
        <p><strong>Template ID:</strong> template_oiswnqt</p>
        <p><strong>Public Key:</strong> Uy6SK_36nOFWNWXAb</p>
      </div>
    </div>
  )
}
