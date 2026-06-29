"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThanksPage() {
  const router = useRouter();

  useEffect(() => {
    const success = localStorage.getItem("success_lead");

    if (!success) {
      router.replace("/");
      return;
    }

    const cleanup = () => {
      localStorage.removeItem("success_lead");
    };

    const handlePageHide = () => {
      cleanup();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        cleanup();
      }
    };

    window.addEventListener("pagehide", handlePageHide);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cleanup();
      window.removeEventListener("pagehide", handlePageHide);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [router]);

  const handleReset = () => {
    localStorage.removeItem("success_lead");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md text-center border-primary/20 shadow-lg">
        <CardHeader className="space-y-3">
          <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="text-primary w-8 h-8" />
          </div>

          <CardTitle className="text-xl text-primary">
            شكراً لتقديم طلبك
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <p className="text-muted-foreground leading-relaxed">
            تم استلام بياناتك بنجاح، وسيتم التواصل معك خلال
            <span className="font-semibold text-foreground">
              {" "}
              24 - 48 ساعة{" "}
            </span>
            من فريقنا المختص.
          </p>

          <div className="bg-secondary/40 border rounded-lg p-3 text-sm text-muted-foreground">
            برجاء التأكد من أن هاتفك متاح لاستقبال المكالمات أو الرسائل.
          </div>

          <Button onClick={handleReset} className="w-full" variant="default">
            العودة للرئيسية
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
