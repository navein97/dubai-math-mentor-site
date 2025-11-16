import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Users, TrendingUp, BookOpen, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const curricula = [
    { name: "PYP", desc: "Primary Years Programme" },
    { name: "MYP", desc: "Middle Years Programme" },
    { name: "IBDP", desc: "IB Diploma Programme" },
    { name: "IGCSE", desc: "Cambridge IGCSE" },
    { name: "AS Level", desc: "Advanced Subsidiary" },
    { name: "A Level", desc: "Advanced Level" },
  ];

  const features = [
    {
      icon: <Target className="h-6 w-6 text-secondary" />,
      title: "Personalized Learning",
      desc: "Tailored lessons designed for each student's unique learning style and pace."
    },
    {
      icon: <Users className="h-6 w-6 text-secondary" />,
      title: "Expert Guidance",
      desc: "Years of experience teaching IB, Cambridge, and international curricula."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-secondary" />,
      title: "Proven Results",
      desc: "Track record of helping students achieve top grades and exam success."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-secondary" />,
      title: "Comprehensive Coverage",
      desc: "From basic concepts to advanced topics, exam prep to homework support."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-primary-foreground px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Professional Math Tutoring in JLT, Dubai</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Expert Math Tutoring in JLT
              <span className="block text-secondary mt-2">From PYP to A Level</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Unlock your mathematical potential with personalized tutoring tailored to your curriculum. 
              Specializing in IB, Cambridge, and international programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curricula Strip */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {curricula.map((curr) => (
              <div key={curr.name} className="text-center">
                <div className="font-bold text-lg text-primary">{curr.name}</div>
                <div className="text-xs text-muted-foreground">{curr.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose JLT Math Tutor?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining expertise, experience, and a passion for teaching to help students excel in mathematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Students Tutored</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Exam Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/90 border-none">
            <CardContent className="py-12 text-center">
              <GraduationCap className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Excel in Mathematics?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Book your free consultation today and discover how personalized tutoring can transform your mathematical journey.
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

export default Home;
