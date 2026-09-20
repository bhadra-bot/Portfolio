export const personalInfo = {
  name: "Bhadra Sreelatha",
  email: "ae22b010@smail.iitm.ac.in",
  institution: "Indian Institute of Technology Madras (IIT M)",
  location: "Chennai, India",
  program: "Pursuing 5th year in B.Tech + M.Tech, Aerospace Engineering",
  expectedGraduation: "2027",
  cgpa: "9.20/10",
  bio: "I am a final year aerospace engineering student, avidly interested in the areas of aero-engines and flows. I am very interested in using visualization techniques to study the evolution of flow behavior. I am deeply interested in the intersection of modeling and experiments, using mathematical models to predict what we observe experimentally. I have been using experimental techniques such as PIV and chemiluminescence imaging to understand flow patterns during transitions to instability in a turbulent combustor. I have extensively worked on the experimental study and modeling of transition and mitigation of instability in thermoacoustic systems. In the Laboratory of Space Utilization at Hokkaido University, I studied microgravity combustion phenomena, which is vital for fire-safety improvement in the International Space Station. Ultimately, I am interested in improving our understanding of fluid physics in aerospace to build safer, more reliable, and efficient systems that fly. I also use nonlinear mdoels to model complex systems and replicate experimentally observed phenomena. My research interests can be summarized as:",
  // NEW: Add your bullet points here!
  interests: [
    "Flow visualization techniques",
    "Effieciency and performance of propulsion & combustion engineering",
    "Thermoacoustic instabilities",
    "Combustion phenomena modelling",
    "Aerodynamics, Aeroacoustics, Aeroelasicity",
    "Nonlinear modelling"
  ]
};

export const education = [
  {
    institution: "Indian Institute of Technology Madras (IIT M)",
    location: "Chennai, India",
    degree: "B.Tech + M.Tech, Aerospace Engineering",
    year: "Expected: 2027",
    cgpa: "9.20/10" // <-- Added CGPA back here
  }
];
export const publications = [
  {
    title: "Auxiliary-variable driven tipping under shock in a thermoacoustic system",
    authors: "Bhadra Sreelatha, Rohit Radhakrishnan, R. I. Sujith",
    venue: "Manuscript under review in Chaos: An Interdisciplinary journal of Nonlinear Science",
    details: "(Shock-induced tipping in a thermoacoustic system, arXiv:2603.14237)"
  },
  {
    title: "Experimental investigation of shock-induced tipping in a thermoacoustic system",
    authors: "Bhadra Sreelatha, Rohit Radhakrishnan, R. I. Sujith",
    venue: ["79th Annual Meeting of the APS Division of Dluid Dynamics 2026 [Poster]",
      "International Conference on Vibro-acoustics and Mechano-materials (ICVAM) 2026 [Oral]", 
    "Conference on Nonlinear Systems and Dynamics (CNSD) 2026 [Poster]", 
    "Inter Group Meeting (IGM) 2026 [IIT Bombay, Oral, session chair]"]
  }
];
export const experience = [
  {
    role: "Undergraduate Researcher",
    lab: "CoE- CTCS, IIT Madras",
    pi: "Dr. R. I. Sujith, Institute Chair Professor",
    title: "Thermoacoustic Instabilities & Transition Routes",
    duration: "Nov 2023 - Present",
    points: [
      "Pattern formation during smooth and abrupt transition to instability in turbulent combustors.",
      "Shock-induced tipping in a prototypical laminar thermoacoustic system: Rijke Tube.",
      "Study of hysteresis during subcritical Hopf bifurcation to thermoacoustic instability in a laminar thermoacoustic system."
    ]
  },
  {
    role: "Research Intern",
    lab: "Laboratory of Space Utilization, Hokkaido University, Japan",
    pi: "Asst.Prof. Yusuke Konno",
    title: "Reproduction of low-gravity combustion using decompression environment",
    duration: "May - Aug 2026",
    points: [
      "Conducted experiments on a vaccum sealed chamber to study diffusion flame shapes in microgravity condition suing a low pressure surrogate for varying oxygen concentrations. Existing models of flame behvaiour study does not feature a combination of pressure and oxygen concentration effects, I extended the Roper flame model using the Chapman-Enskog theory and succesfully predicted flame shape behavior under low-pressure and varying oxygen concnetraitons using one model"
    ]
  },
  
  {
    role: "Research Intern",
    lab: "Liquid Propulsion Systems Centre, ISRO",
    pi: "Mr. Aadithya Vijayakumar",
    title: "Mitigation of high frequency instability in rocket propulsion",
    duration: "June - July 2024",
    points: [
      "Modeled and analyzed the efficiency of Helmholtz and Quincke resonators on rocket propellant feed systems to diagnose flow stability risks and mitigate high-frequency instabilities."
    ]
  },

  {
    role: "Industrial Research Intern",
    lab: "Kinben Innovation Pvt. Ltd.",
    duration: "May 2025 - July 2025",
    points: [
      "Engineered EKF-based trajectory reconstruction for pipelines in GPS-denied environments and modeled inspection gauge dynamics via CFD to detect structural anomalies."
    ]
  },
];

export const engineeringProjects = [
  
  {
    title: "Autonomous drone project, SUAS 2025",
    org: "Guidance, Navigation & Controls Lab",
    guide: "Dr. Satadal Ghosh",
    duration: "May 2024 - June 2025",
    description: "Developed and simulated a fully autonomous, vision-equipped UAV using the ROS framework and ArduPilot for the Student Unmanned Aerial Systems mission.",
    images: [
      "/suas-1.jpeg", 
      "/suas-2.jpeg"
    ]
  },
  
  {
    title: "Student Rocketry Team - Spaceport America Cup 2024",
    org: "Centre for Innovation, IIT M",
    guide: "Dr. Satya Chakravarthy",
    duration: "May 2023 - June 2024",
    description: "Engineered India's first SRAD hybrid rocket engine and simulated recovery parachute dynamics for a 10,000 ft altitude deployment.",
    images: [
      "/rocket-1.jpeg", 
      "/rocket-2.jpeg"
    ]
  },
  {
    title: "Unmanned fixed-wing aircraft project, Design of UAVs",
    org: "Department of Aerospace Engineering, IIT M",
    guide: "Dr. HSN Murthy",
    duration: "Jan 2025 - Jan 2026",
    // Summarized into one powerful sentence
    description: "Engineered, manufactured, and flight-tested a long-endurance fixed-wing UAV from raw composites to final assembly for maritime rescue operations.",
    // Image paths (make sure to use the /Portfolio prefix for GitHub Pages)
    images: [
      "/uav-1.jpeg", 
      "/uav-2.jpeg"
    ]
  }
];

export const skills = {
  programming: ["Python", "MATLAB", "Octave", "C++", "SIMULINK"],
  cfd: ["OpenFOAM", "ANSYS"],
  modelling: ["Fusion-360", "Ansys", "AutoCAD"],
  electronicSystems: ["Eagle", "KiCad", "Arduino", "EasyEDA"],
  practices: ["LaTeX", "Github", "MS Office"]
};

export const coursework = [
  {
    course: "Combustion & Flow Diagnostics (Ongoing)",
    title: "",
    guide: "Prof. R. I. Sujith",
    desc: "Developing Schlieren-based diagnostics to extract burner flame geometry & dynamic response to flow perturbations"
  },
  {
    course: "Acoustic Instabilities in Aerospace Propulsion",
    title: "", // Left blank as the course itself is the project topic
    guide: "Prof. R. I. Sujith",
    desc: "Generated phase space, recurrence plots & complex network plot during instability in turbulent combustor"
  },
  {
    course: "Introduction to Multiphase Flows",
    title: "Vapor Transport studies",
    guide: "Prof. Mahesh Panchagnula",
    desc: "Applied Euler-Euler & Euler-Lagrange models to simulate vapor bubble transport condensation boundaries"
  },
  {
    course: "Introduction to Turbulence",
    title: "Turbulence-Flame interaction",
    guide: "Prof. Sameen A.",
    desc: "Computed turbulent mixing energy in turbulence flame interactions in a bluff-body stabilized flow using LES"
  },
  {
    course: "Computational Fluid Dynamics",
    title: "2D-Unsteady Solver in MATLAB",
    guide: "Prof. Vagesh D. Narasimhamurthy",
    desc: "Formulated fast hybrid finite-volume solver for 2D unsteady convection diffusion systems in MATLAB, incorporating Gauss-Seidel and TDMA iterative algorithms to achieve stable, grid-independent numerical solutions"
  },
  {
    course: "Structural Dynamics & Aeroelasticity",
    title: "Study on Flutter",
    guide: "Prof. K. V. Nagendra Gopal",
    desc: "Performed non-linear flutter analysis of a typical aerofoil section using Theodorsen's theory of unsteady aerodynamics using the k-method & compared results with classical flutter analysis to study aeroelastic instabilities"
  },
  {
    course: "Unsteady Aerodynamics",
    title: "Unsteady panel method to model wake vortices",
    guide: "Prof. Sunetra Sarkar",
    desc: "Implemented unsteady panel method to model the wake vortex shedding from a plunging and pitching airfoil & Captured time-resolved lift and thrust generation to understand unsteady mechanisms in flapping flight"
  },
  {
    course: "Control Systems",
    title: "Controlling an Inverted Robot",
    guide: "Prof. Manish Anand",
    desc: "Developed a stable, fast state-space controller & observer to stabilize an inverted robot on a 3-DOF wheel platform"
  }
  
];
export const nonTechnicalCourses = [
  "Systems thinking for engineers",
  "Happiness and habits",
  "Nurturing women's leadership potential",
  "Aspects of western philosophy",
  "Psychology of learning (ongoing)"
];

export const achievements = [
  "Ranked in top 99.3 %ile in JEE Advanced and top 99.2 %ile in the JEE Mains out of ~ 1 million candidates",
  "Awarded JASSO scholarship by Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan",
  "Achieved 1st place in Asia and 21st worldwide at the Spaceport America Cup 2024 with Team Abhyuday.",
  "Achieved 8th place worldwide for technical design report in the SUAS competition 2025 with IITM-SUAS"
];

export const extracurricular = [
  { 
    title: "SmartLock360 | Product Design Club, Center For Innovation", 
    org: "IIT Madras",
    desc: "Led the end-to-end design and development of an innovative anti-theft automatic cycle lock prototype. Spearheaded comprehensive market research to identify target demographics, evaluate commercial viability, and accurately estimate manufacturing costs for potential mass production." 
  },
  { 
    title: "Associate Manager | Entrepreneurship-Cell (E-Cell)", 
    org: "IIT Madras",
    desc: "Coordinated and successfully executed large-scale, national-level entrepreneurial events. Managed logistical operations, facilitated communication between various stakeholders, and played a pivotal role in fostering a vibrant startup and innovation ecosystem within the student community." 
  },
  { 
    title: "Inter-Collegiate Dance Team", 
    org: "IIT Madras",
    desc: "Represented the institute as an active member of the inter-collegiate dance team. Competed and consistently secured top podium finishes at various prestigious national-level cultural festivals, demonstrating strong teamwork, discipline, and time management alongside rigorous academic commitments." 
  }
];
