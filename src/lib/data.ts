import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

export const cvData = {
  firstName: "Оюунмягмар",
  lastName: "Ганбаатар",
  telPhone: "99192615",
  email: "oyunmyagmar.g@gmail.com",
  github: "https://github.com/oyunmyagmar",
  bioSection:
    "Системийн архитектур төлөвлөлтийг чухалчилж, хэрэглэгчийн үнэ цэнийг эрхэмлэдэг Fullstack хөгжүүлэгч. 14+ төсөл (4 full-stack систем) дээр ажилласан туршлагатай. Баг удирдах болон технологийн судалгаа хийх (Real-time systems, Map GIS) чадвартай. Миний гол зорилго бол технологийн оновчтой шийдлээр дамжуулан бизнесийн бодит асуудлыг шийдвэрлэх бүтээгдэхүүн хөгжүүлэх юм",
  skills: {
    languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
    frontendUI: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "DaisyUI",
    ],
    backendRealtime: ["Node.js", "Express.js", "GraphQL", "REST APIs", "Ably"],
    databasesOrm: [
      "MongoDB",
      "Cloudflare D1",
      "Neon PostgreSQL",
      "Mongoose",
      "Drizzle",
      "Prisma",
    ],
    devOps: [
      "Nx Monorepo",
      "Github",
      "Cypress",
      "Jest",
      "Cloudflare",
      "Vercel",
      "Render",
      "Netlify",
    ],
    dataFetching: ["Axios", "SWR"],
    mobileDev: ["React Native", "Flutter"],
    aiSpecialTools: [
      "Gemini AI",
      "Hugging Face",
      "Clerk",
      "Bcrypt",
      "Leaflet",
      "Nodemailer",
    ],
  },
};

export const contactData = [
  {
    text: `+976 ${cvData.telPhone}`,
    Icon: BsFillTelephoneFill,
    size: 9,
    iconClassName: "mb-[1px]",
    href: `tel:+976${cvData.telPhone}`,
  },
  {
    text: cvData.email,
    Icon: HiMail,
    size: 11,
    iconClassName: "mt-[2px]",
    href: `mailto:${cvData.email}`,
  },
  {
    text: cvData.github,
    Icon: IoLogoGithub,
    size: 12,
    iconClassName: "mt-[0.5px]",
    href: cvData.github,
  },
];
