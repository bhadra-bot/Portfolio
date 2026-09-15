export const profile = {
  name: "Bhadra Sreelatha",
  title: "Pursuing 5th year in B.Tech + M.Tech, Aerospace Engineering",
  institution: "Indian Institute of Technology Madras (IIT M)",
  contact: { email: "ae22b010@smail.iitm.ac.in" },
  education: [
    { degree: "B.Tech + M.Tech, Aerospace Engineering", institution: "Indian Institute of Technology Madras (IIT M), Chennai, India", year: "Expected: 2027", score: "CGPA : 9.20/10" },
    { degree: "Class XII", institution: "Central Board of Secondary Education, India", year: "2022", score: "CGPA : 9.86/10" },
    { degree: "Class X", institution: "Central Board of Secondary Education , India", year: "2020", score: "CGPA : 9.90/10" }
  ],
  publications: [
    { authors: "Bhadra Sreelatha, Rohit Radhakrishnan, R. I. Sujith", title: "Auxiliary-variable driven tipping under shock in a thermoacoustic system", venue: "Manuscript under review in Chaos: An Interdisciplinary journal of Nonlinear Science", note: "(Shock-induced tipping in a thermoacoustic system, arXiv:2603.14237)" },
    { authors: "Bhadra Sreelatha, Rohit Radhakrishnan, R. I. Sujith", title: "Experimental investigation of shock-induced tipping in a thermoacoustic system", venue: "International Conference on Vibro-acoustics and Mechano-materials (ICVAM) 2026 [Oral], Conference on Nonlinear Systems and Dynamics (CNSD) 2026 [Poster], Inter Group Meeting (IGM) 2026 [IIT Bombay, Oral, session chair]" }
  ],
  researchExperience: [
    { title: "CoE- CTCS", pi: "Dr. R. I Sujith, Institute Chair Professor, IIT M", projects: [
      { name: "Pattern formation during transition routes to instability in turbulent combustion", dates: "Nov 2025 - Present", points: ["Processed PIV data using PIVview 2C software from a turbulent combustor across varying equivalence ratios", "Quantifying vortex dynamics during smooth & abrupt transitions from combustion noise to instability", "Examining spatio-temporal turbulent flow & heat release patterns to identify precursors linked to different routes"] },
      { name: "Shock-induced tipping in a practical thermoacoustic system- the Rijke tube", dates: "Nov 2023 - Jan 2025", points: ["Demonstrated first experimental evidence of shock-induced tipping using a prototypical thermo-fluid system", "Enhanced governing equations of Rijke tube by incorporating heat transfer equations & discovered the shock given to control parameter causes an auxiliary system variable to cross a threshold which causes the tipping of the system"] },
      { name: "Experimentally explaining hysteresis in a laminar thermoacoustic system", dates: "Mar - Oct 2025", points: ["Developed numerical model of unsteady heat transfer & temperature profiles, capturing subcritical Hopf bifurcations", "Conducted experiments to capture the hysteresis dynamics during bifurcation tipping to thermoacoustic instability"] }
    ]},
    { title: "Designed injector model to mitigate high frequency instability in rocket propulsion", role: "Research Intern, Liquid Propulsion Systems Centre, ISRO", pi: "Mr. Aadithya Vijayakumar", dates: "June - July 2024", projects: [{ points: ["Analysis of efficiency of Helmholtz & Quincke dampers (resonators) on rocket propellant feed systems using Python", "Modelled resonator-feed configurations for centrifugal & constant-rate pumps to determine most stable configuration", "Diagnosed critical flow stability risks via AutoCAD-optimized injector-feedline admittance response analysis"] }] },
    { title: "Reproduction of low-gravity combustion using decompression environment", role: "Research Intern, Laboratory of Space Utilization, Hokkaido University, Japan", pi: "Asst.Prof.Yusuke Konno", dates: "May - Aug 2026", projects: [{ points: ["Extended Roper laminar diffusion flame length model to capture microgravity effects on flame shapes across O2%", "Conducted microgravity-analog experiments using low-pressure surrogate to characterize flame contours"] }] }
  ],
  engineeringProjects: [
    { title: "Industrial Research Intern at Kinben Innovation Pvt. Ltd.", dates: "May 2025 - July 2025", points: ["Engineered EKF-based trajectory reconstruction of long-order oil & gas pipelines in GPS-denied environments", "Modeled pipeline inspection gauge dynamics via CFD (OpenFOAM) to detect structural anomalies in the pipelines"] },
    { title: "Autonomous drone project, Student Unmanned Aerial Systems (SUAS) 2025", role: "Guidance, Navigation & Controls Lab", guide: "Dr. Satadal Ghosh, Associate Professor, IIT M", dates: "May 2024 - June 2025", points: ["Developed a fully autonomous UAV using ROS framework equipped with computer vision for SUAS 2024", "Conducted Software-In-The-Loop simulations for autonomous mission in Gazebo & ArduPilot's Mission Planner"] },
    { title: "Student Rocketry Team- Spaceport America (SA) Cup 2024", role: "Centre for Innovation, IIT M", guide: "Dr. Satya Chakravarthy, Professor, IIT M", dates: "May 2023 - June 2024", points: ["Engineered India's first SRAD hybrid rocket engine with liquid nitrous oxide as oxidizer and paraffin as the fuel.", "Simulated parachute dynamics in ANSYS Fluent & built a flight computer for recovery of rocket from 10,000 ft"] },
    { title: "Unmanned fixed-wing aircraft project, Design of UAVs", role: "Department of Aerospace Engineering, IIT M", guide: "Dr. HSN Murthy, Professor, IIT M", dates: "Jan 2025 - Jan 2026", points: ["Aerodynamically & structurally engineered a long-endurance UAV to rescue fishermen in sea during extreme weather", "Flight tested & manufactured the fixed-wing aircraft in-house, from raw composite materials to final assembly"] }
  ],
  courseProjects: [
    { title: "Acoustic Instabilities in Aerospace Propulsion", guide: "Prof. R. I Sujith", points: ["Generated phase space, recurrence plots & complex network plot during instability in turbulent combustor"] },
    { title: "Vapor Transport studies, Introduction to Multiphase Flows", guide: "Prof. Mahesh Panchagnula", points: ["Applied Euler-Euler & Euler-Lagrange models to simulate vapor bubble transport condensation boundaries"] },
    { title: "Turbulence -Flame interaction, Introduction to Turbulence", guide: "Prof. Sameen A", points: ["Computed turbulent mixing energy in turbulence-flame interactions in a bluff-body stabilized flow using LES"] },
    { title: "2D-Unsteady Solver in MATLAB, Computational Fluid Dynamics", guide: "Prof. Vagesh D. N", points: ["Formulated fast hybrid finite-volume solver for 2D unsteady convection-diffusion systems in MATLAB, incorporating Gauss-Seidel and TDMA iterative algorithms to achieve stable, grid-independent numerical solutions"] },
    { title: "Study on Flutter, Structural Dynamics & Aeroelasticity", guide: "Prof. K. V Nagendra Gopal", points: ["Performed non-linear flutter analysis of a typical aerofoil section using Theodorsen's theory of unsteady aerodynamics using the k-method & compared results with classical flutter analysis to study aeroelastic instabilities"] },
    { title: "Unsteady panel method to model wake vortices, Unsteady Aerodynamics", guide: "Prof. Sunetra Sarkar", points: ["Implemented unsteady panel method to model the wake vortex shedding from a plunging and pitching airfoil & Captured time-resolved lift and thrust generation to understand unsteady mechanisms in flapping flight"] },
    { title: "Controlling an Inverted Robot, Control Systems", guide: "Prof. Manish Anand", points: ["Developed a stable, fast state-space controller & observer to stabilize an inverted robot on a 3-DOF wheel platform"] }
  ],
  achievements: [
    "Ranked in top 99.3 %ile in JEE Advanced and top 99.2 %ile in the JEE Mains out of ~ 1 million candidates",
    "Awarded JASSO scholarship by Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan",
    "Achieved 1st place in Asia and 21st worldwide at the Spaceport America Cup 2024 with Team Abhyuday.",
    "Achieved 8th place worldwide for technical design report in the SUAS competition 2025 with IITM-SUAS"
  ]
};\n