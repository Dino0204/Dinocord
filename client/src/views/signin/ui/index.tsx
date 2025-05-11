import { useEffect, useState } from "react";
import { signin } from "../api/sigin.api";
import type { User } from "../../../entities/User";

const Signin = () => {
  const [name, setName] = useState<string>("")
  const [user, setUser] = useState<User | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { user } = await signin(name)
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      console.log("Successful Signin: ", user)
    } catch (err) {
      console.log("Failed Signin: ", err)
    }
  }

  const handleSignout = async () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
    const currentUserData = localStorage.getItem('user')
    if (currentUserData) setUser(JSON.parse(currentUserData))
  }, [])

  return (
    <main className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-md mx-auto p-5 bg-[#1A1A1E] rounded-md"
      >
        <h2 className="text-3xl font-bold">Dinocord 로그인</h2>
        <section className="flex justify-between mx-2 p-2 bg-[#222327]">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="닉네임 입력..."
            className="outline-none"
          />
          <button
            type="submit"
            className="cursor-pointer"
          >
            로그인
          </button>
        </section>
      </form>
      {user &&
        <>
          <h2 className="text-2xl font-bold">Welcome, {user?.name}</h2>
          <button
            className="cursor-pointer"
            onClick={handleSignout}
          >
            로그아웃
          </button>
        </>
      }
    </main>
  )
}

export default Signin;