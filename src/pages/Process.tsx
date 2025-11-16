import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Target, Calendar, TrendingUp, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Process = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-secondary" />,
      title: "Initial Assessment",
      description: "We begin with a free consultation and diagnostic assessment to understand your current level, learning style, and goals.",
      details: [
        "Comprehensive skills evaluation",
        "Discussion of academic goals",
        "Identification of strengths and areas for improvement",
        "Understanding of curriculum requirements",
      ],
    },
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Personalized Plan",
      description: "Based on the assessment, I create a customized learning plan tailored to your specific needs and objectives.",
      details: [
        "Custom curriculum aligned with your syllabus",
        "Clear learning objectives and milestones",
        "Flexible pacing based on progress",
        "Integration with school coursework",
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8 text-secondary" />,
      title: "Regular Sessions",
      description: "Engaging, structured lessons that build understanding through clear explanations, practice, and real-world applications.",
      details: [
        "Concept explanation and examples",
        "Guided practice and problem-solving",
        "Interactive learning activities",
        "Homework and assignment support",
      ],
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-secondary" />,
      title: "Progress Tracking",
      description: "Continuous monitoring of your development with regular feedback and adjustments to ensure optimal progress.",
      details: [
        "Regular assessments and quizzes",
        "Progress reports for parents",
        "Plan adjustments as needed",
        "Celebration of achievements",
      ],
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Exam Preparation",
      description: "Focused preparation for upcoming exams with practice papers, exam techniques, and confidence-building strategies.",
      details: [
        "Past paper practice",
        "Exam technique workshops",
        "Time management strategies",
        "Stress management and confidence building",
      ],
    },
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Flexible Scheduling",
      description: "Sessions scheduled at times that work for you, with options for both online and in-person tutoring.",
      details: [
        "Flexible timing (evenings and weekends)",
        "Online or face-to-face options",
        "Regular sessions or intensive courses",
        "Easy rescheduling when needed",
      ],
    },
  ];

  const formats = [
    {
      title: "One-on-One Tutoring",
      description: "Individual attention focused entirely on your learning needs",
      features: ["Fully personalized lessons", "Flexible pacing", "Maximum attention", "Customized materials"],
    },
    {
      title: "Small Group Sessions",
      description: "Learn alongside peers with similar goals (max 3 students)",
      features: ["Collaborative learning", "Peer motivation", "Cost-effective", "Social interaction"],
    },
    {
      title: "Intensive Exam Prep",
      description: "Focused courses before major exams",
      features: ["Comprehensive revision", "Past paper practice", "Exam strategies", "Quick results"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            How It Works
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            A structured, proven approach to help you achieve mathematical excellence
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        <span className="text-sm font-semibold text-muted-foreground">
                          Step {index + 1}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-secondary mt-1">•</span>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Session Formats */}
      <section className="py-16 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Choose Your Learning Format
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {formats.map((format, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{format.title}</h3>
                  <p className="text-muted-foreground mb-4">{format.description}</p>
                  <ul className="space-y-2">
                    {format.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What to Expect from Sessions
          </h2>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-4">Session Structure</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• Review of previous topics (5-10 min)</li>
                    <li>• New concept introduction (15-20 min)</li>
                    <li>• Guided practice (15-20 min)</li>
                    <li>• Independent problem-solving (10-15 min)</li>
                    <li>• Summary and homework assignment (5 min)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-4">Learning Resources</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• Customized lesson notes</li>
                    <li>• Practice worksheets</li>
                    <li>• Past exam papers</li>
                    <li>• Online learning tools</li>
                    <li>• Video explanations (when helpful)</li>
                  </ul>
                </div>
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
                Ready to Get Started?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                Book your free consultation to discuss your needs and see how this approach can work for you.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Schedule Free Consultation
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

export default Process;
