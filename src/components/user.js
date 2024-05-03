import { useState } from "react";
import "../styles.css";
import { Button, Text } from "@chakra-ui/react";

const GithubAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
        }),
      });

      const data = await response.json();

      if (data) {
        localStorage.setItem("auth", username);
        setLoading(false);
        setAuth(true);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during login", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth(false);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "white" }}>
      <div className="container py-5 h-50">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-10">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                {auth ? (
                  <>
                    <Text> Hello, {localStorage.getItem("auth")}!</Text>
                    <div className="d-flex  align-center justify-content-center">
                      <Button onClick={handleLogout} colorScheme="blue">
                        Logout
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4 gap-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        Remember password
                      </label>
                    </div>

                    <div className="d-flex  align-center justify-content-center">
                      <Button
                        onClick={handleLogin}
                        colorScheme="blue"
                        isLoading={loading}
                      >
                        Login
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GithubAuth;
