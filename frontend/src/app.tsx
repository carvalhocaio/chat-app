import { useEffect, useRef, useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

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
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Digite sua mensagem..."
            value={message}
          />
          <Button onClick={sendMessage}>Enviar</Button>
        </div>
      </div>

      <div className="h-64 overflow-y-auto rounded-xl border bg-zinc-900 p-4">
        {messages.map((msg, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: only dev
          <div className="py-1 text-gray-400 text-sm" key={i}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  )
}
