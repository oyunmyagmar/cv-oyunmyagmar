import { ContactBtn } from "./ContactBtn";
import { contactData } from "@/lib/data";

export const ContactSection = () => {
  return (
    <div>
      <div className="flex flex-col text-xs items-end">
        {contactData.map((el, i) => (
          <ContactBtn
            key={el.href}
            text={el.text}
            Icon={el.Icon}
            size={el.size}
            iconClassName={el.iconClassName}
            href={el.href}
          />
        ))}
      </div>
    </div>
  );
};
