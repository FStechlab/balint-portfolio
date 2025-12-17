"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe } from "lucide-react";

// Helper function to get the correct image path with basePath
// This should match the repositoryName in next.config.mjs
const getImagePath = (path: string): string => {
  // In production (GitHub Pages), include the basePath
  // In development, basePath is empty
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    const basePath = isGitHubPages ? '/balint-portfolio' : '';
    return `${basePath}${path}`;
  }
  // Server-side/build time: use production basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/balint-portfolio' : '';
  return `${basePath}${path}`;
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Deuka Companion",
      domain: "B2B E-commerce",
      description: "A comprehensive B2B e-commerce platform for pet food and animal nutrition products. Features include advanced inventory management, customer portal, and order processing system.",
      websiteUrl: "https://www.deuka-companion.com/",
      imageUrl: "/images/duka.png",
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    },
    {
      title: "Aligneurs Français",
      domain: "Healthcare",
      description: "Healthcare platform specializing in orthodontic aligners. Built with patient management, appointment scheduling, and treatment tracking capabilities.",
      websiteUrl: "https://www.aligneursfrancais.com/",
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    },
    {
      title: "Bati Consult",
      domain: "Marketplace SaaS",
      description: "SaaS marketplace platform connecting construction professionals with clients. Includes project management, bidding system, and payment processing.",
      websiteUrl: "https://bati-consult.fr/",
      gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    },
    {
      title: "Coconut Stock",
      domain: "E-commerce / Product Sales",
      description: "Modern e-commerce platform for product sales with integrated shopping cart, payment gateway, and inventory management. Focus on user experience and conversion optimization.",
      websiteUrl: "https://coconutstock.com/",
      imageUrl: "/images/Conconut.png",
      gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    },
    {
      title: "Zorginfo",
      domain: "Healthcare SaaS",
      description: "Healthcare SaaS solution providing information management and patient care coordination. Features include secure data handling, reporting, and integration capabilities.",
      websiteUrl: "https://www.zorginfo.com/",
      imageUrl: "/images/zorginfo.png",
      gradient: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    },
    {
      title: "Diamant Software",
      domain: "Enterprise / Finance",
      description: "Enterprise finance software solution with advanced reporting, analytics, and financial management tools. Designed for large-scale operations with high security standards.",
      websiteUrl: "https://www.diamant-software.de/",
      gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Past Projects
          </motion.h2>
          <p className="text-gray-400 text-lg">Showcasing my work and contributions</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.2 } }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Project Image */}
                <div className={`h-48 mb-6 bg-gradient-to-br ${project.gradient} rounded-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  <img
                    src={project.imageUrl ? getImagePath(project.imageUrl) : `https://image.thum.io/get/width/800/crop/600/${project.websiteUrl}`}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to gradient background with project name if image fails to load
                      console.error(`Failed to load image for ${project.title}:`, project.imageUrl);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded image for ${project.title}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent hidden flex-col items-center justify-center text-white">
                    <Globe className="w-12 h-12 mb-2 opacity-50" />
                    <span className="text-sm font-semibold opacity-75">{project.title}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
                    {project.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium">
                    {project.domain}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{project.description}</p>
                
                <motion.a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white transition-all w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={18} />
                  <span className="text-sm font-medium">Visit Website</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

