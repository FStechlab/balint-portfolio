"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Phone, MapPin, Mail, ArrowUpRight, Sparkles } from "lucide-react";

const contactInfo = [
  {
    icon: Github,
    label: "GitHub",
    value: "FStechlab",
    href: "https://github.com/FStechlab",
    gradient: "from-gray-400 via-gray-500 to-gray-600",
    bgGradient: "from-gray-500/20 via-gray-600/20 to-gray-700/20",
    borderColor: "border-gray-500/50",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Bálint Göröcs",
    href: "https://www.linkedin.com/in/b%C3%A1lint-g%C3%B6r%C3%B6cs",
    gradient: "from-blue-400 via-blue-500 to-blue-600",
    bgGradient: "from-blue-500/20 via-blue-600/20 to-blue-700/20",
    borderColor: "border-blue-500/50",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+36 31 190 0530",
    href: "tel:+36 31 190 0530",
    gradient: "from-green-400 via-emerald-500 to-green-600",
    bgGradient: "from-green-500/20 via-emerald-600/20 to-green-700/20",
    borderColor: "border-green-500/50",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Budapest, Hungary",
    href: "https://www.google.com/maps/place/Budapest",
    gradient: "from-red-400 via-rose-500 to-red-600",
    bgGradient: "from-red-500/20 via-rose-600/20 to-red-700/20",
    borderColor: "border-red-500/50",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center justify-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-400 text-lg">Let's connect and build something amazing together</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative rounded-2xl p-6 border overflow-hidden bg-gradient-to-br ${contact.bgGradient} ${contact.borderColor} hover:border-opacity-100 transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.2 } }}
              >
                {/* Animated background pattern */}
                <div 
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`p-4 rounded-xl bg-gradient-to-br ${contact.gradient} text-white shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={28} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1 font-medium">{contact.label}</p>
                      <p className="text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5, y: -5 }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Hover effect gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <p className="text-gray-300">
              Feel free to reach out! I'm always open to discussing{" "}
              <span className="text-purple-400 font-medium">new opportunities</span> and{" "}
              <span className="text-blue-400 font-medium">interesting projects</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

