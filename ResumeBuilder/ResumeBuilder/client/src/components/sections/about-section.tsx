import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@assets/WhatsApp Image 2025-06-11 at 10.39.22_3a3aaf8c_1750848346233.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Motivated and detail-oriented Master's student in Data Science with a strong foundation in data analytics, programming, and IT systems. My journey has taken me from India to Germany, where I'm pursuing advanced studies in data science.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Skilled in developing dashboards, analyzing large datasets, and maintaining digital infrastructure. I'm an adaptable team player with experience across research, internships, and student-led initiatives.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Eager to contribute to organizations through a mix of technical acumen, analytical thinking, and proactive problem-solving.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">2+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">4+</div>
                  <div className="text-sm text-slate-400">Major Projects</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src={profileImage} 
              alt="Punith Sai Reddy Gaddam by the lake" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-square" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
