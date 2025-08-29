"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { LanguageToggle } from "./language-toggle"

export function NavigationAr() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Logo />
            <LanguageToggle currentLang="ar" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 space-x-reverse">
              <a href="#home" className="text-foreground hover:text-accent transition-colors">
                الرئيسية
              </a>
              <a href="#services" className="text-foreground hover:text-accent transition-colors">
                الخدمات
              </a>
              <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
                الأسعار
              </a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">
                من نحن
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" onClick={() => alert("تسجيل الدخول\n\nسيتم توجيهك إلى صفحة تسجيل الدخول.")}>
              تسجيل الدخول
            </Button>
            <Button className="bg-accent hover:bg-accent/90" onClick={() => window.open("#pricing", "_self")}>
              ابدأ الآن
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الأسعار
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => alert("تسجيل الدخول\n\nسيتم توجيهك إلى صفحة تسجيل الدخول.")}
                >
                  تسجيل الدخول
                </Button>
                <Button
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={() => window.open("#pricing", "_self")}
                >
                  ابدأ الآن
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
