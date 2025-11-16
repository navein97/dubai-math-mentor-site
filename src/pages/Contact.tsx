import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    curriculum: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Open WhatsApp with pre-filled message
    const whatsappMessage = `Hello! I'm ${formData.name}.%0A%0AEmail: ${formData.email}${formData.phone ? `%0APhone: ${formData.phone}` : ''}${formData.curriculum ? `%0ACurriculum: ${formData.curriculum}` : ''}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/971588042260?text=${whatsappMessage}`, '_blank');

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      curriculum: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      title: "Location",
      detail: "Jumeirah Lakes Towers (JLT), Dubai, UAE",
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Phone",
      detail: "+971588042260",
      link: "tel:+971588042260",
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "Email",
      detail: "tutor@jltmath.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Availability",
      detail: "Mon-Fri: 3pm-9pm, Sat-Sun: 9am-6pm",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to start your mathematical journey? Book your free consultation today
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3">{info.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.detail}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Book Your Free Consultation
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and I'll get back to you within 24 hours to schedule your free consultation session.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                  />
                </div>

                <div>
                  <Label htmlFor="curriculum">Curriculum</Label>
                  <Select value={formData.curriculum} onValueChange={(value) => setFormData({ ...formData, curriculum: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your curriculum" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pyp">PYP (Primary Years Programme)</SelectItem>
                      <SelectItem value="myp">MYP (Middle Years Programme)</SelectItem>
                      <SelectItem value="ibdp">IBDP (IB Diploma Programme)</SelectItem>
                      <SelectItem value="igcse">IGCSE</SelectItem>
                      <SelectItem value="as">AS Level</SelectItem>
                      <SelectItem value="alevel">A Level</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your learning goals, current challenges, or any questions you have..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted regarding tutoring services.
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <Card className="border-border mb-6">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 font-semibold text-secondary">1.</span>
                      <span>You'll receive a confirmation email within 24 hours</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 font-semibold text-secondary">2.</span>
                      <span>We'll schedule a free consultation at your convenience</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 font-semibold text-secondary">3.</span>
                      <span>During the consultation, we'll assess your needs and discuss a learning plan</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 font-semibold text-secondary">4.</span>
                      <span>If we're a good fit, we'll schedule your first tutoring session</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Is the first session really free?</p>
                      <p className="text-muted-foreground">Yes! The first consultation is completely free with no obligation.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Do you offer online tutoring?</p>
                      <p className="text-muted-foreground">Yes, I offer both online and in-person sessions in JLT.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">How quickly can we start?</p>
                      <p className="text-muted-foreground">Usually within a week of the initial consultation, based on availability.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Find Me in JLT, Dubai
          </h2>
          <Card className="border-border overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-secondary mx-auto mb-4" />
                <p className="text-foreground font-semibold">Jumeirah Lakes Towers</p>
                <p className="text-muted-foreground text-sm">Dubai, United Arab Emirates</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
