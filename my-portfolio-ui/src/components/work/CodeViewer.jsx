// src/components/CodeViewer.jsx
import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import axios from 'axios'

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const CodeViewer = ({ projectId, filenames }) => {
  const [snippets, setSnippets] = useState([])
  const [error, setError] = useState('')
  
  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const responses = await Promise.all(
          filenames.map(filename =>
            axios.get(`${BACKEND_BASE_URL}/api/snippet/${projectId}/${filename}`)
          )
        )
        setSnippets(responses.map(res => res.data.code))
      } catch (err) {
        console.error('Failed to load snippets.', err)
        setError('Failed to load one or more snippets.')
      }
    }
    
    fetchSnippets()
  }, [projectId, filenames])

  if (error) return <div className="text-red-500">{ error }</div>;

  return (
    <div className="mt-6">
      <h3 className="text-green-400 text-xl font-semibold mb-4">Code Snippet</h3>

      {snippets.map((code, idx) => (
        <div key={ idx } className="mb-10">
          <SyntaxHighlighter language="javascript" style={atomDark}>
            { code }
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  )
}

export default CodeViewer