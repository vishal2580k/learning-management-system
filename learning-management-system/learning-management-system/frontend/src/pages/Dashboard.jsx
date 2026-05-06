import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const sampleCourses = [
  { id: 1, title: "Introduction to Java", description: "Core Java concepts from scratch.", category: "Programming" },
  { id: 2, title: "Spring Boot Basics", description: "Build REST APIs with Spring Boot.", category: "Backend" },
  { id: 3, title: "React Fundamentals", description: "Learn React components, hooks and routing.", category: "Frontend" },
  { id: 4, title: "PostgreSQL for Beginners", description: "Database design and SQL queries.", category: "Database" },
];

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>🎓 Learning Management System</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="welcome-card">
        <h3>Welcome back, {user?.name || "Student"}! 👋</h3>
        <p>Role: {user?.role} &nbsp;|&nbsp; Email: {user?.email}</p>
      </div>

      <div className="courses-section">
        <h3>📚 Available Courses</h3>
        {sampleCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <span className="badge">{course.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
