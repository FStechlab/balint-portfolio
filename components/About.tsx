"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>
              I am a <span className="text-blue-400 font-semibold">Full-Stack Software Engineer</span> with{" "}
              <span className="text-purple-400 font-semibold">10 years</span> of hands-on experience building and
              running production software. Much of my career has been spent at IT consulting and software services
              companies, which has given me the opportunity to work across a wide variety of client projects and
              industries, including enterprise systems, SaaS products, fintech platforms, healthcare applications, and
              e-commerce solutions. This exposure has built a strong, practical understanding of how different
              organizations approach scalability, security, and long-term reliability.
            </p>

            <p>
              My work spans both backend and frontend development. On the backend, I design and implement APIs,
              microservices, and cloud-based systems that perform reliably under real production traffic. On the
              frontend, I build modern, user-focused web interfaces, working closely with designers to deliver
              responsive, maintainable, and intuitive user experiences that integrate cleanly with backend services.
            </p>

            <p>
              I'm comfortable working in remote and distributed teams, collaborating with product managers, designers,
              and other engineers to translate business requirements into well-engineered solutions. I value clear
              communication, ownership, and pragmatic decision-making, and I focus on building software that remains
              stable, maintainable, and valuable long after it goes live.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

