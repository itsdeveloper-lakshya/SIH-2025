import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";
import { Search, MapPin, Briefcase, Filter, User, X, Edit3, ArrowLeft, Image as ImageIcon, Sparkles, TrendingUp, Handshake, LogOut, Calendar, Globe, Sun, Moon, CheckCircle } from 'lucide-react';
import aicteLogo from './assets/aicte-logo.png';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnr9qtfsM34ZJfNT56Q8FiKfIzvXGLMkw",
  authDomain: "sih-2025-b3b6e.firebaseapp.com",
  projectId: "sih-2025-b3b6e",
  storageBucket: "sih-2025-b3b6e.firebasestorage.app",
  messagingSenderId: "344042966142",
  appId: "1:344042966142:web:9f8616f6b183e241a7dc2f",
  measurementId: "G-FJRZGCYQCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ location: '', mode: '', skills: '', role: '', minStipend: 0 });
  const [recommendedInternships, setRecommendedInternships] = useState([]);
  const [isFetchingRecommendations, setIsFetchingRecommendations] = useState(false);
  const [user, setUser] = useState(null);
  
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    state: '',
    city: '',
    university: '',
    qualification: '',
    course: '',
    skills: [],
    resume: '',
    profilePhoto: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [theme, setTheme] = useState('light');
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [showAppliedModal, setShowAppliedModal] = useState(false);
  const [appliedInternship, setAppliedInternship] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        await fetchUserProfile(user.uid);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setProfileData({
          name: '', email: '', phone: '', dob: '', gender: '',
          state: '', city: '', university: '', qualification: '',
          course: '', skills: [], resume: '', profilePhoto: ''
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserProfile = async (uid) => {
    setIsProfileLoading(true);
    const userDocRef = doc(db, "users", uid);
    try {
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
            setProfileData(userDocSnap.data());
        }
    } catch (error) {
        console.error("Failed to fetch user profile:", error);
    } finally {
        setIsProfileLoading(false);
    }
  };

  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

  const showPopup = (message) => {
    setSuccessMessage(message);
    setShowSuccessPopup(true);
  };

  const handleLogin = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLoginModal(false);
      setCurrentPage('home');
      showPopup('Logged in successfully!');
    } catch (error) {
      console.error("Login failed:", error.message);
      showPopup('Login failed. Check your email and password.');
    }
  };

  const handleRegister = async ({ name, email, password, areaOfInterest }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      const userDocRef = doc(db, "users", newUser.uid);
      await setDoc(userDocRef, {
        name: name,
        email: email,
        skills: [areaOfInterest],
        createdAt: new Date().toISOString()
      });
      setShowRegisterModal(false);
      setCurrentPage('home');
      showPopup('Registration successful! Welcome.');
    } catch (error) {
      console.error("Registration failed:", error.message);
      showPopup('Registration failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentPage('landing');
      showPopup('Logged out successfully.');
    } catch (error) {
      console.error("Logout failed:", error.message);
      showPopup('Logout failed.');
    }
  };

  const handleSaveProfile = async (data) => {
    if (!user) return;
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, data, { merge: true });
      setProfileData(data);
      setCurrentPage('home');
      showPopup('Profile saved successfully!');
    } catch (error) {
      console.error("Saving profile failed:", error.message);
      showPopup('Failed to save profile.');
    }
  };

  const handleApply = async (internship) => {
    if (!user) {
      setShowLoginModal(true);
      showPopup("Please log in to apply for an internship.");
      return;
    }

    try {
      const applicationsRef = collection(db, "applications");
      await addDoc(applicationsRef, {
        userId: user.uid,
        userName: profileData.name,
        userEmail: profileData.email,
        internshipId: internship.id,
        internshipTitle: internship.title,
        company: internship.company,
        appliedAt: new Date().toISOString()
      });
      setAppliedInternship(internship);
      setShowAppliedModal(true);
    } catch (error) {
      console.error("Failed to save application:", error);
      showPopup("Failed to apply for the internship. Please try again.");
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };
  
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove(prevTheme);
      document.documentElement.classList.add(newTheme);
      return newTheme;
    });
  };

  const filteredInternships = allInternships.filter(internship => {
    const searchMatch = (
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const locationMatch = filters.location === '' || internship.location.includes(filters.location);
    const modeMatch = filters.mode === '' || internship.mode === filters.mode;
    const roleMatch = filters.role === '' || internship.title.toLowerCase().includes(filters.role.toLowerCase());
    const stipendMatch = internship.stipend >= filters.minStipend;
    
    let skillsMatch = true;
    if (filters.skills !== '') {
        const filterSkills = filters.skills.toLowerCase().split(',').map(s => s.trim());
        skillsMatch = filterSkills.some(filterSkill =>
            internship.skills.some(internshipSkill =>
                internshipSkill.toLowerCase().includes(filterSkill)
            )
        );
    }
    
    return searchMatch && locationMatch && modeMatch && roleMatch && stipendMatch && skillsMatch;
  });

  const fetchRecommendations = async () => {
    setIsFetchingRecommendations(true);
    console.log("Fetching recommendations from backend API...");
    try {
      const userProfilePayload = {
        qualification: profileData.qualification,
        skills: profileData.skills,
        preferred_locations: [profileData.city, 'Remote'], 
        preferred_sectors: profileData.skills, 
        preferred_work_arrangement: ['Hybrid', 'In-Office', 'Work from Home']
      };
      
      const response = await fetch('YOUR_CLOUD_FUNCTION_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_profile: userProfilePayload }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setRecommendedInternships(data.recommendations);
      showPopup("Recommendations loaded successfully!");

    } catch (error) {
      console.error("Failed to fetch recommendations:", error);
      showPopup("Failed to load recommendations. Please try again.");
    } finally {
        setIsFetchingRecommendations(false);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <>
            <Header
              title="Welcome Your Dream PM Internship"
              subtitle="The smartest way to get personalized internship recommendations."
              isLandingPage={true}
              showLoginModal={() => setShowLoginModal(true)}
              showRegisterModal={() => setShowRegisterModal(true)}
            />
            <main>
              <OurCoreIntelligence />
              <HowItWorks />
            </main>
          </>
        );
      case 'home':
        return (
          <>
            <Header
              title="Explore Top Product Internships"
              subtitle="Get personalized recommendations tailored to your skills and interests."
              isLandingPage={false}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
                {isFetchingRecommendations ? (
                    <div className="flex justify-center items-center h-64 w-full">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
                        <p className="text-xl text-gray-500 ml-4">Fetching recommendations...</p>
                    </div>
                ) : (
                    <div className="w-full md:w-3/4">
                        <button onClick={fetchRecommendations} className="mb-8 w-full bg-green-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-700 transition-colors duration-300">
                            Get My Top Recommendations
                        </button>
                        {recommendedInternships.length > 0 ? (
                           <InternshipList internships={recommendedInternships} onApply={handleApply} />
                        ) : (
                            <div className="col-span-2 text-center text-gray-500 dark:text-gray-400 py-16">
                                <p className="text-lg">Click the button above to get your top recommendations!</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
          </>
        );
      case 'profile':
        return (
          <ProfilePage
            onSave={handleSaveProfile}
            profileData={profileData}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'availableInternships':
        return <AvailableInternshipsPage onApply={handleApply} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{styles}</style>
      <Navbar
        isLoggedIn={isLoggedIn}
        setCurrentPage={setCurrentPage}
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
        handleLogout={handleLogout}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {showSuccessPopup && <SuccessPopup message={successMessage} />}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          setShowRegisterModal={setShowRegisterModal}
          handleLogin={handleLogin}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          onClose={() => setShowRegisterModal(false)}
          setShowLoginModal={setShowLoginModal}
          handleRegister={handleRegister}
        />
      )}
      {showAppliedModal && appliedInternship && (
        <AppliedModal
          onClose={() => setShowAppliedModal(false)}
          internshipTitle={appliedInternship.title}
        />
      )}
      {renderContent()}
      <Footer />
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
.animate-zoom-in {
  animation: zoomIn 0.3s ease-out forwards;
}
.animate-fade-in-down {
  animation: fadeInDown 0.4s ease-out forwards;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const allInternships = [
  { id: 1, title: 'Web Development Intern', company: 'InnovateX', location: 'Bengaluru', score: 98, description: 'Join our product team to work on a cutting-edge SaaS platform. You will be involved in market research, feature definition, and user journey mapping. Strong analytical skills and a passion for technology are a must.', skills: ['Agile', 'Market Research', 'UX/UI', 'Jira'], mode: 'Offline', stipend: 25000 },
  { id: 2, title: 'Data Science Intern', company: 'TechGrowth Solutions', location: 'Mumbai', score: 95, description: 'Assist in the development and launch of a new mobile app feature. This role offers hands-on experience in product lifecycle management, from ideation to launch and analysis. Ideal for students with a problem-solving mindset.', skills: ['Product Lifecycle', 'Data Analysis', 'User Stories', 'SQL'], mode: 'Hybrid', stipend: 35000 },
  { id: 3, title: 'PM Summer Intern', company: 'Global Innovation Inc.', location: 'Remote', score: 92, description: 'A remote internship focused on digital product strategy. You will collaborate with cross-functional teams to identify new opportunities and define product requirements. Excellent communication skills are required.', skills: ['Product Strategy', 'Figma', 'User Research', 'Communication'], mode: 'Online', stipend: 20000 },
  { id: 4, title: 'Product Strategy Intern', company: 'Future Forward', location: 'Delhi', score: 88, description: 'Dive into product strategy and help shape the future of our enterprise software. This role requires a strategic mindset and a desire to understand complex business problems.', skills: ['Product Strategy', 'Business Analysis', 'Roadmapping'], mode: 'Hybrid', stipend: 45000 },
  { id: 5, title: 'Junior Software Intern', company: 'CloudCo', location: 'Pune', score: 85, description: 'Work with a senior PM to manage a key product line. You will contribute to product roadmaps, sprint planning, and performance metrics analysis. Experience with cloud technologies is a plus.', skills: ['Product Roadmap', 'Sprint Planning', 'Metrics', 'Cloud'], mode: 'Offline', stipend: 30000 },
  { id: 6, title: 'UX Product Intern', company: 'DesignWorks', location: 'Remote', score: 80, description: 'Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.', skills: ['UX Design', 'User Testing', 'Wireframing'], mode: 'Online', stipend: 18000 },
  { id: 7, title: 'Product Management Intern', company: 'DesignWorks', location: 'Hyderabad', score: 80, description: 'Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.', skills: ['UX Design', 'User Testing', 'Wireframing'], mode: 'Offline', stipend: 22000 },
  { id: 8, title: 'AI-Engineer Intern', company: 'DesignWorks', location: 'Bengaluru', score: 80, description: 'Focus on the intersection of user experience and product management. You will help bridge the gap between design and development to create user-centric products. A portfolio of design work is a plus.', skills: ['UX Design', 'User Testing', 'Wireframing'], mode: 'Online', stipend: 32000 },
  { id: 9, title: 'Product Marketing Intern', company: 'MarketMinds', location: 'Mumbai', score: 78, description: 'Develop and execute marketing strategies for new product launches. You will work on content creation, social media campaigns, and market analysis.', skills: ['Marketing', 'SEO', 'Content Creation'], mode: 'Offline', stipend: 28000 },
  { id: 10, title: 'Mobile App Intern', company: 'AppGenius', location: 'Bengaluru', score: 89, description: 'Help manage the lifecycle of our flagship mobile application. This role involves working with designers and developers to ship new features.', skills: ['iOS', 'Android', 'Agile', 'Jira'], mode: 'Hybrid', stipend: 40000 },
  { id: 11, title: 'QA Intern', company: 'CodeVerify', location: 'Remote', score: 75, description: 'Ensure the quality of our software products through rigorous testing and bug reporting. Attention to detail is key.', skills: ['QA Testing', 'Bug Tracking', 'Jira'], mode: 'Online', stipend: 15000 },
  { id: 12, title: 'Product Data Analyst', company: 'InsightHub', location: 'Mumbai', score: 91, description: 'Analyze user behavior data to provide insights that drive product decisions. Experience with SQL and data visualization tools is a plus.', skills: ['SQL', 'Data Analysis', 'Tableau'], mode: 'Hybrid', stipend: 38000 },
  { id: 13, title: 'Junior UI/UX Designer', company: 'PixelPerfect', location: 'Remote', score: 87, description: 'Work on creating intuitive and aesthetically pleasing user interfaces. A portfolio showcasing your design skills is a must.', skills: ['Figma', 'Sketch', 'UI/UX Design'], mode: 'Online', stipend: 24000 },
  { id: 14, title: 'Technical Product Intern', company: 'TechSolutions', location: 'Delhi', score: 96, description: 'Bridge the gap between engineering and product teams. This role is ideal for students with a technical background and an interest in product management.', skills: ['Technical Writing', 'APIs', 'SaaS'], mode: 'Offline', stipend: 42000 },
  { id: 15, title: 'Community Manager Intern', company: 'ConnectHub', location: 'Remote', score: 70, description: 'Grow our user community by engaging with members and creating engaging content. Strong communication skills are essential.', skills: ['Social Media', 'Community Management'], mode: 'Online', stipend: 16000 },
  { id: 16, title: 'Cybersecurity Intern', company: 'SecureCloud', location: 'Pune', score: 85, description: 'Assist in identifying and mitigating security vulnerabilities in our products. This role requires knowledge of cybersecurity principles.', skills: ['Cybersecurity', 'Networking'], mode: 'Hybrid', stipend: 30000 },
  { id: 17, title: 'Financial Analyst Intern', company: 'FinPulse', location: 'Mumbai', score: 82, description: 'Help analyze financial data and create reports to support business decisions. Proficiency in Excel is required.', skills: ['Finance', 'Excel', 'Data Analysis'], mode: 'Offline', stipend: 28000 },
  { id: 18, title: 'Product Manager Intern', company: 'NextGen', location: 'Remote', score: 90, description: 'A hands-on role in product management, from feature ideation to launch. Work closely with a team of designers and engineers.', skills: ['Agile', 'Jira', 'Product Lifecycle'], mode: 'Online', stipend: 33000 },
  { id: 19, title: 'Software Development Intern', company: 'DevLabs', location: 'Bengaluru', score: 88, description: 'Develop and maintain software applications using modern technologies. This role is perfect for aspiring developers.', skills: ['JavaScript', 'Python', 'React'], mode: 'Hybrid', stipend: 38000 },
  { id: 20, title: 'Content Strategy Intern', company: 'WordStream', location: 'Remote', score: 75, description: 'Shape the content strategy for our digital products. You will be involved in content planning and optimization.', skills: ['Content Strategy', 'SEO', 'Writing'], mode: 'Online', stipend: 19000 },
  { id: 21, title: 'Data Engineering Intern', company: 'DataPipe', location: 'Mumbai', score: 85, description: 'Assist in building and maintaining data pipelines and infrastructure. Experience with cloud platforms is a plus.', skills: ['ETL', 'SQL', 'AWS'], mode: 'Offline', stipend: 36000 },
  { id: 22, title: 'AI/ML Intern', company: 'CogniTech', location: 'Delhi', score: 95, description: 'Work on developing and deploying machine learning models for our products. This role requires strong programming and math skills.', skills: ['Python', 'Machine Learning', 'TensorFlow'], mode: 'Hybrid', stipend: 48000 },
  { id: 23, title: 'Growth Marketing Intern', company: 'GrowthHackers', location: 'Pune', score: 80, description: 'Drive user acquisition and retention through data-driven marketing campaigns. A passion for growth is a must.', skills: ['Marketing', 'Data Analysis', 'Growth Hacking'], mode: 'Offline', stipend: 26000 },
  { id: 24, title: 'Backend Development Intern', company: 'ServerSide', location: 'Remote', score: 88, description: 'Develop and maintain backend services and APIs. This role is ideal for students with an interest in server-side technologies.', skills: ['Node.js', 'Express.js', 'MongoDB'], mode: 'Online', stipend: 32000 },
  { id: 25, title: 'Frontend Development Intern', company: 'Frontier', location: 'Hyderabad', score: 87, description: 'Build and optimize user-facing interfaces for our web applications. Strong knowledge of HTML, CSS, and JavaScript is a plus.', skills: ['HTML', 'CSS', 'JavaScript', 'React'], mode: 'Hybrid', stipend: 34000 },
  { id: 26, title: 'Human Resources Intern', company: 'PeopleConnect', location: 'Remote', score: 72, description: 'Assist the HR team with recruitment, employee onboarding, and policy development. Excellent interpersonal skills are required.', skills: ['HR', 'Recruitment', 'Communication'], mode: 'Online', stipend: 17000 },
  { id: 27, title: 'Business Analyst Intern', company: 'BizInsights', location: 'Mumbai', score: 83, description: 'Analyze business processes and help identify areas for improvement. This role is for students with strong analytical skills.', skills: ['Business Analysis', 'Excel', 'SQL'], mode: 'Offline', stipend: 29000 },
  { id: 28, title: 'Technical Support Intern', company: 'HelpDesk', location: 'Remote', score: 70, description: 'Provide technical assistance to customers and help troubleshoot product issues. Strong problem-solving skills are a must.', skills: ['Customer Support', 'Troubleshooting'], mode: 'Online', stipend: 15000 },
  { id: 29, title: 'Product Design Intern', company: 'UXperts', location: 'Pune', score: 90, description: 'Contribute to the design of our digital products, from wireframes to high-fidelity prototypes. A portfolio is required.', skills: ['Figma', 'Sketch', 'UI/UX Design'], mode: 'Offline', stipend: 28000 },
  { id: 30, title: 'Operations Intern', company: 'FlowOps', location: 'Bengaluru', score: 75, description: 'Assist in optimizing business operations and streamlining workflows. This role is for a highly organized and detail-oriented individual.', skills: ['Operations', 'Project Management'], mode: 'Hybrid', stipend: 22000 },
];

const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const cities = {
    'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Tirupati'],
    'Arunachal Pradesh': ['Itanagar', 'Tawang', 'Ziro'],
    'Assam': ['Guwahati', 'Dibrugarh', 'Silchar'],
    'Bihar': ['Patna', 'Gaya', 'Bhagalpur'],
    'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur'],
    'Goa': ['Panaji', 'Margao', 'Vasco da Gama'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
    'Haryana': ['Gurugram', 'Faridabad', 'Panipat'],
    'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala'],
    'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad'],
    'Karnataka': ['Bengaluru', 'Mysuru', 'Hubli'],
    'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
    'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
    'Manipur': ['Imphal', 'Bishnupur', 'Churachandpur'],
    'Meghalaya': ['Shillong', 'Cherrapunji', 'Tura'],
    'Mizoram': ['Aizawl', 'Lunglei', 'Champhai'],
    'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung'],
    'Odisha': ['Bhubaneswar', 'Cuttack', 'Puri'],
    'Punjab': ['Amritsar', 'Ludhiana', 'Chandigarh'],
    'Rajasthan': ['Jaipur', 'Udaipur', 'Jodhpur'],
    'Sikkim': ['Gangtok', 'Namchi', 'Pelling'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
    'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad'],
    'Tripura': ['Agartala', 'Udaipur', 'Dharmanagar'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Noida'],
    'Uttarakhand': ['Dehradun', 'Haridwar', 'Nainital'],
    'West Bengal': ['Kolkata', 'Darjeeling', 'Siliguri']
};
const qualifications = ['B.Tech', 'M.Tech', 'B.A.', 'B.Sc.', 'M.Sc.', 'Any Graduate'];
const courses = {
  'B.Tech': ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering'],
  'M.Tech': ['Computer Science', 'Data Science', 'AI/ML'],
  'B.A.': ['English Literature', 'History', 'Economics'],
  'B.Sc.': ['Physics', 'Chemistry', 'Mathematics'],
  'M.Sc.': ['Data Science', 'Physics', 'Chemistry'],
  'Any Graduate': ['General']
};

const areasOfInterest = ['IT', 'Marketing', 'Finance', 'Design', 'HR'];
const modes = ['Online', 'Offline', 'Hybrid'];
const popularSkills = ['React', 'Python', 'JavaScript', 'Figma', 'SQL', 'Agile', 'Jira', 'Machine Learning', 'SEO', 'UI/UX Design', 'Data Analysis', 'Node.js', 'Project Management'];
const locations = ['Bengaluru', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Remote'];

const Navbar = ({ isLoggedIn, setCurrentPage, setShowLoginModal, setShowRegisterModal, handleLogout, theme, toggleTheme }) => (
  <nav className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-sm font-semibold transition-colors duration-300">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-2xl font-bold text-blue-600">PM Interns</a>
        <img src={aicteLogo} alt="AICTE Logo" className="h-8" />
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button onClick={() => setCurrentPage('home')} className="text-gray-700 dark:text-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">Home</button>
        {isLoggedIn ? (
          <>
            <button onClick={() => setCurrentPage('availableInternships')} className="text-gray-700 dark:text-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">Available Internships</button>
            <button onClick={() => setCurrentPage('profile')} className="flex items-center text-gray-700 dark:text-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              <Edit3 size={18} className="inline mr-2" />My Profile
            </button>
            <button onClick={handleLogout} className="flex items-center text-red-600 py-2 px-4 rounded-full hover:bg-red-50 dark:hover:bg-red-900 transition-all duration-300 border border-red-100 dark:border-red-900">
                <LogOut size={18} className="inline mr-2" />Logout
            </button>
            
          </>
        ) : (
          <>
            <button onClick={() => setShowLoginModal(true)} className="bg-blue-50 text-blue-700 font-semibold py-2 px-4 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-300">Log In</button>
            <button onClick={() => setShowRegisterModal(true)} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300">Register</button>
          </>
        )}
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
          {theme === 'dark' ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-500" />}
        </button>
        
      </div>
    </div>
  </nav>
);

const Header = ({ title, subtitle, isLandingPage, searchTerm, setSearchTerm, showLoginModal, showRegisterModal }) => (
  <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-24 px-4">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">{title}</h1>
      <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in-up">{subtitle}</p>
      {isLandingPage ? (
        <div className="flex justify-center space-x-4 animate-fade-in-up">
          <button onClick={showLoginModal} className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">Log In</button>
          <button onClick={() => showRegisterModal()} className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300">Register</button>
        </div>
      ) : (
        <div className="max-w-xl mx-auto flex items-center bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg transform translate-y-8 animate-fade-in-up">
          <Search size={24} className="text-gray-400 dark:text-gray-500 ml-4" />
          <input
            type="text"
            placeholder="Search for a role, company, or location..."
            className="w-full bg-transparent px-4 py-3 text-gray-800 dark:text-gray-200 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
    </div>
  </header>
);

const InternshipCard = ({ internship, onApply }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col hover:shadow-2xl dark:hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{internship.title}</h3>
      <span className="text-sm font-bold text-white bg-blue-500 rounded-full px-3 py-1.5 min-w-[70px] text-center">{internship.score}%</span>
    </div>
    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
      <Briefcase size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
      <p className="font-semibold">{internship.company}</p>
    </div>
    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
      <MapPin size={16} className="mr-2 text-gray-400 dark:text-gray-500" />
      <p>{internship.location} ({internship.mode})</p>
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">{internship.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {internship.skills.map(skill => (
        <span key={skill} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">{skill}</span>
      ))}
    </div>
    <div className="flex justify-between items-center mt-auto">
        <p className="text-lg font-bold text-green-600 dark:text-green-400">{internship.stipend} ₹</p>
        <button onClick={() => onApply(internship)} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300">Apply Now</button>
    </div>
  </div>
);

const FiltersSidebar = ({ filters, onFilterChange }) => (
  <aside className="w-full md:w-1/4">
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-28">
      <h2 className="text-xl font-bold mb-5 flex items-center text-gray-800 dark:text-gray-200"><Filter size={20} className="mr-2 text-gray-600 dark:text-gray-400" /> Filters</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
        <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" value={filters.location} onChange={(e) => onFilterChange('location', e.target.value)}>
          <option value="">All Locations</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="New York, NY">New York, NY</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
        <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" value={filters.company} onChange={(e) => onFilterChange('company', e.target.value)}>
          <option value="">All Companies</option>
          <option value="InnovateX">InnovateX</option>
          <option value="TechGrowth Solutions">TechGrowth Solutions</option>
          <option value="Future Forward">Future Forward</option>
          <option value="CloudCo">CloudCo</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Internship Mode</label>
        <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" value={filters.mode} onChange={(e) => onFilterChange('mode', e.target.value)}>
          <option value="">All Modes</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
    </div>
  </aside>
);

const InternshipList = ({ internships, onApply }) => (
  <section className="w-full md:w-3/4">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Personalized Recommendations ({internships.length})</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {internships.length > 0 ? (
        internships.map((internship) => <InternshipCard key={internship.id} internship={internship} onApply={onApply} />)
      ) : (
        <div className="col-span-2 text-center text-gray-500 dark:text-gray-400 py-16">
          <p className="text-lg">No internships found matching your criteria. Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  </section>
);

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 z-50 animate-fade-in">
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-zoom-in">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200"><X size={24} /></button>
      {children}
    </div>
  </div>
);

const AppliedModal = ({ onClose, internshipTitle }) => (
  <Modal onClose={onClose}>
    <div className="flex flex-col items-center justify-center space-y-4">
      <CheckCircle size={64} className="text-green-500 animate-zoom-in" />
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">Congratulations!</h2>
      <p className="text-center text-gray-600 dark:text-gray-400">You have successfully applied for the **{internshipTitle}** internship.</p>
      <button onClick={onClose} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 w-full mt-4">
        Awesome!
      </button>
    </div>
  </Modal>
);

const LoginModal = ({ onClose, setShowRegisterModal, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); handleLogin({ email, password }); };
  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-2">Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4"><label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="username">Email</label><input type="email" id="username" placeholder="user@example.com" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
        <div className="mb-6"><label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">Password</label><input type="password" id="password" placeholder="********" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors">Log In</button>
      </form>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">Don't have an account? <span onClick={() => { onClose(); setShowRegisterModal(true); }} className="text-blue-600 font-semibold cursor-pointer hover:underline">Register here</span></p>
    </Modal>
  );
};

const RegisterModal = ({ onClose, setShowLoginModal, handleRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match.");
      return;
    }
    handleRegister({ name, email, password, areaOfInterest });
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-2">Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="register-name">Name</label>
          <input type="text" id="register-name" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="register-email">Email</label>
          <input type="email" id="register-email" placeholder="user@example.com" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="areaOfInterest">Area of Interest</label>
          <select id="areaOfInterest" name="areaOfInterest" value={areaOfInterest} onChange={(e) => setAreaOfInterest(e.target.value)} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            <option value="">Select your area of interest</option>
            {areasOfInterest.map(area => <option key={area} value={area}>{area}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="register-password">Password</label>
          <input type="password" id="register-password" placeholder="********" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="********" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">Register</button>
      </form>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">Already have an account? <span onClick={() => { onClose(); setShowLoginModal(true); }} className="text-blue-600 font-semibold cursor-pointer hover:underline">Log in here</span></p>
    </Modal>
  );
};

const ProfilePage = ({ onSave, profileData, setCurrentPage }) => {
  const [formData, setFormData] = useState(profileData);
  const [customSkill, setCustomSkill] = useState('');

  useEffect(() => { setFormData(profileData); }, [profileData]);

  const calculateProfileCompletion = () => {
    const totalFields = 11;
    let completedFields = 0;
    if (formData.name) completedFields++;
    if (formData.email) completedFields++;
    if (formData.phone) completedFields++;
    if (formData.dob) completedFields++;
    if (formData.gender) completedFields++;
    if (formData.state) completedFields++;
    if (formData.city) completedFields++;
    if (formData.university) completedFields++;
    if (formData.qualification) completedFields++;
    if (formData.course) completedFields++;
    if (formData.skills && formData.skills.length > 0) completedFields++;
    return Math.floor((completedFields / totalFields) * 100);
  };
  const completionPercentage = calculateProfileCompletion();

  const handleAddSkill = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData(prevData => ({ ...prevData, skills: [...prevData.skills, skill] }));
      setCustomSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData(prevData => ({ ...prevData, skills: prevData.skills.filter(skill => skill !== skillToRemove) }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume' && files.length > 0) {
      setFormData(prevData => ({ ...prevData, [name]: files[0].name }));
    } else if (name === 'profilePhoto' && files.length > 0) {
      const photoUrl = URL.createObjectURL(files[0]);
      setFormData(prevData => ({ ...prevData, [name]: photoUrl }));
    } else {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };
  const handleSubmit = (e) => { e.preventDefault(); onSave(formData); };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center p-4 md:p-12 transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => setCurrentPage('home')} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
            <ArrowLeft size={20} className="mr-2" /><span className="font-semibold">Back to Home</span>
          </button>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">My Profile</h2>
          <div className="w-1/3"></div>
        </div>
        
        {/* Profile Completion Indicator */}
        <div className="mb-8">
            <h3 className="text-lg font-bold text-center text-gray-700 dark:text-gray-300 mb-2">Profile Completion: {completionPercentage}%</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${completionPercentage}%` }}></div>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-4">Profile Photo</label>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600">
              {formData.profilePhoto ? (
                <img src={formData.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <ImageIcon size={48} />
                </div>
              )}
              <input type="file" id="profilePhoto" name="profilePhoto" onChange={handleChange} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"/>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe"/>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="user@example.com"/>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(123) 456-7890"/>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="dob">Date of Birth</label>
              <div className="relative">
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <Calendar size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"/>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="state">State</label>
              <select id="state" name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select State</option>
                {states.map(state => <option key={state} value={state}>{state}</option>)}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="city">City</label>
              <select id="city" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select City</option>
                {formData.state && cities[formData.state]?.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="university">University</label>
              <input type="text" id="university" name="university" value={formData.university} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your University Name"/>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="qualification">Qualification</label>
              <select id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Qualification</option>
                {qualifications.map(q => <option key={q} value={q}>{q}</option>)}
              </select>
            </div>
            
            <div className="mb-4 col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="course">Course/Specialization</label>
              <select id="course" name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Course/Specialization</option>
                {courses[formData.qualification]?.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="mb-4 col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="skills">Skills</label>
              <div className="flex flex-wrap gap-2">
                {popularSkills.map(skill => (
                    <button type="button" key={skill} onClick={() => handleAddSkill(skill)} className={`text-xs px-3 py-1 rounded-full border transition-colors ${formData.skills.includes(skill) ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>{skill}</button>
                ))}
              </div>
              <div className="mt-4 flex space-x-2">
                <input type="text" placeholder="Add custom skill" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={customSkill} onChange={(e) => setCustomSkill(e.target.value)} />
                <button type="button" onClick={() => handleAddSkill(customSkill)} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">Add</button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {formData.skills.map(skill => (
                  <div key={skill} className="flex items-center bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium px-4 py-2 rounded-full">
                    {skill}
                    <button type="button" onClick={() => handleRemoveSkill(skill)} className="ml-2 text-blue-600 dark:text-blue-200 hover:text-red-500 dark:hover:text-red-400 transition-colors"><X size={16} /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="resume">Upload Resume</label>
              <div className="flex items-center space-x-4">
                <input type="file" id="resume" name="resume" onChange={handleChange} className="hidden" />
                <label htmlFor="resume" className="cursor-pointer bg-blue-50 text-blue-700 font-semibold py-2 px-4 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-300">Choose File</label>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{formData.resume || 'No file chosen'}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-8">
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-300">Save Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SuccessPopup = ({ message }) => (
  <div className="fixed top-20 right-4 z-50 animate-fade-in-down">
    <div className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2">
      <Sparkles size={20} />
      <p className="font-semibold">{message}</p>
    </div>
  </div>
);

const OurCoreIntelligence = () => (
  <section className="py-24 px-4 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 animate-fade-in-up">Our Core Intelligence</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up">
          <div className="text-blue-600 mb-4 inline-block"><TrendingUp size={48} /></div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Smart Matching</h3>
          <p className="text-gray-600 dark:text-gray-400">Our algorithm connects your profile to the perfect internship, ensuring a high-relevance score.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-blue-600 mb-4 inline-block"><Handshake size={48} /></div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Industry Partnerships</h3>
          <p className="text-gray-600 dark:text-gray-400">We partner with top companies to bring you exclusive internship opportunities you won't find anywhere else.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-blue-600 mb-4 inline-block"><Globe size={48} /></div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Global Reach</h3>
          <p className="text-gray-600 dark:text-gray-400">Whether it's remote or on-site, we have opportunities that span across the globe to kickstart your career.</p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 px-4 bg-white dark:bg-gray-950">
    <div className="container mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 animate-fade-in-up">How It Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-4">1</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Create Your Profile</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xs">Tell us about your skills, interests, and academic background.</p>
        </div>
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-4">2</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Get Matched</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xs">Our smart algorithm finds the perfect internship opportunities for you.</p>
        </div>
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold mx-auto mb-4">3</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Apply & Launch</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xs">Apply to your top choices and kickstart your Product Management career.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-200 dark:bg-gray-800 py-8">
    <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
      
      <p>&copy; {new Date().getFullYear()} PM Interns. ❤️ by Innoventures</p>

      <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
        <a href="/terms" className="hover:underline">Terms & Conditions</a>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/internships" className="hover:underline">Available Internships</a>
      </div>

      <div className="mt-4">
        <p>📧 Email: pminterns@gmail.com | 📞 Phone: +91 6306232526</p>
      </div>

    </div>
  </footer>
  
);

const AvailableInternshipsPage = ({ onApply }) => {
  const [filters, setFilters] = useState({
    location: '',
    mode: '',
    skills: '',
    role: '',
    minStipend: 0,
  });

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  const filteredInternships = allInternships.filter(internship => {
    const locationMatch = filters.location === '' || internship.location.includes(filters.location);
    const modeMatch = filters.mode === '' || internship.mode === filters.mode;
    const roleMatch = filters.role === '' || internship.title.toLowerCase().includes(filters.role.toLowerCase());
    const stipendMatch = internship.stipend >= filters.minStipend;
    
    let skillsMatch = true;
    if (filters.skills !== '') {
        const filterSkills = filters.skills.toLowerCase().split(',').map(s => s.trim());
        skillsMatch = filterSkills.some(filterSkill =>
            internship.skills.some(internshipSkill =>
                internshipSkill.toLowerCase().includes(filterSkill)
            )
        );
    }
    
    return locationMatch && modeMatch && roleMatch && stipendMatch && skillsMatch;
  });

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-28">
                <h2 className="text-xl font-bold mb-5 flex items-center text-gray-800 dark:text-gray-200"><Filter size={20} className="mr-2 text-gray-600 dark:text-gray-400" /> All Filters</h2>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" value={filters.location} onChange={(e) => handleFilterChange('location', e.target.value)}>
                        <option value="">All Locations</option>
                        {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mode</label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" value={filters.mode} onChange={(e) => handleFilterChange('mode', e.target.value)}>
                        <option value="">All Modes</option>
                        {modes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Skills</label>
                    <input type="text" placeholder="e.g., React, SQL" className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" value={filters.skills} onChange={(e) => handleFilterChange('skills', e.target.value)} />
                    <div className="mt-2 flex flex-wrap gap-2">
                        {popularSkills.map(skill => (
                            <button key={skill} onClick={() => handleFilterChange('skills', skill)} className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">{skill}</button>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role</label>
                    <input type="text" placeholder="e.g., Developer" className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" value={filters.role} onChange={(e) => handleFilterChange('role', e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Min. Monthly Stipend: {filters.minStipend} ₹</label>
                    <input type="range" min="0" max="50000" step="5000" value={filters.minStipend} onChange={(e) => handleFilterChange('minStipend', e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-500" />
                </div>
            </div>
        </aside>
        <section className="w-full md:w-3/4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Available Internships ({filteredInternships.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredInternships.length > 0 ? (
                    filteredInternships.map((internship) => <InternshipCard key={internship.id} internship={internship} onApply={onApply} />)
                ) : (
                    <div className="col-span-2 text-center text-gray-500 dark:text-gray-400 py-16">
                        <p className="text-lg">No internships found matching your criteria. Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>
        </section>
    </div>
  );
};

export default App;
