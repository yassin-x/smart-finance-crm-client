import MainHeading from "@/components/shared/MainHeading";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Scale, UserCheck } from "lucide-react";

interface Feature {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

export default function WhyUs() {
  const features: Feature[] = [
    {
      title: "خبرة قانونية ومصرفية",
      icon: <Scale size={28} />,
      desc: "فريق يجمع بين الخبرة القانونية والمصرفية لضمان أفضل الحلول.",
    },
    {
      title: "سرية تامة",
      icon: <ShieldCheck size={28} />,
      desc: "نحافظ على بياناتك بأعلى معايير الأمان والخصوصية.",
    },
    {
      title: "متابعة شخصية",
      icon: <UserCheck size={28} />,
      desc: "بنكون معاك خطوة بخطوة من التقديم لحد استلام التمويل.",
    },
  ];

  return (
    <section className="container section-gap " id="why-us">
      <MainHeading title="ما يميزنا" subTitle="لماذا نحن؟" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group p-4 rounded-2xl border hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="flex flex-col items-start gap-4 p-0">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
