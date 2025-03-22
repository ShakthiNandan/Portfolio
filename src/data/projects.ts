export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
  category: string;
  year: number;
  link?: string;
  demoPath?: string;
  type?: '3D_MODEL' | 'GODOT_GAME';
}

export const projects: Project[] = [
  {
    id: "1",
    title: "USIM Clinical System",
    description: "A medical records management system utilizing QR-based access for secure patient data retrieval. Streamlines healthcare data management while maintaining strict security protocols.",
    technologies: ["Python", "Flask", "SQLAlchemy", "QR Code", "JWT"],
    category: "Healthcare",
    status: "Completed",
    year: 2023,
    link: "https://github.com/yourusername/usim-clinical"
  },
  {
    id: "2",
    title: "Typing Test App",
    description: "An interactive Flask-based application for measuring typing speed and accuracy. Features real-time performance tracking and detailed analytics.",
    technologies: ["Flask", "Python", "JavaScript"],
    category: "Web Development",
    status: "Completed",
    year: 2022
  },
  {
    id: "3",
    title: "AR Home Decor Visualizer",
    description: "An augmented reality platform enabling vendors to upload products and customers to visualize furniture and decor in their space in real-time.",
    technologies: ["AR.js", "Three.js", "React", "Node.js"],
    category: "AR/VR",
    status: "Completed",
    year: 2023
  },
  {
    id: "4",
    title: "Student Attendance Tracker",
    description: "A Flutter-based mobile application integrated with Firebase for simplified attendance tracking in educational institutions.",
    technologies: ["Flutter", "Firebase", "Dart"],
    category: "Mobile",
    status: "Completed",
    year: 2023
  },
  {
    id: "5",
    title: "Java File Metadata Extractor",
    description: "A Java-based tool for analyzing file metadata to identify potential malware, featuring advanced feature extraction and analysis capabilities.",
    technologies: ["Java", "Security APIs"],
    category: "Cybersecurity",
    status: "Completed",
    year: 2023
  },
  {
    id: "6",
    title: "Swifties Fan Page",
    description: "An interactive multimedia fan page dedicated to Taylor Swift, showcasing various forms of media and content with modern web technologies.",
    technologies: ["React", "TypeScript", "Material-UI"],
    category: "Web Development",
    status: "Completed",
    year: 2023
  },
  {
    id: "7",
    title: "Developer Forum",
    description: "A full-stack forum platform for developers to register, list projects, and collaborate. Built with modern web technologies and real-time features.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    category: "Web Development",
    status: "Completed",
    year: 2023
  },
  {
    id: "8",
    title: "MEDME: Resuscitation Room Support",
    description: "A clinical software solution for digitizing and managing patient vitals and health records. Currently being transitioned from Flask to TypeScript.",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    category: "Healthcare",
    status: "In Progress",
    year: 2024
  },
  {
    id: "9",
    title: "GPS Toll-Based Simulation",
    description: "An Intel Unnati Ignite project implementing dynamic toll charge calculations using real-time GPS data, including vehicle registration and tracking.",
    technologies: ["Python", "GPS APIs", "Data Analysis"],
    category: "AI/ML",
    status: "Completed",
    year: 2023
  },
  {
    id: "10",
    title: "On-Device Malware Detection",
    description: "A Samsung Prism Android app using TensorFlow for real-time malware detection, combining Java-based feature extraction with Python classification.",
    technologies: ["Java", "Android", "TensorFlow", "Python"],
    category: "Cybersecurity",
    status: "Completed",
    year: 2023
  },
  {
    id: "11",
    title: "Paddy Disease Classifier",
    description: "Deep learning-based system capable of classifying 10 different paddy diseases, focusing on image preprocessing and neural network optimization.",
    technologies: ["TensorFlow", "Python", "Deep Learning"],
    category: "AI/ML",
    status: "Completed",
    year: 2024
  },
  {
    id: "12",
    title: "Webcam Eye Tracker",
    description: "An application in development that tracks eye movements using webcam input, aimed at improving accessibility and user interaction.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Mediapipe"],
    category: "AI/ML",
    status: "In Progress",
    year: 2024
  },
  {
    id: "13",
    title: "Malicious APK/ZIP Detector",
    description: "AI model development for detecting malicious APK and ZIP files through feature extraction, labeling, and Java-based classification.",
    technologies: ["Java", "Python", "TensorFlow", "scikit-learn"],
    category: "Cybersecurity",
    status: "In Progress",
    year: 2024
  },
  {
    id: "14",
    title: "Stock Price Forecaster",
    description: "Time series analysis project for stock price prediction using advanced neural network architectures like LSTMs, GRUs, and Transformers.",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
    category: "AI/ML",
    status: "In Progress",
    year: 2024
  },
  {
    id: "15",
    title: "Seizure Prediction System",
    description: "Healthcare AI application using Transformers to predict seizures based on EEG data analysis.",
    technologies: ["Python", "PyTorch", "scikit-learn", "Pandas"],
    category: "Healthcare",
    status: "In Progress",
    year: 2024
  }
]; 