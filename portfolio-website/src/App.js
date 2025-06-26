import React from 'react';
import './App.css';

const profileImg = process.env.PUBLIC_URL + '/WhatsApp Image 2025-06-11 at 10.39.22_3a3aaf8c.jpg';
const laptopBg = process.env.PUBLIC_URL + '/Screenshot 2025-06-25 123634.png';
const resumePdf = process.env.PUBLIC_URL + '/genaral.pdf';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Languages', href: '#languages' },
  { name: 'Contact', href: '#contact' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white">
      {/* Topbar Navigation */}
      <nav className="w-full flex justify-center items-center py-4 bg-slate-900/80 shadow-lg sticky top-0 z-50">
        <ul className="flex gap-6 md:gap-10 text-lg font-semibold">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-cyan-400 transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 pt-12 pb-20" style={{backgroundImage: `url(${laptopBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center">
          <img src={profileImg} alt="Profile" className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-xl mb-6 object-cover" />
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-move text-center drop-shadow-lg">Punith Sai Reddy Gaddam</h1>
          <p className="mt-2 text-lg md:text-xl text-cyan-200 font-medium text-center">Data Science Master's Student</p>
          <div className="flex gap-4 mt-4">
            <a href={resumePdf} download className="px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 font-bold shadow transition">Download Resume</a>
            <a href="#projects" className="px-6 py-2 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-400 font-bold shadow transition">View My Work</a>
          </div>
          <div className="flex gap-6 mt-6 text-2xl">
            <a href="https://www.linkedin.com/in/punith-sai-reddy-gaddam/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><i className="fa-brands fa-linkedin-in" /></a>
            <a href="https://github.com/punithsaireddy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><i className="fa-brands fa-github" /></a>
            <a href="mailto:punithsai525@gmail.com" className="hover:text-cyan-400"><i className="fa-solid fa-envelope" /></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-move">About Me</h2>
          <p className="text-lg text-slate-200 mb-4">Motivated and detail-oriented Master's student in Data Science with a strong foundation in data analytics, programming, and IT systems. My journey has taken me from India to Germany, where I'm pursuing advanced studies in data science.</p>
          <p className="text-lg text-slate-200 mb-4">Skilled in developing dashboards, analyzing large datasets, and maintaining digital infrastructure. I'm an adaptable team player with experience across research, internships, and student-led initiatives.</p>
          <p className="text-lg text-slate-200">Eager to contribute to organizations through a mix of technical acumen, analytical thinking, and proactive problem-solving.</p>
          <div className="flex gap-8 mt-8">
            <div className="bg-slate-800 rounded-xl px-8 py-6 text-center shadow">
              <div className="text-3xl font-extrabold text-cyan-400">2+</div>
              <div className="text-slate-300 mt-1">Years Experience</div>
            </div>
            <div className="bg-slate-800 rounded-xl px-8 py-6 text-center shadow">
              <div className="text-3xl font-extrabold text-fuchsia-400">4+</div>
              <div className="text-slate-300 mt-1">Major Projects</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={profileImg} alt="Profile" className="w-80 max-w-full rounded-2xl shadow-2xl object-cover" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-move text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-xl p-6 shadow flex flex-col items-center">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Programming</h3>
            <ul className="text-slate-200 space-y-1 text-center">
              <li>Python</li>
              <li>R</li>
              <li>SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow flex flex-col items-center">
            <h3 className="text-xl font-bold text-fuchsia-400 mb-2">Data Science</h3>
            <ul className="text-slate-200 space-y-1 text-center">
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Data Visualization</li>
              <li>Statistics</li>
            </ul>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow flex flex-col items-center">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Tools</h3>
            <ul className="text-slate-200 space-y-1 text-center">
              <li>Power BI</li>
              <li>Git</li>
              <li>Linux</li>
              <li>Jupyter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-move text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example project card, repeat for each project */}
          <div className="bg-slate-800 rounded-xl p-6 shadow flex flex-col">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Controlled Rocket Landing with Double DQN</h3>
            <p className="text-slate-200 mb-2">Designed a controlled rocket landing simulation with Reinforcement Learning using Double Deep Q-Network method. Implemented reward-based learning and tested convergence using Gym.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-xs">Python</span>
              <span className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-xs">PyTorch</span>
              <span className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-xs">Reinforcement Learning</span>
            </div>
            <a href="https://github.com/punithsaireddy/rocketlanding-using-ddqn" target="_blank" rel="noopener noreferrer" className="mt-auto text-cyan-400 hover:underline">View on GitHub</a>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow flex flex-col">
            <h3 className="text-xl font-bold text-fuchsia-400 mb-2">Streaming Platform KPI Monitor</h3>
            <p className="text-slate-200 mb-2">Designed, developed, and deployed a dynamic Power BI dashboard analyzing the Netflix dataset. Created efficient data models with DAX calculations for actionable insights.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-fuchsia-900 text-fuchsia-200 px-2 py-1 rounded text-xs">Power BI</span>
              <span className="bg-fuchsia-900 text-fuchsia-200 px-2 py-1 rounded text-xs">DAX</span>
              <span className="bg-fuchsia-900 text-fuchsia-200 px-2 py-1 rounded text-xs">Data Visualization</span>
            </div>
            <a href="https://github.com/punithsaireddy/NetflixDashboard" target="_blank" rel="noopener noreferrer" className="mt-auto text-fuchsia-400 hover:underline">View on GitHub</a>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow flex flex-col">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Intrusion Detection with Ensemble-Based Anomaly Detection</h3>
            <p className="text-slate-200 mb-2">Enhanced system security by improving anomaly detection through system logs data using unsupervised learning and ensemble techniques, increasing accuracy from 81.7% to 92.3%.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-yellow-900 text-yellow-200 px-2 py-1 rounded text-xs">Python</span>
              <span className="bg-yellow-900 text-yellow-200 px-2 py-1 rounded text-xs">Anomaly Detection</span>
              <span className="bg-yellow-900 text-yellow-200 px-2 py-1 rounded text-xs">Ensemble</span>
            </div>
            <a href="https://github.com/punithsaireddy/Product-Review-Analysis" target="_blank" rel="noopener noreferrer" className="mt-auto text-yellow-300 hover:underline">View on GitHub</a>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow flex flex-col">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Bachelor Thesis: Display of a Traffic Sign Alert on the windshield (HUD)</h3>
            <p className="text-slate-200 mb-2">Designed and launched a functional HUD that integrates vehicle sensor data to display real-time road sign information, now tested in 5 vehicle models. Implemented YOLOv5 object detection on a Raspberry Pi.</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-xs">YOLOv5</span>
              <span className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-xs">Raspberry Pi</span>
              <span className="bg-cyan-900 text-cyan-200 px-2 py-1 rounded text-xs">Computer Vision</span>
            </div>
            <a href="https://github.com/punithsaireddy/HUD-Display" target="_blank" rel="noopener noreferrer" className="mt-auto text-cyan-400 hover:underline">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-move text-center">Experience & Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Work Experience</h3>
            <ul className="text-slate-200 space-y-2">
              <li>
                <span className="font-semibold">Intern, Data Science</span> – Company Name (2023 - Present)
                <br />Worked on ML models, data pipelines, and dashboards.
              </li>
              <li>
                <span className="font-semibold">Student Researcher</span> – University Name (2022 - 2023)
                <br />Assisted in research on deep learning and analytics.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-fuchsia-400 mb-2">Education</h3>
            <ul className="text-slate-200 space-y-2">
              <li>
                <span className="font-semibold">Masters in Data Science</span> – FAU Erlangen, Germany (2023 - Present)
              </li>
              <li>
                <span className="font-semibold">Bachelors in Computer Science</span> – VIT Amaravathi, India (2019 - 2023)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-move text-center">Languages</h2>
        <ul className="flex flex-wrap gap-8 justify-center text-lg">
          <li className="bg-slate-800 rounded-xl px-8 py-4 shadow text-cyan-400 font-bold">English <span className="text-slate-300 font-normal">(C1 Level)</span></li>
          <li className="bg-slate-800 rounded-xl px-8 py-4 shadow text-fuchsia-400 font-bold">German <span className="text-slate-300 font-normal">(A2 Level)</span></li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-move text-center">Contact</h2>
        <form className="bg-slate-800 rounded-xl p-8 shadow flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input type="text" placeholder="Your Name" className="flex-1 px-4 py-3 rounded bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input type="email" placeholder="Your Email" className="flex-1 px-4 py-3 rounded bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <textarea placeholder="Your Message" rows={4} className="px-4 py-3 rounded bg-slate-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <button type="submit" className="self-end px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-bold text-slate-900 shadow hover:from-fuchsia-400 hover:to-yellow-300 transition">Send Message</button>
        </form>
        <div className="flex gap-6 mt-8 justify-center text-2xl">
          <a href="https://www.linkedin.com/in/punith-sai-reddy-gaddam/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><i className="fa-brands fa-linkedin-in" /></a>
          <a href="https://github.com/punithsaireddy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><i className="fa-brands fa-github" /></a>
          <a href="mailto:punithsai525@gmail.com" className="hover:text-cyan-400"><i className="fa-solid fa-envelope" /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 py-8 text-sm">
        &copy; {new Date().getFullYear()} Punith Sai Reddy Gaddam. All rights reserved.
      </footer>

      {/* Tailwind animated gradient keyframes */}
      <style>{`
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 6s ease-in-out infinite alternate;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
