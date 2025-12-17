import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-400/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-400/10 rotate-12 animate-float"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Bálint Göröcs
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up">
            Full-Stack Software Engineer
          </p>
          <p className="text-lg text-gray-400 mb-12 animate-slide-up">
            10+ years of experience building production software
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
          >
            Learn More
          </a>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Bálint Göröcs. All rights reserved.</p>
      </footer>
    </main>
  );
}

