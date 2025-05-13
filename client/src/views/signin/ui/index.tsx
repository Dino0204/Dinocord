import { useState } from "react";
import { signin } from "../api/signin.api";
import { setCookie } from "../../../shared/api/cookie";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setpassword] = useState<string>("")

  const router = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { accessToken, refreshToken } = await signin({ name, email, password })
      setCookie('accessToken', accessToken, { path: "/" })
      setCookie('refreshToken', refreshToken, { path: "/" })
      router("/channel")

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-md mx-auto p-5 bg-[#222327] rounded-md"
      >
        <h2 className="text-3xl font-bold text-center">Dinocord 로그인</h2>
        <section className="flex flex-col gap-3 mx-2 p-2 ">
          <div className="flex flex-col">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름 입력..."
              className="outline-none bg-[#1A1A1E] rounded-sm px-1 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 입력..."
              className="outline-none bg-[#1A1A1E] rounded-sm px-1 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="비밀번호 입력..."
              className="outline-none bg-[#1A1A1E] rounded-sm px-1 py-2"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer p-2 bg-blue-800 rounded-xl"
          >
            로그인
          </button>
        </section>
      </form>
    </main>
  )
}

export default Signin;