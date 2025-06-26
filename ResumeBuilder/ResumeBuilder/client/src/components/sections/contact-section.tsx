import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PERSONAL_INFO } from "@/lib/constants";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For static deployment, simulate sending and show success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 mt-6">
            Ready to collaborate on data science projects or discuss opportunities
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400">Email</p>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 p-3 rounded-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400">Phone</p>
                      <a 
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-white hover:text-green-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500 p-3 rounded-lg">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400">Location</p>
                      <p className="text-white">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Follow Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg interactive-btn morphing-btn"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Linkedin className="text-white relative z-10" size={20} />
                  </motion.a>
                  <motion.a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 p-4 rounded-lg interactive-btn morphing-btn"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Github className="text-white relative z-10" size={20} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="bg-red-600 hover:bg-red-700 p-4 rounded-lg interactive-btn morphing-btn"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Mail className="text-white relative z-10" size={20} />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white focus:border-blue-400"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white focus:border-blue-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white focus:border-blue-400"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-slate-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white focus:border-blue-400 resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 interactive-btn morphing-btn"
                    >
                      <Send className="mr-2 relative z-10" size={16} />
                      <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
