import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../views/main/ui"
import Signin from "../views/signin/ui"
import Chat from "../views/Chat/ui"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router