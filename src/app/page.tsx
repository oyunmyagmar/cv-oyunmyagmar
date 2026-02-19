import { cvData } from "@/lib/data";
import { Label } from "@/components/ui/label";
import { ContactSection, SkillSection } from "./_components";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex py-8 px-11 flex-col gap-4 overflow-y-auto no-scrollbar">
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="text-xl font-semibold">
            {cvData.lastName} {cvData.firstName}
          </div>
          <div className="text-base text-muted-foreground">
            Fullstack Developer
          </div>
        </div>
        <ContactSection />
      </div>
      <div className="text-xs text-justify">{cvData.bioSection}</div>
      <div className="w-full flex flex-col gap-2 bg-red-50">
        <Label className="text-[#2974E4] font-semibold">Ур чадвар</Label>
        <div className="w-full flex flex-col [@media(min-width:905px)]:flex-row gap-2.5">
          <div className="flex-1 text-xs bg-amber-50">
            <SkillSection skills={cvData.skills.languages} />
            <SkillSection skills={cvData.skills.frontendUI} />
            <SkillSection skills={cvData.skills.backendRealtime} />
            <SkillSection skills={cvData.skills.databasesOrm} />
          </div>
          <div className="flex-1 text-xs bg-amber-50">
            <SkillSection skills={cvData.skills.devOps} />
            <SkillSection skills={cvData.skills.mobileDev} />
            <SkillSection skills={cvData.skills.aiSpecialTools} />
          </div>
        </div>
      </div>

      <Label className="text-[#2974E4] font-semibold">Туршлага</Label>
      <Label className="text-[#2974E4] font-semibold">Боловсрол</Label>
    </div>
  );
}
