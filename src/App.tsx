import { Button } from "./components/ui/button";
import {
  BookOpen,
  FileText,
  Video,
  Volume2,
  Brain,
  Zap,
  Users,
  CheckCircle,
  Star,
  Play,
  Download,
  ArrowRight,
  Sparkles
} from "lucide-react";

function App() {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Document Analysis",
      description: "Upload PDF, DOCX, and other document formats for instant AI-powered summaries"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video & Audio Processing",
      description: "Extract key insights from YouTube videos, audio files, and video content"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Smart Flashcards",
      description: "Automatically generate flashcards from any content for effective memorization"
    },
    {
      icon: <Volume2 className="h-8 w-8" />,
      title: "Audio Learning",
      description: "Listen to summaries and flashcards with text-to-speech technology"
    }
  ];

  const benefits = [
    "Save hours of study time with AI-generated summaries",
    "Learn from any format: text, video, or audio",
    "Personalized flashcards for better retention",
    "Access your content anywhere, anytime"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Medical Student",
      content: "Studen helped me process my textbooks 10x faster. The flashcards are perfectly tailored to my learning style.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Law Student",
      content: "I can now study from lecture recordings and PDFs seamlessly. The summaries are incredibly accurate.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Computer Science Student",
      content: "The YouTube video summarization feature is a game-changer for technical tutorials.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="w-full p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Studen</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-6xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="h-4 w-4" />
          AI-Powered Study Assistant
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Transform Any Content Into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Smart Study Material</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Upload documents, videos, or audio files and let our AI create personalized summaries and flashcards.
          Study smarter, not harder with Studen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Start Studying for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 group">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Hero Visual */}
        <div className="relative mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl">
                <FileText className="h-12 w-12 text-blue-600 mb-3" />
                <span className="font-semibold text-gray-900">Upload Content</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-purple-50 rounded-xl">
                <Brain className="h-12 w-12 text-purple-600 mb-3" />
                <span className="font-semibold text-gray-900">AI Processing</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
                <Zap className="h-12 w-12 text-green-600 mb-3" />
                <span className="font-semibold text-gray-900">Study Materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Study Effectively
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands multiple content formats and creates the perfect study materials for your learning style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple. Fast. Effective.
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Upload Your Content</h3>
              <p className="text-gray-600 leading-relaxed">
                Drag and drop PDFs, DOCX files, or paste YouTube links. We support audio and video files too.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI extracts key concepts, main ideas, and important details from your content.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Study & Learn</h3>
              <p className="text-gray-600 leading-relaxed">
                Review summaries, practice with flashcards, or listen to audio versions of your materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Studen?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of students who have revolutionized their study habits with AI-powered learning.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Free Trial
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">50,000+</div>
                    <div className="text-sm text-gray-600">Active Students</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">1M+</div>
                    <div className="text-sm text-gray-600">Documents Processed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-8 w-8 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Student Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by Students Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our users have to say about their Studen experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Study Habits?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are already studying smarter with Studen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Studen</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering students worldwide with AI-powered study tools. Learn faster, study smarter, achieve more.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Follow on Twitter
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Join Discord
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Studen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
