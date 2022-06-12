import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Home: NextPage = () => {
  const { isAuthenticated, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        height: "97vh",
        color: "#fff",
      }}
    >
      Email
      <input
        type="email"
        style={{ marginBottom: "2rem", marginTop: "4px" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      Senha
      <input
        type="password"
        style={{ marginTop: "4px" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" style={{ marginTop: "10px", cursor: "pointer" }}>
        Enviar
      </button>
    </form>
  );
};

export default Home;
