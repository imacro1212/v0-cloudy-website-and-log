import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

export function AboutSectionAr() {
  const stats = [
    { icon: Users, value: "+١٠ آلاف", label: "عميل سعيد" },
    { icon: Globe, value: "٥٠+", label: "دولة" },
    { icon: Award, value: "٩٩.٩٪", label: "وقت التشغيل" },
    { icon: TrendingUp, value: "٥ سنوات", label: "من الخبرة" },
  ]

  const team = [
    {
      name: "أحمد محمد",
      role: "الرئيس التنفيذي",
      description: "خبير في التكنولوجيا السحابية مع أكثر من ١٥ عاماً من الخبرة",
    },
    {
      name: "فاطمة علي",
      role: "مديرة التقنية",
      description: "متخصصة في أمان البيانات والبنية التحتية السحابية",
    },
    {
      name: "محمد حسن",
      role: "مدير العمليات",
      description: "خبير في إدارة الخوادم وضمان جودة الخدمة",
    },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            من نحن
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">رواد في الخدمات السحابية</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            نحن فريق من الخبراء المتخصصين في تقديم حلول سحابية مبتكرة وموثوقة للشركات من جميع الأحجام.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2 arabic-numerals">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">مهمتنا</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              نسعى لتمكين الشركات من تحقيق أهدافها الرقمية من خلال تقديم خدمات سحابية موثوقة وآمنة وقابلة للتوسع. نؤمن
              بأن التكنولوجيا يجب أن تكون في خدمة الأعمال، وليس العكس.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">قيمنا</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 ml-3 flex-shrink-0" />
                <span>
                  <strong>الموثوقية:</strong> نضمن أعلى مستويات الأداء والاستقرار
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 ml-3 flex-shrink-0" />
                <span>
                  <strong>الأمان:</strong> حماية بياناتك هي أولويتنا القصوى
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 ml-3 flex-shrink-0" />
                <span>
                  <strong>الابتكار:</strong> نواكب أحدث التقنيات والحلول
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 ml-3 flex-shrink-0" />
                <span>
                  <strong>الدعم:</strong> فريق متخصص متاح على مدار الساعة
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">فريق القيادة</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
