import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/lib/constants";
import { Brain, BarChart3, Wrench } from "lucide-react";

export default function SkillsSection() {
  const additionalSkills = [
    {
      title: "Machine Learning",
      icon: Brain,
      color: "text-blue-400",
      skills: ["Artificial Intelligence", "Natural Language Processing", "Deep Learning", "Reinforcement Learning"]
    },
    {
      title: "Data Analytics", 
      icon: BarChart3,
      color: "text-emerald-400",
      skills: ["ETL Pipelines", "Data Cleaning", "Statistical Analysis", "Data Visualization"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-purple-400", 
      skills: ["Microsoft Suite", "Microsoft Excel", "Jupyter Notebooks", "Cloud Platforms"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="skill-card bg-slate-800 border-slate-700 cursor-pointer interactive-btn">
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl mb-4 ${skill.color}`}>
                    <i className={skill.icon}></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                  <div className="mt-2 bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full`}
                    />
                  </div>
                  <span className="text-xs text-slate-400 mt-1">{skill.proficiency}%</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalSkills.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className={`text-xl font-semibold mb-4 ${category.color} flex items-center`}>
                      <IconComponent className="mr-2" size={24} />
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {category.skills.map((skillItem) => (
                        <Badge key={skillItem} variant="secondary" className="mr-2 mb-2">
                          {skillItem}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
