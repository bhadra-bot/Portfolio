export const personalInfo = {
  name: "Bhadra Sreelatha",
  email: "ae22b010@smail.iitm.ac.in",
  institution: "Indian Institute of Technology Madras (IIT M)",
  location: "Chennai, India",
  program: "Pursuing 5th year in B.Tech + M.Tech, Aerospace Engineering",
  expectedGraduation: "2027",
  cgpa: "9.20/10",
  bio: "I am a final-year aerospace engineering student from IIT Madras interested in fluid flows, propulsion, and combustion. I am particularly interested in using experimental visualization to understand flow structures and their dynamics, and in combining these observations with modelling to better understand the underlying physics. I enjoy working at the intersection of experiments and modelling, using mathematical and nonlinear models to explain and reproduce phenomena observed experimentally. My recent work under Prof. R. I. Sujith has involved PIV and chemiluminescence imaging to study vortex structures and heat-release dynamics in a turbulent combustor. I have also worked extensively on the experimental study and modelling of thermoacoustic instabilities and their mitigation. At Hokkaido University, I studied combustion under reduced-pressure conditions to understand how microgravity environments affect flame behaviour, with applications to fire safety in space. More broadly, I am interested in understanding fluid dynamics across aerospace applications, from combustion and propulsion to aerodynamics and acoustics, and in using this understanding to develop safer, more reliable, and efficient aerospace systems. My research interests include:",
  // NEW: Add your bullet points here!
  interests: [
    "Flow visualization techniques",
    "Effieciency and performance of propulsion & combustion engineering",
    "Thermoacoustic instabilities",
    "Aerodynamics, Aeroacoustics, Aeroelasicity",
    "Nonlinear modelling of complex systems"
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
      "Pattern formation during smooth and abrupt transition to instability in turbulent combustors: Studying the evolution of flow structures and heat-release patterns during smooth and rapid transitions to thermoacoustic instability in a turbulent combustor. Using PIV and chemiluminescence imaging to characterize vortex dynamics, flame response, and the emergence of coherent spatial patterns.",
      "Shock-induced tipping in a prototypical laminar thermoacoustic system, Rijke Tube: Investigating rapid parameter changes as a mechanism for triggering transitions between the stable and oscillatory states of a Rijke tube. Combining experiments with nonlinear modelling to understand how transient changes in the auxiliary thermal dynamics can drive the system across basin boundaries and induce tipping.",
      "Study of hysteresis during subcritical Hopf bifurcation to thermoacoustic instability in a laminar thermoacoustic system: Experimentally and computationally characterized the hysteresis during the transition to and from thermoacoustic instability in a Rijke tube. Obtained the bifurcation of the heating-grid temperature with respect to the voltage supplied to the grid and used it to identify the bistable regime and understand the underlying transition dynamics."
    ]
  },
  {
    role: "Research Intern",
    lab: "Laboratory of Space Utilization, Hokkaido University, Japan",
    pi: "Asst.Prof. Yusuke Konno",
    title: "Reproduction of low-gravity combustion using decompression environment",
    duration: "May - Aug 2026",
    points: [
      "Conducted experiments on a vacuum sealed chamber to study diffusion flame shapes in microgravity condition using a low pressure surrogate for varying oxygen concentrations. Existing models of flame behaviour study does not feature a combination of pressure and oxygen concentration effects; I extended the Roper flame model using the Chapman-Enskog theory and successfully predicted flame shape behavior under low-pressure and varying oxygen concentrations using one model."
    ]
  },
  {
    role: "Research Intern",
    lab: "Liquid Propulsion Systems Centre, ISRO",
    pi: "Mr. Aadithya Vijayakumar",
    title: "Mitigation of high frequency instability in rocket propulsion",
    duration: "June - July 2024",
    points: [
      "Modelled Helmholtz and Quincke resonators to study their effectiveness in suppressing pressure oscillations within rocket propellant feed systems. Analysed their dynamic response and attenuation characteristics to identify potential flow stability risks and understand how resonator design can be used to mitigate high-frequency instabilities in propulsion systems."
    ]
  },
  {
    role: "Industrial Research Intern",
    lab: "Kinben Innovation Pvt. Ltd.",
    duration: "May 2025 - July 2025",
    points: [
      "Developed an Extended Kalman Filter (EKF)-based trajectory reconstruction method for pipeline inspection in GPS-denied environments, using onboard sensor measurements to estimate the gauge’s position and motion. Modelled the dynamics of the inspection gauge using CFD to understand its interaction with the flow and identify signatures associated with potential structural anomalies."
    ]
  }
];

export const engineeringProjects = [
  
  {
    title: "Autonomous drone project, SUAS 2025",
    org: "Guidance, Navigation & Controls Lab",
    guide: "Dr. Satadal Ghosh",
    duration: "May 2024 - June 2025",
    description: "Founded and led a new IIT Madras team for the Student Unmanned Aerial Systems competition, bringing together students from different backgrounds to build an autonomous UAV from the ground up. Leading the team across design, software, hardware, and testing and finishing 8th globally for technical design.",
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
    description: "Designed and developed a student-built sounding rocket for the Spaceport America Cup, including India’s first student-built SRAD hybrid rocket engine and recovery system. The rocket was launched at the competition, finishing 1st in Asia and 21st globally.",
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
  cfd: ["OpenFOAM", "ANSYS Fluent", "MATLAB CFD Toolbox"],
  modelling: ["Fusion-360", "Ansys", "AutoCAD"],
  electronicSystems: ["Eagle", "KiCad", "Arduino", "EasyEDA"],
  practices: ["LaTeX", "Github", "MS Office"]
};

export const coursework = [
  {
    course: "Combustion & Flow Diagnostics (Ongoing)",
    title: "Studying the Response of a Premixed Bunsen Flame to a Sinusoidal Air Supply",
    guide: "Prof. R. I. Sujith",
    desc: "Developing Schlieren-based diagnostics to characterize how a Bunsen flame responds geometrically to acoustic perturbations in the airflow, while investigating its response time across a range of excitation frequencies to better understand the dynamics of flame–flow interactions."
  },
  {
    course: "Acoustic Instabilities in Aerospace Propulsion",
    title: "Data-Driven Analysis of Thermoacoustic Dynamics", // Left blank as the course itself is the project topic
    guide: "Prof. R. I. Sujith",
    desc: "Using data from a thermoacoustic rig exhibiting axial instabilities to generate phase-space, recurrence, and complex-network representations to characterizedynamical states such as combustion noise, intermittency, during the transition to thermoacoustic instability using Gephi. Using these complementary approaches to study how the underlying dynamics evolve as the system transitions between these states."
  },
  {
    course: "Introduction to Multiphase Flows",
    title: "Vapor Transport studies",
    guide: "Prof. Mahesh Panchagnula",
    desc: "Applying Euler–Euler and Euler–Lagrange frameworks to simulate vapor bubble transport and condensation in cool boundaries. Investigating bubble trajectories, phase interactions, and condensation near boundaries to understand how local flow and thermal conditions influence bubble dynamics."
  },
  {
    course: "Introduction to Turbulence",
    title: "Turbulence-Flame interaction",
    guide: "Prof. Sameen A.",
    desc: "Using Large Eddy Simulations (LES) to study turbulent mixing and flame–turbulence interactions in a bluff-body-stabilized flow. Analyzing the turbulent mixing energy and its spatial distribution to understand how the flow structures influence mixing and combustion."
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
    desc: "Developing a state-space controller and observer to stabilize an inverted robot on a 3-DOF wheeled platform. Tuning and optimizing the controller to improve the robot’s stability and response while using state estimation to track its motion."
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
