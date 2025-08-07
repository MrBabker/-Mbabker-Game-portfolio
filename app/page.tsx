import Footer from "@/components/Footer";
import GetAllUsers from "@/components/GetAllUsers";
import ProtofolGameClient from "@/components/ProtofolGameClient";

export const DOMAIN = "http://192.168.1.108:5000";

export default function Home() {
  return (
    <div>
      <ProtofolGameClient />
      <Footer />
    </div>
  );
}
