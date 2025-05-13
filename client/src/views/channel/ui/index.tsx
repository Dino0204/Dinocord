import Chat from "../../../widgets/chat/ui"
import MyPage from "../../../widgets/myPage/ui"
import RoomList from "../../../widgets/roomList/ui"

const Channel = () => {
  return (
    <main className="grid grid-cols-12">
      <MyPage />
      <RoomList className="col-span-2" />
      <Chat className="col-span-10" />
    </main>
  )
}

export default Channel