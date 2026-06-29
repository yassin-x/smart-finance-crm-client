"use client";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground mt-24 border-t border-border">
      <div className="container mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* About */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-primary">
            التمويل الذكي
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            منصة استشارات ائتمانية مستقلة، نساعدك تختار أفضل حلول التمويل
            المناسبة ليك بدون تعقيد.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary-foreground">
            روابط سريعة
          </h3>

          <ul className="space-y-3 text-sm text-muted-foreground">
            {["الرئيسية", "البرامج", "تواصل معنا"].map((item) => (
              <li
                key={item}
                className="relative w-fit cursor-pointer transition-colors hover:text-primary
                before:absolute before:-bottom-1 before:right-0 before:h-px before:w-0 
                before:bg-primary before:transition-all hover:before:w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary-foreground">
            تنبيه
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            التمويل الذكي منصة استشارات ائتمانية مستقلة، ولسنا جهة مانحة للقروض
            بشكل مباشر.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>

          <div className="flex items-center gap-4">
            <span className="hover:text-primary cursor-pointer transition">
              سياسة الخصوصية
            </span>
            <span className="hover:text-primary cursor-pointer transition">
              الشروط والأحكام
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
