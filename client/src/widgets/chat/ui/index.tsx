import { useState } from "react";

const Chat = ({ className }: { className?: string }) => {
  const [message, setMessage] = useState<string>("");

  return (
    <div className={className}>
      <main className="w-full h-screen mx-auto grid grid-cols-1 grid-row-12 text-white">
        <section className="row-span-10 overflow-y-auto bg-[#1A1A1E]">
        </section>
        <section className="flex justify-between row-span-1 bg-[#222327] p-2">
          <input
            className="outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지를 입력하세요..."
          // onKeyDown={(e) => { if (e.key == "Enter") handleSubmit() }}
          />
          <button
            className="cursor-pointer"
            type="submit"
          // onClick={handleSubmit}
          >
            전송
          </button>
        </section>
      </main>
    </div>
  )
}

export default Chat