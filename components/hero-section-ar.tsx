import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Zap, Globe, Server } from "lucide-react"

export function HeroSectionAr() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            موثوق به من قبل أكثر من ١٠,٠٠٠ شركة حول العالم
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-balance lg:text-5xl mb-6">
            خدمات سحابية احترافية
            <span className="text-accent block my-2">بساطة وسهولة</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
            استضافة موثوقة، نطاقات آمنة، وحلول سحابية قابلة للتوسع. كل ما تحتاجه لتشغيل عملك في السحابة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              ابدأ التجربة المجانية
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              عرض الأسعار
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Server className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">الاستضافة السحابية</h3>
            <p className="text-sm text-muted-foreground">استضافة عالية الأداء مع ضمان وقت تشغيل ٩٩.٩٪</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">تسجيل النطاقات</h3>
            <p className="text-sm text-muted-foreground">احصل على النطاق المثالي بأسعار تنافسية</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">أمان المؤسسات</h3>
            <p className="text-sm text-muted-foreground">ميزات أمان متقدمة وشهادات SSL مضمنة</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">سرعة البرق</h3>
            <p className="text-sm text-muted-foreground">شبكة توصيل المحتوى العالمية وبنية تحتية محسنة للسرعة</p>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2 arabic-numerals">٩٩.٩٪</div>
              <div className="text-muted-foreground">ضمان وقت التشغيل</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2 arabic-numerals">+١٠ آلاف</div>
              <div className="text-muted-foreground">عميل سعيد</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2 arabic-numerals">٢٤/٧</div>
              <div className="text-muted-foreground">دعم الخبراء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
