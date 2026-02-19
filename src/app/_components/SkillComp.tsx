export const SkillComp = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex gap-1">
      <span>•</span>
      {skills.map((el) => (
        <p key={el}>
          {el}
          <span>,</span>
        </p>
      ))}
    </div>
  );
};
