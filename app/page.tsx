import ImageCardForm from "@/components/Card";
import {app} from "@/firebase/firebase";
export default function Home() {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <ImageCardForm/>
    </section>
  );
}
