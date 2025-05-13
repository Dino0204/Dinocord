import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/mypage.api";
import type { User } from "../../../entities/User";

const MyPage = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { user } = await getCurrentUser();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.error('사용자 데이터를 가져오는데 실패했습니다:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex gap-2  bg-[#222327] text-white py-2 px-3 rounded-xl">
      <section className="bg-gray-500 rounded-full w-10 h-10">
        {/* img */}
      </section>
      <section className="flex flex-col">
        <h2 className="font-bold text-base">{user?.name}</h2>
        <p className="text-sm">푸른 하늘</p>
        <p>{user?.email}</p>
      </section>
    </div>
  )

}

export default MyPage