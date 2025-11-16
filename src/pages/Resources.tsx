import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resources = () => {
  const blogPosts = [
    {
      title: "10 Essential Study Tips for IB Math Success",
      excerpt: "Proven strategies to help you master IB Mathematics and achieve your target grade.",
      category: "Study Tips",
      readTime: "5 min read",
    },
    {
      title: "Understanding IGCSE Math: A Complete Guide",
      excerpt: "Everything you need to know about the IGCSE Mathematics syllabus and exam format.",
      category: "Curriculum Guide",
      readTime: "8 min read",
    },
    {
      title: "Common Mistakes in A Level Math Exams",
      excerpt: "Learn about the most frequent errors students make and how to avoid them.",
      category: "Exam Prep",
      readTime: "6 min read",
    },
    {
      title: "How to Tackle the IB Math Internal Assessment",
      excerpt: "Step-by-step guide to planning and executing a high-scoring IA project.",
      category: "IB Specific",
      readTime: "10 min read",
    },
    {
      title: "Building Mathematical Confidence in Young Learners",
      excerpt: "Strategies for parents to support their children's mathematical development.",
      category: "Parenting Tips",
      readTime: "7 min read",
    },
    {
      title: "Exam Stress Management for Math Students",
      excerpt: "Practical techniques to stay calm and perform your best under pressure.",
      category: "Wellbeing",
      readTime: "5 min read",
    },
    {
      title: "Choosing Between Math AA and Math AI in IB",
      excerpt: "A comprehensive comparison to help you select the right IB Math course.",
      category: "IB Specific",
      readTime: "8 min read",
    },
  ];

  const downloadables = [
    {
      title: "Formula Sheet - IGCSE Mathematics",
      type: "PDF",
      icon: <FileText className="h-6 w-6 text-secondary" />,
    },
    {
      title: "A Level Calculus Practice Problems",
      type: "PDF",
      icon: <FileText className="h-6 w-6 text-secondary" />,
    },
    {
      title: "IB Math IA Topic Ideas",
      type: "PDF",
      icon: <FileText className="h-6 w-6 text-secondary" />,
    },
    {
      title: "Exam Preparation Checklist",
      type: "PDF",
      icon: <FileText className="h-6 w-6 text-secondary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Learning Resources
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Free study materials, tips, and insights to support your mathematical journey
          </p>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-12 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-lg text-foreground mb-2">Blog Articles</h3>
                <p className="text-sm text-muted-foreground">Study tips and exam strategies</p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-lg text-foreground mb-2">Downloadables</h3>
                <p className="text-sm text-muted-foreground">Free worksheets and resources</p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardContent className="pt-6">
                <Video className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-lg text-foreground mb-2">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Latest Articles & Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-secondary bg-accent px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg text-foreground">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Free Download Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {downloadables.map((resource, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">{resource.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{resource.title}</h3>
                      <p className="text-xs text-muted-foreground">{resource.type}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              More resources added regularly. Sign up for updates!
            </p>
            <Link to="/contact">
              <Button variant="outline">Subscribe to Newsletter</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Quick Study Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Practice Regularly",
                desc: "Consistency is key - even 20 minutes daily is better than cramming before exams.",
              },
              {
                title: "Understand, Don't Memorize",
                desc: "Focus on understanding concepts rather than memorizing formulas.",
              },
              {
                title: "Use Past Papers",
                desc: "Practice with real exam questions to familiarize yourself with the format.",
              },
              {
                title: "Ask Questions",
                desc: "Never hesitate to ask when you don't understand something.",
              },
              {
                title: "Show Your Working",
                desc: "Always show your steps - it helps you think clearly and earns partial credit.",
              },
              {
                title: "Review Mistakes",
                desc: "Learn from errors - they're your best teachers for improvement.",
              },
            ].map((tip, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
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
                Need Personalized Help?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                While these resources are helpful, nothing beats personalized tutoring tailored to your specific needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Book Your Free Consultation
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

export default Resources;
