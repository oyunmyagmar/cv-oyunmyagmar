import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

export const Btn = ({
  text,
  Icon,
  size,
  iconClassName = "",
  href,
}: {
  text: string;
  Icon: IconType;
  size: number;
  iconClassName?: string;
  href: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-0.5">
      <Button
        asChild
        size={"xs"}
        variant={"ghost"}
        className="cursor-pointer border-0 duration-500 ease-in-out text-[8px] h-fit px-0.5 py-0.5"
      >
        <a href={href}>{text}</a>
      </Button>
      <Icon
        className={`text-[#0066C8] w-[14px] ${iconClassName}`}
        size={size}
      />
    </div>
  );
};
