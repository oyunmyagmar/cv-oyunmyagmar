import Link from "next/link";
import { Btn } from "./_components";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex justify-center py-8 px-11">
      <div className="w-full flex justify-between">
        <div>
          <div className="text-xl font-bold">Ганбаатар Оюунмягмар</div>
          <div className="text-muted-foreground">Fullstack Developer</div>
        </div>
        <div className="flex flex-col text-xs items-end gap-0.5">
          <a href="tel:+97699192615">
            <Btn text="+976 99192615" />
          </a>
          <a href="mailto:oyunmyagmar.g@gmail.com">
            <Btn text="oyunmyagmar.g@gmail.com" />
          </a>
          <Link href={"https://github.com/oyunmyagmar"}>
            <Btn text="https://github.com/oyunmyagmar" />
          </Link>
        </div>
      </div>
    </div>
  );
}
