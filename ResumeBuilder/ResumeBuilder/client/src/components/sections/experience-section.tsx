import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import { WORK_EXPERIENCE, EDUCATION } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-blue-400 flex items-center"
            >
              <Briefcase className="mr-2" />
              Work Experience
            </motion.h3>
            
            <div className="space-y-8 relative border-l-2 border-blue-400 ml-6">
              {WORK_EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="timeline-item relative pl-8"
                >
                  <Card className="bg-slate-800 border-slate-700 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                        <Badge variant="outline" className="text-slate-400 border-slate-600">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-blue-400 font-medium mb-3">
                        {exp.company} • {exp.location}
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-emerald-400 flex items-center"
            >
              <GraduationCap className="mr-2" />
              Education
            </motion.h3>
            
            <div className="space-y-8 relative border-l-2 border-emerald-400 ml-6">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="timeline-item relative pl-8"
                >
                  <Card className="bg-slate-800 border-slate-700 shadow-lg">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">{edu.degree}</h4>
                      <p className="text-emerald-400 font-medium mb-3">
                        {edu.institution} • {edu.location}
                      </p>
                      <p className="text-slate-300">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Leadership & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                <Users className="mr-2" />
                Leadership Experience
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white">Internet of Things (Club) - Founding Member</h4>
                  <p className="text-sm text-slate-400">Sep 2019 - Jan 2023</p>
                  <p className="text-slate-300 mt-2">
                    Managed social media, engaged students in activities, and coordinated with other clubs as a founding member.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-400 flex items-center">
                <Award className="mr-2" />
                Certifications
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white">Full Stack Data Science</h4>
                  <p className="text-sm text-slate-400">Naresh I Technologies • Oct 2023 - Mar 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Languages</h4>
                  <p className="text-slate-300">English (C1 Level), German (A2 Level)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
