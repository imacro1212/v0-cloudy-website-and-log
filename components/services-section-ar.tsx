import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Globe, Shield, Database, Zap, Headphones } from "lucide-react"

export function ServicesSectionAr() {
  const services = [
    {
      icon: Server,
      title: "الاستضافة السحابية",
      description: "استضافة عالية الأداء مع ضمان وقت تشغيل ٩٩.٩٪",
      features: ["SSD فائق السرعة", "نسخ احتياطية تلقائية", "حماية DDoS", "لوحة تحكم سهلة"],
    },
    {
      icon: Globe,
      title: "تسجيل النطاقات",
      description: "احصل على النطاق المثالي بأسعار تنافسية",
      features: ["أكثر من ٤٠٠ امتداد", "حماية الخصوصية", "إدارة DNS", "نقل مجاني"],
    },
    {
      icon: Shield,
      title: "أمان المؤسسات",
      description: "ميزات أمان متقدمة وشهادات SSL مضمنة",
      features: ["شهادات SSL مجانية", "جدار حماية", "مراقبة الأمان", "نسخ احتياطية مشفرة"],
    },
    {
      icon: Database,
      title: "قواعد البيانات المُدارة",
      description: "قواعد بيانات قابلة للتوسع مع نسخ احتياطية تلقائية",
      features: ["MySQL و PostgreSQL", "نسخ احتياطية يومية", "تحسين الأداء", "مراقبة مستمرة"],
    },
    {
      icon: Zap,
      title: "شبكة توصيل المحتوى",
      description: "شبكة توصيل المحتوى العالمية وبنية تحتية محسنة للسرعة",
      features: ["١٥٠+ موقع عالمي", "ضغط تلقائي", "تحسين الصور", "تخزين مؤقت ذكي"],
    },
    {
      icon: Headphones,
      title: "دعم ٢٤/٧",
      description: "فريق دعم خبير متاح على مدار الساعة",
      features: ["دعم متعدد اللغات", "استجابة سريعة", "خبراء تقنيون", "دعم عبر الهاتف والدردشة"],
    },
  ]

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            خدماتنا
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">حلول سحابية شاملة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            نقدم مجموعة كاملة من الخدمات السحابية المصممة لتلبية احتياجات عملك وتسريع نموه.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full ml-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
