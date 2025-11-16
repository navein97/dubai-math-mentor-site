import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const packages = [
    {
      name: "Pay As You Go",
      price: "250",
      unit: "per hour",
      description: "Flexible single sessions for occasional support",
      features: [
        "One-on-one tutoring",
        "Flexible scheduling",
        "All curricula covered",
        "Online or in-person",
        "Study materials included",
      ],
      popular: false,
    },
    {
      name: "Monthly Package",
      price: "900",
      unit: "per month",
      description: "4 sessions per month - best for consistent progress",
      features: [
        "4 × 1-hour sessions",
        "Priority scheduling",
        "Progress tracking",
        "Parent updates",
        "Homework support",
        "Study materials",
        "Save AED 100/month",
      ],
      popular: true,
    },
    {
      name: "Intensive Prep",
      price: "1,800",
      unit: "2-week course",
      description: "Focused exam preparation package",
      features: [
        "8 × 1.5-hour sessions",
        "Exam-focused content",
        "Past paper practice",
        "Comprehensive revision",
        "Exam techniques",
        "Mock exams",
        "Study plan",
      ],
      popular: false,
    },
  ];

  const additionalInfo = [
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Flexible Timing",
      description: "Sessions available evenings and weekends to fit your schedule",
    },
    {
      icon: <Users className="h-6 w-6 text-secondary" />,
      title: "Small Group Discount",
      description: "Save 30% per student for groups of 2-3 students at the same level",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Pricing & Packages
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Transparent, competitive pricing with flexible options to suit your needs
          </p>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-6 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <p className="text-secondary-foreground font-semibold text-lg">
            🎉 First Session FREE - Limited Time Offer!
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`border-2 ${pkg.popular ? 'border-secondary shadow-lg scale-105' : 'border-border'} hover:shadow-xl transition-all relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">AED {pkg.price}</span>
                    <span className="text-muted-foreground ml-2">/ {pkg.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-secondary hover:bg-secondary/90' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {additionalInfo.map((info, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="mb-4">{info.icon}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Policies */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Payment & Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bank transfer</li>
                  <li>• Cash payment</li>
                  <li>• Credit/Debit card (online sessions)</li>
                  <li>• Monthly invoicing available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Free cancellation 24 hours before session</li>
                  <li>• Late cancellations charged at 50%</li>
                  <li>• Missed sessions charged at full rate</li>
                  <li>• Easy rescheduling options available</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-border">
            <CardHeader>
              <CardTitle className="text-xl">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">All Sessions Include:</h4>
                  <ul className="space-y-1">
                    <li>• Personalized lesson plans</li>
                    <li>• Study materials and worksheets</li>
                    <li>• Progress tracking</li>
                    <li>• Homework support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Free Resources:</h4>
                  <ul className="space-y-1">
                    <li>• Email support between sessions</li>
                    <li>• Access to online resources</li>
                    <li>• Parent progress updates</li>
                    <li>• Study tips and strategies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you offer a trial session?",
                a: "Yes! Your first session is completely free with no obligation. This allows us to assess your needs and see if we're a good fit.",
              },
              {
                q: "Can I switch between packages?",
                a: "Absolutely. You can upgrade or change packages at any time based on your needs and schedule.",
              },
              {
                q: "Are materials included in the price?",
                a: "Yes, all study materials, worksheets, and resources are included. You only need your school textbooks.",
              },
              {
                q: "What if I need to reschedule?",
                a: "No problem! Just let me know 24 hours in advance and we'll find a time that works better for you.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/90 border-none max-w-3xl mx-auto">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                Book your free consultation session today and take the first step towards mathematical success.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Claim Your Free Session
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
