import { useNavigate } from "react-router-dom"

const Main = () => {
  const router = useNavigate()

  return (
    <main className="w-full h-screen mx-auto grid grid-cols-1 grid-row-12 bg-gray-700">
      <header className="flex justify-between p-2 w-full h-max text-white bg-gray-900">
        <h1>Dinocord</h1>
        <button className="cursor-pointer" onClick={() => router("/signin")}>Signin</button>
      </header>
    </main>
  )
}

export default Main