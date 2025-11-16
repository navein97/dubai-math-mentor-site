import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const curricula = [
    {
      title: "Primary Years Programme (PYP)",
      level: "Ages 5-12",
      description: "Building strong mathematical foundations through inquiry-based learning and conceptual understanding.",
      topics: [
        "Number sense and operations",
        "Patterns and sequences",
        "Measurement and geometry",
        "Data handling and statistics",
        "Problem-solving strategies",
      ],
    },
    {
      title: "Middle Years Programme (MYP)",
      level: "Ages 11-16",
      description: "Developing mathematical thinking and connecting concepts across different contexts.",
      topics: [
        "Algebra and expressions",
        "Functions and equations",
        "Geometry and trigonometry",
        "Statistics and probability",
        "Mathematical investigation skills",
      ],
    },
    {
      title: "IB Diploma Programme (IBDP)",
      level: "Ages 16-19",
      description: "Comprehensive preparation for IB Math AA and AI courses at SL and HL levels.",
      topics: [
        "Calculus and analysis",
        "Statistics and probability",
        "Functions and models",
        "Internal Assessment support",
        "Exam preparation strategies",
      ],
    },
    {
      title: "Cambridge IGCSE",
      level: "Ages 14-16",
      description: "Complete coverage of IGCSE Mathematics syllabus with focus on exam techniques.",
      topics: [
        "Number and algebra",
        "Geometry and mensuration",
        "Coordinate geometry",
        "Trigonometry",
        "Vectors and transformations",
      ],
    },
    {
      title: "AS Level Mathematics",
      level: "Ages 16-17",
      description: "First year of A Level preparation covering pure and applied mathematics.",
      topics: [
        "Advanced algebra",
        "Coordinate geometry and calculus",
        "Trigonometry and exponentials",
        "Statistics",
        "Mechanics (if applicable)",
      ],
    },
    {
      title: "A Level Mathematics",
      level: "Ages 17-18",
      description: "Complete A Level preparation including pure, statistics, and mechanics components.",
      topics: [
        "Advanced calculus",
        "Complex numbers",
        "Differential equations",
        "Hypothesis testing",
        "Advanced mechanics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Curricula & Services
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive tutoring across all major international mathematics curricula
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <BookOpen className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tailored Tutoring for Every Level
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're starting your mathematical journey or preparing for advanced exams, 
              I provide personalized instruction that adapts to your curriculum, learning style, and goals.
            </p>
          </div>

          {/* Curriculum Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {curricula.map((curriculum, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl text-foreground">{curriculum.title}</CardTitle>
                    <span className="text-sm font-semibold text-secondary bg-accent px-3 py-1 rounded-full">
                      {curriculum.level}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{curriculum.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {curriculum.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What's Included in Every Session
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Personalized lesson plans",
              "Homework and assignment support",
              "Exam preparation and practice",
              "Progress tracking and feedback",
              "Study materials and resources",
              "Flexible scheduling options",
              "Online or in-person sessions",
              "Parent progress reports",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-success-foreground" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
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
                Find the Right Program for You
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                Not sure which curriculum or level you need? Let's discuss your specific requirements 
                during a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
