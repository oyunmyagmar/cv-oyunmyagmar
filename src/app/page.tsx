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
      <SkillSection />

      <Label className="text-[#2974E4] font-semibold">Туршлага</Label>
      <Label className="text-[#2974E4] font-semibold">Боловсрол</Label>
    </div>
  );
}
