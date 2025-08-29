"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for small websites and personal projects",
      features: [
        { name: "1 Website", included: true },
        { name: "10GB SSD Storage", included: true },
        { name: "100GB Bandwidth", included: true },
        { name: "Free SSL Certificate", included: true },
        { name: "Email Support", included: true },
        { name: "Daily Backups", included: false },
        { name: "CDN Integration", included: false },
        { name: "Priority Support", included: false },
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses and e-commerce sites",
      features: [
        { name: "5 Websites", included: true },
        { name: "50GB SSD Storage", included: true },
        { name: "500GB Bandwidth", included: true },
        { name: "Free SSL Certificate", included: true },
        { name: "Email Support", included: true },
        { name: "Daily Backups", included: true },
        { name: "CDN Integration", included: true },
        { name: "Priority Support", included: false },
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "Advanced features for large-scale applications",
      features: [
        { name: "Unlimited Websites", included: true },
        { name: "200GB SSD Storage", included: true },
        { name: "Unlimited Bandwidth", included: true },
        { name: "Free SSL Certificate", included: true },
        { name: "Email Support", included: true },
        { name: "Daily Backups", included: true },
        { name: "CDN Integration", included: true },
        { name: "Priority Support", included: true },
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees or surprise
            charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-accent shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => {
                    if (plan.cta === "Contact Sales") {
                      window.open("#contact", "_self")
                    } else if (plan.cta === "Start Free Trial") {
                      alert(
                        `Starting your free trial for ${plan.name} plan!\n\nYou'll be redirected to our signup page to create your account and begin your 30-day free trial.`,
                      )
                    } else {
                      alert(
                        `Getting started with ${plan.name} plan!\n\nYou'll be redirected to our signup page to create your account.`,
                      )
                    }
                  }}
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
            All plans include 30-day money-back guarantee and free migration assistance
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-accent mr-2" />
              No Setup Fees
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-accent mr-2" />
              Cancel Anytime
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-accent mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-accent mr-2" />
              99.9% Uptime SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
