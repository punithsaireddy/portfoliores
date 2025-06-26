import { motion } from "framer-motion";
import { Download, ArrowDown, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";
import profileImage from "@assets/WhatsApp Image 2025-06-11 at 10.39.22_3a3aaf8c_1750848346233.jpg";
import laptopBackground from "@assets/image_1750848016386.png";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Punith_Sai_Reddy_Gaddam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative hero-bg">
      {/* Animated laptop background overlay */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={laptopBackground} 
          alt="Modern laptop with colorful screen" 
          className="w-full h-full object-cover animate-pulse-slow" 
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={profileImage}
              alt="Punith Sai Reddy Gaddam"
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-400 shadow-2xl object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            {PERSONAL_INFO.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-4 font-medium"
          >
            {PERSONAL_INFO.title}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-slate-400 mb-8 flex items-center justify-center"
          >
            <MapPin className="mr-2 text-blue-400" size={20} />
            {PERSONAL_INFO.location}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold interactive-btn morphing-btn"
              >
                <Download className="mr-2 relative z-10" size={20} />
                <span className="relative z-10">Download Resume</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant="outline"
                asChild
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold interactive-btn morphing-btn"
              >
                <a href="#projects">
                  <span className="relative z-10">View My Work</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Social icons - moved below buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8"
        >
          <div className="flex justify-center space-x-6">
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/80 interactive-btn"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/80 interactive-btn"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-300 hover:text-blue-400 transition-colors p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/80 interactive-btn"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-slate-400" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
