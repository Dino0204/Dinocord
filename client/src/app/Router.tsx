import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CookiesProvider } from "react-cookie"
import Main from "../views/main/ui"
import Signin from "../views/signin/ui"
import Channel from "../views/channel/ui"

function Router() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default Router