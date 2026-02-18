import { Btn } from "./_components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { cvData } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex py-8 px-11 flex-col gap-4 overflow-y-auto no-scrollbar">
      <div className="w-full flex justify-between">
        <div>
          <div className="text-xl font-semibold">
            {cvData.lastName} {cvData.firstName}
          </div>
          <div className="text-base text-muted-foreground">
            Fullstack Developer
          </div>
        </div>
        <div className="flex flex-col text-xs items-end">
          <Btn
            text={`+976 ${cvData.telPhone}`}
            Icon={BsFillTelephoneFill}
            size={11}
            href={`tel:+976${cvData.telPhone}`}
          />
          <Btn
            text={cvData.email}
            Icon={HiMail}
            size={13}
            iconClassName="mt-[1.5px]"
            href={`mailto:${cvData.email}`}
          />
          <Btn
            text={cvData.github}
            Icon={IoLogoGithub}
            size={14}
            iconClassName="mt-[0.5px]"
            href={cvData.github}
          />
        </div>
      </div>
      <div className="text-xs text-justify">{cvData.bioSection}</div>
      <div className="text-[#0066C8] font-semibold">
        <div>Ур чадвар</div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="text-[#0066C8] font-semibold">Туршлага</div>
      <div className="text-[#0066C8] font-semibold">Боловсрол</div>
    </div>
  );
}
