"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, Server } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Trusted by 10,000+ businesses worldwide
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Professional Cloud Services
            <span className="text-accent block">Made Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
            Reliable hosting, secure domains, and scalable cloud solutions. Everything you need to power your business
            in the cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => window.open("#pricing", "_self")}>
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open("#pricing", "_self")}>
              View Pricing
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Server className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Cloud Hosting</h3>
            <p className="text-sm text-muted-foreground">High-performance hosting with 99.9% uptime guarantee</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Domain Registration</h3>
            <p className="text-sm text-muted-foreground">Secure your perfect domain with competitive pricing</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Enterprise Security</h3>
            <p className="text-sm text-muted-foreground">Advanced security features and SSL certificates included</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Global CDN and optimized infrastructure for speed</p>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">10k+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
