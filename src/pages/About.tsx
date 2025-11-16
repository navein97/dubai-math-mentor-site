import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const qualifications = [
    "Bachelor's Degree in Mathematics Education",
    "Master's Degree in Educational Leadership",
    "IB Certified Teacher - Mathematics",
    "Cambridge International Examiner",
    "10+ Years Teaching Experience",
  ];

  const expertise = [
    { icon: <BookOpen className="h-6 w-6 text-secondary" />, title: "Curriculum Expert", desc: "Deep knowledge of PYP, MYP, IBDP, IGCSE, AS & A Level mathematics" },
    { icon: <Target className="h-6 w-6 text-secondary" />, title: "Exam Specialist", desc: "Proven strategies for achieving top grades in international exams" },
    { icon: <Award className="h-6 w-6 text-secondary" />, title: "Student-Centered", desc: "Passionate about building confidence and mathematical thinking" },
    { icon: <GraduationCap className="h-6 w-6 text-secondary" />, title: "Continuous Learning", desc: "Staying current with latest curriculum updates and teaching methods" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Your Tutor
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Dedicated to helping students achieve mathematical excellence through personalized, expert tutoring
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center mb-6">
                <GraduationCap className="h-32 w-32 text-secondary" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Meet Your Math Tutor</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over a decade of experience teaching mathematics across various international curricula, 
                  I am passionate about helping students not just understand mathematics, but truly appreciate 
                  its beauty and relevance.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Based in Jumeirah Lakes Towers, Dubai, I specialize in providing personalized tutoring for 
                  students following the IB (PYP, MYP, DP) and Cambridge (IGCSE, AS, A Level) curricula. 
                  My approach focuses on building strong conceptual foundations while developing problem-solving 
                  skills and exam techniques.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every student learns differently, and I pride myself on adapting my teaching methods to suit 
                  individual learning styles, ensuring that each student reaches their full mathematical potential.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Qualifications & Certifications</h3>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{qual}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Teaching Philosophy */}
          <Card className="mb-12 bg-accent">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Teaching Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe that mathematics is not just about memorizing formulas and procedures, but about 
                developing logical thinking and problem-solving skills that extend far beyond the classroom.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My teaching approach emphasizes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Building strong conceptual understanding before procedural fluency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Encouraging students to ask questions and think critically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Connecting mathematical concepts to real-world applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Building confidence through structured support and positive reinforcement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Expertise Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-primary to-primary/90 border-none text-center">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Let's Work Together
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                Ready to start your journey to mathematical success? Book a free consultation to discuss your goals.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Schedule Your Free Consultation
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

export default About;
