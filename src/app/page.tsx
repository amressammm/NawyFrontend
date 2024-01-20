import { getApartments } from "@/services/apartmentsServices";
import HomeScreen from "./home/home";

export default async function Home() {
  const apartments = await getApartments();
  return (
    <view>
      <view>
      <h1 className="text-lg font-bold my-3 mx-3">Welcome</h1>
      </view>
      <main
        className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-200"
       
      >
        <HomeScreen apartments={apartments.data} />
      </main>
    </view>
  );
}
