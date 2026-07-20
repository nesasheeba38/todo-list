import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page animate-fade-in" style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 className="page-title" style={{ fontSize: "5rem", fontWeight: 800, background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 auto 1rem" }}>
        404
      </h1>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Page Not Found</h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary" style={{ textDecoration: "none", display: "inline-flex" }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;