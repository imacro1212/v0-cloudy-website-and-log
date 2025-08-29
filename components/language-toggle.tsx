"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

interface LanguageToggleProps {
  currentLang: "en" | "ar"
}

export function LanguageToggle({ currentLang }: LanguageToggleProps) {
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    if (currentLang === "en") {
      router.push("/ar")
    } else {
      router.push("/")
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{currentLang === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
