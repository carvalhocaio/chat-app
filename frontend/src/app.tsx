import { useEffect, useRef, useState } from 'react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

export function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8000/ws/chat')

    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data])
    }

    return () => {
      ws.current?.close()
    }
  }, [])

  const sendMessage = () => {
    if (message.trim() && ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(message)
      setMessage('')
    }
  }

  return (
    <div className="mx-auto max-w-xl space-y-4 p-6">
      <h1 className="font-bold text-2xl">💬 Chat em tempo real</h1>

      <div className="space-y-2">
        <div className="flex gap-2">
          <Input
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button onClick={sendMessage}>Enviar</Button>
        </div>
      </div>

      <div className="h-64 overflow-y-auto rounded-xl border bg-gray-100 p-4">
        {messages.map((msg, i) => (
          <div key={i} className="py-1 text-gray-800 text-sm">
            {msg}
          </div>
        ))}
      </div>
    </div>
  )
}
