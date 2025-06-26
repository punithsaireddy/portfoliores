export const PERSONAL_INFO = {
  name: "Punith Sai Reddy Gaddam",
  title: "Data Science Master's Student",
  location: "Erlangen, Germany",
  email: "punithsai525@gmail.com",
  phone: "+49 155 606 98238",
  linkedin: "https://linkedin.com/in/punithsai525",
  github: "https://github.com/punithsaireddy"
};

export const SKILLS = [
  { name: "Python", icon: "fab fa-python", color: "text-blue-400", proficiency: 92 },
  { name: "SQL", icon: "fas fa-database", color: "text-orange-400", proficiency: 85 },
  { name: "Power BI", icon: "fas fa-chart-bar", color: "text-yellow-400", proficiency: 88 },
  { name: "PyTorch", icon: "fas fa-fire", color: "text-red-400", proficiency: 80 },
  { name: "Pandas", icon: "fas fa-table", color: "text-green-400", proficiency: 90 },
  { name: "NumPy", icon: "fas fa-calculator", color: "text-blue-500", proficiency: 88 },
  { name: "TensorFlow", icon: "fas fa-brain", color: "text-orange-500", proficiency: 82 },
  { name: "Git", icon: "fab fa-git-alt", color: "text-purple-400", proficiency: 85 }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Controlled Rocket Landing with Double DQN",
    description: "Designed a controlled rocket landing simulation with Reinforcement Learning using Double Deep Q-Network method. Implemented reward-based learning and tested convergence using Gym.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "PyTorch", "Reinforcement Learning"],
    github: "https://github.com/punithsaireddy/rocketlanding-using-ddqn",
    stars: 24,
    forks: 8
  },
  {
    id: 2,
    title: "Streaming Platform KPI Monitor",
    description: "Designed, developed, and deployed a dynamic Power BI dashboard analyzing the Netflix dataset. Created efficient data models with DAX calculations for actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Power BI", "DAX", "Data Visualization"],
    github: "https://github.com/punithsaireddy/NetflixDashboard",
    stars: 18,
    forks: 5
  },
  {
    id: 3,
    title: "Product Review Analysis",
    description: "Performed sentiment analysis on 10,000+ Amazon product reviews using Python and VADER. Applied SQL and pandas for data wrangling and visualization to optimize product descriptions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "VADER", "Sentiment Analysis"],
    github: "https://github.com/punithsaireddy/Product-Review-Analysis",
    stars: 32,
    forks: 12
  },
  {
    id: 4,
    title: "Traffic Sign Alert HUD (Bachelor Thesis)",
    description: "Designed and launched a functional HUD integrating vehicle sensor data to display real-time road sign information. Implemented YOLOv5 object detection on Raspberry Pi, tested in 5 vehicle models.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["YOLOv5", "Raspberry Pi", "Computer Vision"],
    github: "https://github.com/punithsaireddy/HUD-Display",
    stars: 45,
    forks: 15
  }
];

export const WORK_EXPERIENCE = [
  {
    title: "Data Science Intern",
    company: "Verzeo",
    location: "Chennai, India",
    period: "Feb 2023 - May 2023",
    responsibilities: [
      "Performed sentiment analysis on 10,000+ Amazon product reviews using Python and VADER",
      "Applied SQL and pandas for data wrangling and visualization",
      "Delivered insights to optimize product descriptions, improving engagement metrics by 12%"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Indo-Euro Synchronization (IES) Pvt Ltd",
    location: "Remote",
    period: "Mar 2022 - Aug 2022",
    responsibilities: [
      "Built a movie recommendation engine processing 50,000+ user ratings",
      "Applied collaborative filtering and neural networks to increase recommendation accuracy by 18%",
      "Created executive-level insights dashboards"
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Masters in Data Science",
    institution: "Friedrich-Alexander-Universität",
    location: "Erlangen, Germany",
    description: "Currently pursuing advanced studies in data science, focusing on machine learning, statistical analysis, and data engineering."
  },
  {
    degree: "Bachelors in Computer Science",
    institution: "Vellore Institute of Technology",
    location: "Amaravathi, India",
    description: "Completed comprehensive computer science program with focus on programming, algorithms, and software development."
  }
];
