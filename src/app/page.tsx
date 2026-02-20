import { cvData } from "@/lib/data";
import { Label } from "@/components/ui/label";
import { ContactSection, SkillSection } from "./_components";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex py-8 px-11 flex-col gap-4 overflow-y-auto no-scrollbar">
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="text-xl font-semibold">
            {cvData.lastName} {cvData.firstName}
          </div>
          <div className="text-base text-[#949494]">Fullstack Developer</div>
        </div>
        <ContactSection />
      </div>
      <div className="text-xs text-justify">{cvData.bioSection}</div>
      <SkillSection />

      <div className="flex flex-col gap-2">
        <Label className="text-[#2974E4] font-semibold">Туршлага</Label>
        <div className="flex justify-between text-[#777777] text-[11px]">
          <div>Pinecone Academy</div>
          <div>2024.06 - Одоо</div>
        </div>
        <div className="text-xs flex flex-col gap-4">
          <div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Label>ReferU</Label>
                <Link href={""}></Link>
              </div>

              <div>2026.01 - 2026.02</div>
            </div>
            <div>
              {cvData.experiences.referu.map((el) => (
                <dov></dov>
              ))}
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>Ажилтан санал болгох мобайл апп</div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  Auth Workflow: Clerk OTP, GraphQL ашиглан ажилтны нэвтрэх
                  хэсгийг хөгжүүлж, бүртгэлийн процессыг хурдасган, аюулгүй
                  байдлыг сайжруулсан.
                </div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  Referral Management: Нээлттэй ажлын байранд нэр дэвшигч санал
                  болгох цогц модулийг боловсруулж, хүний нөөцийн мэдээлэл
                  цуглуулах явцыг автоматжуулсан.
                </div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  Expert Insight: 10+ жил ажилласан HR мэргэжилтнээс зөвлөгөө
                  авч, хүний нөөцөд очих мэдээллийг бодит шаардлагад нийцүүлэн
                  илүү оновчтой болгосон.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Label>Growly</Label>
                <Link href={"https://skill-hub-woad.vercel.app/"}>
                  https://skill-hub-woad.vercel.app/
                </Link>
              </div>

              <div>2025.12 - 2026.01</div>
            </div>
            <div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>Дугуйлан хайх нэгдсэн платформ</div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  RBAC & Security: Clerk болон MongoDB-г хослуулан хэрэглэгчийг
                  статусаар ангилан нэвтрүүлэх систем хөгжүүлж, админ болон
                  хэрэглэгч талаас хандах урсгалыг тусгаарлан, аюулгүй байдлыг
                  сайжруулсан.
                </div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  Interactive GIS Solution: Leaflet сан ашиглан хэрэглэгчийн
                  байршилд суурилсан интерактив газрын зураг бүтээж, дугуйлан
                  хайх процессыг хялбарчилсан.
                </div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  UX Optimization: 10 хэрэглэгчээс User Experience feedback авч,
                  газрын зургийн ажиллагааг сайжруулж, хайлтын үр дүнг илүү
                  оновчтой болгосноор хэрэглэгчийн сэтгэл ханамжийг
                  нэмэгдүүлсэн.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Label>Study Buddy</Label>
                <Link href={"https://project-study-buddy-nosql.vercel.app/"}>
                  https://project-study-buddy-nosql.vercel.app/
                </Link>
              </div>

              <div>2025.11 – 2025.12</div>
            </div>
            <div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>Давтлага зохион байгуулах платформ</div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  Real-time Interaction: Ably санд суурилсан Real-time
                  нэгдэх/гарах систем хөгжүүлж, сурагчдад давтлагын төлөв болон
                  оролцогчдын мэдээллийг цаг тухайд нь харах боломж олгосон.
                </div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  Automated Workflow: Nodemailer ашиглан давтлага
                  баталгаажуулалтын урсгалыг автоматжуулж, ментор болон
                  сурагчдын хоорондох мэдээлэл солилцооны гар ажиллагааг
                  бууруулсан.
                </div>
              </div>
              <div className="flex gap-1 text-justify">
                <span>•</span>
                <div>
                  Impact: Нийт 20 менторт урилга илгээж, 8 баталгаажуулалт авч,
                  71 сурагчид давтлага баталгаажсан тухай мэдэгдлийг амжилттай
                  хүргэсэн.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Label className="text-[#2974E4] font-semibold">Боловсрол</Label>
    </div>
  );
}
