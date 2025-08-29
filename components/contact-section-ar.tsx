import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactSectionAr() {
  const contactMethods = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@cloudy.sa",
      description: "راسلنا في أي وقت",
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 11 123 4567",
      description: "دعم على مدار الساعة",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الرياض، المملكة العربية السعودية",
      description: "مقرنا الرئيسي",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "٢٤/٧ دعم متاح",
      description: "نحن هنا دائماً لمساعدتك",
    },
  ]

  const offices = [
    {
      city: "الرياض",
      address: "حي الملك فهد، طريق الملك فهد",
      phone: "+966 11 123 4567",
    },
    {
      city: "جدة",
      address: "حي الروضة، شارع التحلية",
      phone: "+966 12 234 5678",
    },
    {
      city: "الدمام",
      address: "حي الفيصلية، شارع الأمير محمد بن فهد",
      phone: "+966 13 345 6789",
    },
  ]

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            تواصل معنا
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">نحن هنا لمساعدتك</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            لديك أسئلة حول خدماتنا؟ تحتاج إلى مساعدة تقنية؟ فريقنا جاهز لمساعدتك على مدار الساعة.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>أرسل لنا رسالة</CardTitle>
              <CardDescription>املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    الاسم الأول
                  </label>
                  <Input id="firstName" placeholder="أدخل اسمك الأول" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    اسم العائلة
                  </label>
                  <Input id="lastName" placeholder="أدخل اسم العائلة" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  رقم الهاتف
                </label>
                <Input id="phone" type="tel" placeholder="أدخل رقم هاتفك" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  الموضوع
                </label>
                <Input id="subject" placeholder="موضوع رسالتك" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  الرسالة
                </label>
                <Textarea id="message" placeholder="اكتب رسالتك هنا..." className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">إرسال الرسالة</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card key={index}>
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center ml-4">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-accent font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Office Locations */}
            <Card>
              <CardHeader>
                <CardTitle>مكاتبنا</CardTitle>
                <CardDescription>زرنا في أي من مكاتبنا في المملكة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-accent">{office.city}</h4>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                    <p className="text-sm font-medium arabic-numerals">{office.phone}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
