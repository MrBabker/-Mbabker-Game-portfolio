import Footer from "@/components/Footer";
import ProtofolGameClient from "@/components/ProtofolGameClient";

export default function Home() {
  return (
    <div>
      <ProtofolGameClient name={process.env.NAME||"A"}/>
      <Footer />
    </div>
  );
}
