"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from "lucide-react"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email with detailed responses",
      contact: "support@cloudy.com",
      availability: "24/7 Response",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our cloud experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help through our website chat",
      contact: "Available on website",
      availability: "24/7 Available",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Cloud Street, Suite 400",
      zipcode: "San Francisco, CA 94105",
    },
    {
      city: "New York",
      address: "456 Tech Avenue, Floor 12",
      zipcode: "New York, NY 10001",
    },
    {
      city: "London",
      address: "789 Innovation Lane",
      zipcode: "London, UK EC2A 4DP",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">We're Here to Help</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Have questions about our services? Need technical support? Our team of cloud experts is ready to assist you
            24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="h-5 w-5 text-accent mr-2" />
                Send us a Message
              </CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input placeholder="Your Company (Optional)" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell us more about your needs..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Methods</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-start p-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <method.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="font-medium text-accent">{method.contact}</p>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {method.availability}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Offices</h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-start p-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{office.city}</h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                        <p className="text-sm text-muted-foreground">{office.zipcode}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-accent mb-2">Enterprise Customers</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Need a custom solution or have specific requirements? Our enterprise team is ready to work with you on
                  tailored cloud infrastructure.
                </p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  onClick={() => {
                    alert(
                      "Enterprise Sales Contact\n\nOur enterprise team will contact you within 2 business hours to discuss your custom requirements.\n\nEmail: enterprise@cloudy.com\nPhone: +1 (555) 123-4567",
                    )
                  }}
                >
                  Contact Enterprise Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
