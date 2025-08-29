import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export function PricingSectionAr() {
  const plans = [
    {
      name: "المبتدئ",
      price: "٣٤ ريال",
      period: "/شهرياً",
      description: "مثالي للمواقع الصغيرة والمشاريع الشخصية",
      features: [
        { name: "موقع واحد", included: true },
        { name: "١٠ جيجا تخزين SSD", included: true },
        { name: "١٠٠ جيجا نقل البيانات", included: true },
        { name: "شهادة SSL مجانية", included: true },
        { name: "دعم البريد الإلكتروني", included: true },
        { name: "نسخ احتياطية يومية", included: false },
        { name: "تكامل CDN", included: false },
        { name: "دعم أولوية", included: false },
      ],
      popular: false,
      cta: "ابدأ الآن",
    },
    {
      name: "المحترف",
      price: "١٠٩ ريال",
      period: "/شهرياً",
      description: "مثالي للشركات النامية ومواقع التجارة الإلكترونية",
      features: [
        { name: "٥ مواقع", included: true },
        { name: "٥٠ جيجا تخزين SSD", included: true },
        { name: "٥٠٠ جيجا نقل البيانات", included: true },
        { name: "شهادة SSL مجانية", included: true },
        { name: "دعم البريد الإلكتروني", included: true },
        { name: "نسخ احتياطية يومية", included: true },
        { name: "تكامل CDN", included: true },
        { name: "دعم أولوية", included: false },
      ],
      popular: true,
      cta: "ابدأ التجربة المجانية",
    },
    {
      name: "المؤسسات",
      price: "٣٧١ ريال",
      period: "/شهرياً",
      description: "ميزات متقدمة للتطبيقات واسعة النطاق",
      features: [
        { name: "مواقع غير محدودة", included: true },
        { name: "٢٠٠ جيجا تخزين SSD", included: true },
        { name: "نقل بيانات غير محدود", included: true },
        { name: "شهادة SSL مجانية", included: true },
        { name: "دعم البريد الإلكتروني", included: true },
        { name: "نسخ احتياطية يومية", included: true },
        { name: "تكامل CDN", included: true },
        { name: "دعم أولوية", included: true },
      ],
      popular: false,
      cta: "تواصل مع المبيعات",
    },
  ]

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            خطط الأسعار
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">أسعار بسيطة وشفافة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            اختر الخطة المثالية لاحتياجاتك. جميع الخطط تشمل ميزاتنا الأساسية بدون رسوم خفية أو تكاليف مفاجئة.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-accent shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  الأكثر شعبية
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold arabic-numerals">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-accent ml-3 flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground ml-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            جميع الخطط تشمل ضمان استرداد الأموال لمدة ٣٠ يوماً ومساعدة مجانية في النقل
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-accent ml-2" />
              بدون رسوم إعداد
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-accent ml-2" />
              إلغاء في أي وقت
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-accent ml-2" />
              دعم ٢٤/٧
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-accent ml-2" />
              اتفاقية مستوى خدمة ٩٩.٩٪
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
