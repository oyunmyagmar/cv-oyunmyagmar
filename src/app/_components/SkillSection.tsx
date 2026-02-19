import { Label } from "@/components/ui/label";
import { SkillComp } from "./SkillComp";
import { leftSideSkills, rightSideSkills } from "@/lib/data";

export const SkillSection = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Label className="text-[#2974E4] font-semibold">Ур чадвар</Label>
      <div className="w-full flex flex-col [@media(min-width:905px)]:flex-row justify-between">
        <div className="flex-1 text-xs">
          {leftSideSkills.map((item, i) => (
            <SkillComp key={i} skills={item} />
          ))}
        </div>
        <div className="flex-1 text-xs">
          {rightSideSkills.map((item, i) => (
            <SkillComp key={i} skills={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
