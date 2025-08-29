import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Zap } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "99.9%", label: "Uptime Achieved" },
    { icon: Zap, value: "24/7", label: "Expert Support" },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former AWS architect with 15+ years in cloud infrastructure. Passionate about making enterprise-grade hosting accessible to everyone.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Cloud security expert and former Google engineer. Leads our technical vision and ensures world-class reliability.",
    },
    {
      name: "Emily Watson",
      role: "Head of Customer Success",
      bio: "Dedicated to providing exceptional support experiences. Previously led support teams at major hosting providers.",
    },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Cloudy
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Built by Cloud Experts, For Everyone</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Founded in 2020, Cloudy was born from a simple mission: make professional cloud services accessible to
            businesses of all sizes. We combine enterprise-grade infrastructure with human-centered support.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We believe that every business deserves access to reliable, secure, and scalable cloud infrastructure. Our
              mission is to democratize enterprise-grade hosting by making it simple, affordable, and backed by
              world-class support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups launching their first website to enterprises scaling globally, we provide the foundation
              that lets you focus on what matters most - growing your business.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Reliability First</h4>
                <p className="text-muted-foreground">
                  Your success depends on our uptime. We maintain 99.9% availability through redundant infrastructure
                  and proactive monitoring.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Human Support</h4>
                <p className="text-muted-foreground">
                  Real experts, real conversations. Our support team consists of cloud engineers who understand your
                  challenges.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Transparent Pricing</h4>
                <p className="text-muted-foreground">
                  No hidden fees, no surprise charges. What you see is what you pay, with clear upgrade paths as you
                  grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Meet Our Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
