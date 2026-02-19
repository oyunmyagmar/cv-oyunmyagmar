import { cvData } from "@/lib/data";
import React from "react";

export const SkillComp = () => {
  return (
    <div className="flex gap-1">
      <span>•</span>
      {cvData.skills.languages.map((lang) => (
        <p>
          {lang}
          <span>,</span>
        </p>
      ))}
    </div>
  );
};
