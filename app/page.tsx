import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <main className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-6xl text-center font-bold">The software that sparks <br /> your imagination</h1>
          <p className="text-xl text-center">Our landing page template works on all devices, so you only have to set it up once, and get <br /> beautiful results forever.</p>
        </div>
        <form className="flex flex-col gap-4 justify-center items-center rounded-lg bg-violet-200 p- w-max">
          <Input className="w-max" type="email" placeholder="Your email..."></Input>
          <Button type="submit">Join the waitlist</Button>
        </form>
      </main>
    </div>
  );
}
