import { useNavigate } from "react-router";
import styles from "./Login.module.scss";
import { useState, type FormEvent } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    // console.log(" Login attempt:", { email, password: "***" });

    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("email", email);
      navigate("/");
    }, 1000);

    // console.log(email, password);
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <div className={styles.loginContainer}>
      {/* Left Section - Logo and Illustration */}
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Lendsqr" />
        </div>
        <div className={styles.illustrationWrapper}>
          <img
            src="/illustration.svg"
            alt="Login illustration"
            className={styles.illustration}
          />
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className={styles.rightSection}>
        <div className={styles.formWrapper}>
          <h1 className={styles.heading}>Welcome!</h1>
          <p className={styles.subheading}>Enter details to login.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                autoComplete="email"
              />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`${styles.input} ${styles.passwordInput}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.showButton}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  SHOW
                </button>
              </div>
            </div>

            <button
              type="button"
              className={styles.forgotPassword}
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
