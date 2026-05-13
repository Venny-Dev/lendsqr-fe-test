import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const email = localStorage.getItem("email") || "";

  useEffect(() => {
    if (!email) {
      navigate("/auth");
      return;
    }
  }, [email, navigate]);

  return <>{children}</>;
}

export default ProtectedRoute;
