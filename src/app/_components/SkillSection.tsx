import { Label } from "@/components/ui/label";

export const SkillSection = ({ skills }: { skills: string[] }) => {
  return (
    <div>
      <div className="flex-1 text-xs bg-amber-50">
        <div className="flex gap-1">
          <span>•</span>
          {skills.map((el) => (
            <p key={el}>
              {el}
              <span>,</span>
            </p>
          ))}
        </div>
        {/* <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.frontend.map((el) => (
              <p>
                {el}
                <span>,</span>
              </p>
            ))}
            {cvData.skills.ui.map((el) => (
              <p>
                {el}
                <span>,</span>
              </p>
            ))}
          </div>
          <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.backendRealtime.map((backend) => (
              <p>
                {backend}
                <span>,</span>
              </p>
            ))}
          </div>
          <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.databases.map((db) => (
              <p>
                {db}
                <span>,</span>
              </p>
            ))}
          </div>
          <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.orm.map((el) => (
              <p>
                {el}
                <span>,</span>
              </p>
            ))}
          </div>
          <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.dataFetching.map((el) => (
              <p>
                {el}
                <span>,</span>
              </p>
            ))}
          </div> */}
      </div>

      <div className="flex-1 text-xs bg-amber-50">
        {/* <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.mobileDev.map((mob) => (
              <p>
                {mob}
                <span>,</span>
              </p>
            ))}
          </div>
          <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.ai.map((el) => (
              <p>
                {el}
                <span>,</span>
              </p>
            ))}
            {cvData.skills.libs.map((lib) => (
              <p>
                {lib}
                <span>,</span>
              </p>
            ))}
          </div>
          <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.auth.map((el) => (
              <p>
                {el}
                <span>,</span>
              </p>
            ))}
            {cvData.skills.testing.map((el) => (
              <p>{el},</p>
            ))}
          </div>
          <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.deployments.map((deploy) => (
              <p>
                {deploy}
                <span>,</span>
              </p>
            ))}
          </div>
          <div className="flex gap-1">
            <span>•</span>
            {cvData.skills.arch.map((el) => (
              <p>
                {el}
                <span>,</span>
              </p>
            ))}
          </div> */}
      </div>
    </div>
  );
};
