"use client"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-muted-foreground text-sm mb-4">
              Professional cloud services for modern businesses. Reliable, secure, and scalable solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.open("https://twitter.com/cloudy", "_blank")}>
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.open("https://github.com/cloudy", "_blank")}>
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open("https://linkedin.com/company/cloudy", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.open("mailto:contact@cloudy.com", "_blank")}>
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cloud Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  VPS Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Domain Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  SSL Certificates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  CDN Services
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates and cloud insights delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button
                className="bg-accent hover:bg-accent/90"
                onClick={() => {
                  const emailInput = document.querySelector('input[placeholder="Enter your email"]') as HTMLInputElement
                  if (emailInput?.value) {
                    alert(
                      `Thank you for subscribing!\n\nYou'll receive our latest cloud insights and updates at ${emailInput.value}`,
                    )
                    emailInput.value = ""
                  } else {
                    alert("Please enter your email address to subscribe.")
                  }
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Cloudy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
