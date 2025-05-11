import { useEffect, useState } from "react";
import socket from "../../../shared/config/socket";
import type { User } from "../../../entities/User";
import type { Message } from "../../../entities/Message";

const Chat = () => {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[] | []>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const parsed = JSON.parse(user)
      setUser(parsed)
    }
  }, [])

  const handleSubmit = () => {
    if (!user) return;
    if (message.trim() && socket) {

      setMessage("")
    }
  }

  return (
    <main className="w-md h-screen mx-auto grid grid-cols-1 grid-row-12 text-white">
      <section className="row-span-10 overflow-y-auto bg-[#1A1A1E]">
        {/* {messages.map((msg, index) => (
          <p key={index}>
            {msg.userId.nickname}: {msg.content}
          </p>
        ))} */}
      </section>
      <section className="flex justify-between row-span-1 bg-[#222327] p-2">
        <input
          className="outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요..."
          onKeyDown={(e) => { if (e.key == "Enter") handleSubmit() }}
        />
        <button
          className="cursor-pointer"
          type="submit"
          onClick={handleSubmit}
        >
          전송
        </button>
      </section>
    </main>
  )

}

export default Chat