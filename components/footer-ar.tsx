import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function FooterAr() {
  const footerLinks = {
    services: [
      { name: "الاستضافة السحابية", href: "#" },
      { name: "تسجيل النطاقات", href: "#" },
      { name: "أمان المؤسسات", href: "#" },
      { name: "قواعد البيانات", href: "#" },
      { name: "شبكة CDN", href: "#" },
    ],
    support: [
      { name: "مركز المساعدة", href: "#" },
      { name: "الوثائق", href: "#" },
      { name: "دروس تعليمية", href: "#" },
      { name: "حالة الخدمة", href: "#" },
      { name: "تواصل معنا", href: "#" },
    ],
    company: [
      { name: "من نحن", href: "#" },
      { name: "فريق العمل", href: "#" },
      { name: "الوظائف", href: "#" },
      { name: "الأخبار", href: "#" },
      { name: "الشراكات", href: "#" },
    ],
    legal: [
      { name: "سياسة الخصوصية", href: "#" },
      { name: "شروط الخدمة", href: "#" },
      { name: "اتفاقية مستوى الخدمة", href: "#" },
      { name: "سياسة الاسترداد", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Linkedin, href: "#", label: "لينكد إن" },
    { icon: Instagram, href: "#", label: "إنستغرام" },
  ]

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              نقدم خدمات سحابية احترافية وموثوقة للشركات من جميع الأحجام. حلول مبتكرة لنمو عملك الرقمي.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 ml-2" />
                info@cloudy.sa
              </div>
              <div className="flex items-center text-sm text-muted-foreground arabic-numerals">
                <Phone className="h-4 w-4 ml-2" />
                +966 11 123 4567
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 ml-2" />
                الرياض، المملكة العربية السعودية
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">الخدمات</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">الدعم</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">النشرة الإخبارية</h3>
            <p className="text-sm text-muted-foreground mb-4">اشترك للحصول على آخر الأخبار والعروض الخاصة</p>
            <div className="flex gap-2">
              <Input placeholder="بريدك الإلكتروني" className="flex-1" />
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                اشتراك
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground arabic-numerals">© ٢٠٢٤ كلاودي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
