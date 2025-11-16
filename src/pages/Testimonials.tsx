import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent of IBDP Student",
      content: "Our daughter's confidence in mathematics has grown tremendously. She went from struggling with basic concepts to scoring a 6 in her IB Math AA HL exams. The personalized approach and patience made all the difference.",
      rating: 5,
    },
    {
      name: "Ahmed K.",
      role: "A Level Student",
      content: "I was seriously considering dropping A Level Maths until I started tutoring here. The way complex concepts were broken down made everything click. Ended up with an A* and I'm now studying Engineering at university!",
      rating: 5,
    },
    {
      name: "Jennifer L.",
      role: "Parent of MYP Student",
      content: "My son actually looks forward to his math sessions now! The tutor has a gift for making mathematics engaging and relevant. His school grades have improved from Cs to As consistently.",
      rating: 5,
    },
    {
      name: "Hassan R.",
      role: "IGCSE Student",
      content: "Started tutoring in Year 10 feeling completely lost. With structured lessons and lots of practice, I managed to get an A* in my IGCSE exams. The exam preparation sessions were especially helpful.",
      rating: 5,
    },
    {
      name: "Linda P.",
      role: "Parent of PYP Student",
      content: "Our daughter was developing math anxiety at a young age. The gentle, encouraging approach and fun problem-solving activities have completely transformed her relationship with numbers. She now enjoys math!",
      rating: 5,
    },
    {
      name: "Omar S.",
      role: "IBDP Student",
      content: "The internal assessment guidance was invaluable. Not only did I score 19/20 on my IA, but I also developed a genuine interest in mathematical modeling. Highly recommend for any IB student!",
      rating: 5,
    },
  ];

  const achievements = [
    { stat: "95%", label: "Exam Success Rate" },
    { stat: "200+", label: "Students Tutored" },
    { stat: "10+", label: "Years Experience" },
    { stat: "4.9/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Success Stories
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Hear from students and parents about their mathematical journey and achievements
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {achievements.map((item, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-secondary/30 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Highlights */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Recent Student Achievements
          </h2>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { achievement: "IB Math AA HL - Score 7", student: "Student achieved top grade after 6 months of tutoring" },
                  { achievement: "A Level Mathematics - A*", student: "Improved from predicted C to A* in 8 months" },
                  { achievement: "IGCSE Mathematics - A*", student: "From D grade at mid-year to A* in finals" },
                  { achievement: "MYP Year 5 - Level 7", student: "Consistent improvement throughout the year" },
                  { achievement: "Internal Assessment - 19/20", student: "One of the highest IA scores in the school" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-success flex items-center justify-center">
                      <Star className="h-5 w-5 text-success-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.achievement}</h4>
                      <p className="text-sm text-muted-foreground">{item.student}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/90 border-none max-w-3xl mx-auto">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Join Our Success Stories
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                Start your journey to mathematical excellence today. Book a free consultation to discuss your goals.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Get Started Today
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

export default Testimonials;
