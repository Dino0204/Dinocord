import { useEffect, useState } from "react";
import { createRoom, getCurrentRooms } from "../api/index.api";
import type { Room } from "../../../entities/Room";

const RoomList = ({ className }: { className?: string }) => {
  const [rooms, setRooms] = useState<Room[]>()
  const [open, setOpen] = useState<boolean>(false)
  const [roomName, setRoomName] = useState<string>("")

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { rooms } = await getCurrentRooms();
        console.log(rooms);
        setRooms(rooms);
      } catch (error) {
        console.error('사용자 데이터를 가져오는데 실패했습니다:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      if (!(roomName.trim().length > 0)) return;
      const res = await createRoom(roomName)
      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={className}>
      <section className="flex flex-col w-full h-full bg-[#222327] text-white">
        {rooms?.map((room) => (
          <div
            key={room._id.toString()}
            className="w-full h-max p-2 border-b border-b-gray-500"
          >
            {room.name}
          </div>
        ))}
        <div onClick={() => setOpen(!open)}>create room (+)</div>
        {open && <>
          <div className="fixed w-full h-full bg-black opacity-50" onClick={() => setOpen(false)}></div>
          <div className="fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#222327] rounded-2xl">
            <form className="flex flex-col p-5 gap-5" onSubmit={handleSubmit}>
              <h1 className="font-bold text-2xl text-center">서버 커스터마이즈하기</h1>
              <div className="flex flex-col">
                <label htmlFor="">서버 이름</label>
                <input
                  className="outline-none"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  placeholder="서버이름을 입력하세요..."
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer p-2 bg-blue-800 rounded-xl"
              >
                만들기
              </button>
            </form>
          </div>
        </>}
      </section>
    </div>
  )
}

export default RoomList

