"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, Globe, Shield, Zap, Database, Monitor, ArrowRight, Check } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Server,
      title: "Cloud Hosting",
      description: "High-performance cloud hosting with guaranteed uptime and scalable resources.",
      features: ["99.9% Uptime SLA", "Auto-scaling", "SSD Storage", "24/7 Monitoring"],
      popular: true,
    },
    {
      icon: Globe,
      title: "Domain Registration",
      description: "Secure your perfect domain name with competitive pricing and easy management.",
      features: ["Free WHOIS Privacy", "DNS Management", "Domain Transfer", "Bulk Registration"],
      popular: false,
    },
    {
      icon: Database,
      title: "VPS Hosting",
      description: "Dedicated virtual private servers with full root access and custom configurations.",
      features: ["Full Root Access", "Custom OS", "Dedicated Resources", "Backup Solutions"],
      popular: false,
    },
    {
      icon: Shield,
      title: "SSL Certificates",
      description: "Secure your website with industry-standard SSL certificates and encryption.",
      features: ["256-bit Encryption", "Wildcard Support", "Extended Validation", "Auto-renewal"],
      popular: false,
    },
    {
      icon: Zap,
      title: "CDN Services",
      description: "Global content delivery network for lightning-fast website performance.",
      features: ["Global Edge Locations", "DDoS Protection", "Real-time Analytics", "Cache Optimization"],
      popular: false,
    },
    {
      icon: Monitor,
      title: "Website Monitoring",
      description: "24/7 website monitoring with instant alerts and performance insights.",
      features: ["Uptime Monitoring", "Performance Metrics", "Alert Notifications", "Detailed Reports"],
      popular: false,
    },
  ]

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Complete Cloud Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Everything you need to build, deploy, and scale your applications in the cloud. Professional-grade
            infrastructure with enterprise-level support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-all duration-300 group">
              {service.popular && (
                <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground">Most Popular</Badge>
              )}
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  onClick={() => {
                    alert(
                      `Learn more about ${service.title}\n\n${service.description}\n\nFeatures:\n${service.features.join("\n")}\n\nContact us for detailed information and pricing.`,
                    )
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
