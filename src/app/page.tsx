import Link from "next/link";
import { Btn } from "./_components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex justify-center py-8 px-11 flex-col gap-4 overflow-y-auto no-scrollbar">
      <div className="w-full flex justify-between">
        <div>
          <div className="text-xl font-semibold">Ганбаатар Оюунмягмар</div>
          <div className="text-base text-muted-foreground">
            Fullstack Developer
          </div>
        </div>
        <div className="flex flex-col text-xs items-end">
          <Btn
            text="+976 99192615"
            Icon={BsFillTelephoneFill}
            size={11}
            href="tel:+97699192615"
          />
          <Btn
            text="oyunmyagmar.g@gmail.com"
            Icon={HiMail}
            size={13}
            iconClassName="mt-[1.5px]"
            href="mailto:oyunmyagmar.g@gmail.com"
          />
          <Btn
            text="https://github.com/oyunmyagmar"
            Icon={IoLogoGithub}
            size={14}
            iconClassName="mt-[0.5px]"
            href="https://github.com/oyunmyagmar"
          />
        </div>
      </div>
      <div className="text-xs text-justify">
        Системийн архитектур төлөвлөлтийг чухалчилж, хэрэглэгчийн үнэ цэнийг
        эрхэмлэдэг Fullstack хөгжүүлэгч. 14+ төсөл (4 full-stack систем) дээр
        ажилласан туршлагатай. Баг удирдах болон технологийн судалгаа хийх
        (Real-time systems, Map GIS) чадвартай. Миний гол зорилго бол
        технологийн оновчтой шийдлээр дамжуулан бизнесийн бодит асуудлыг
        шийдвэрлэх бүтээгдэхүүн хөгжүүлэх юм.
      </div>
      <div className="text-[#0066C8] font-semibold">Ур чадвар</div>
      <div className="text-[#0066C8] font-semibold">Туршлага</div>
      <div className="text-[#0066C8] font-semibold">Боловсрол</div>
    </div>
  );
}
