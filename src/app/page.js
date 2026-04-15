import Banner from "@/components/homepage/Banner";
import FriendsTrack from "@/components/homepage/FriendsTrack";
import YourFriends from "@/components/homepage/YourFriends";
import Image from "next/image";
import { DiVim } from "react-icons/di";
export const metadata = {
  title: "KinKeeper | Home",
  
};

export default function Home() {
  return (
    <div>

      <Banner></Banner>
      {/* <FriendsTrack apps={apps}></FriendsTrack> */}
      <YourFriends></YourFriends>
    </div>
    
  );
}
