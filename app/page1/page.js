"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Page1() {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if (name.trim() === "") {
      setErrorMessage("Please enter your name!"); // Set error message
    } else if (
      name.trim().toLowerCase() === "terri" ||
      name.trim().toLowerCase() === "tergel" ||
      name.trim().toLowerCase() === "spiky" ||
      name.trim().toLowerCase() === "pookie"
    ) {
      setErrorMessage(""); // Clear error message
      router.push(`/page2?name=${encodeURIComponent(name)}`); // Pass name to page2
    } else {
      setErrorMessage("Sorry, this page is not for u!"); // Set error message
    }
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Step 1</title>
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>Step 1: Who Are You? 🤔</h1>
        <p style={styles.description}>Let us know your name:</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Next
          </button>
        </form>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>} {/* Conditionally render error message */}
      </main>
      <div style={styles.flowerBackground}></div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "0 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  main: {
    textAlign: "center",
    zIndex: 2,
  },
  title: {
    fontSize: "3rem",
    color: "#333",
  },
  description: {
    fontSize: "1.5rem",
    margin: "1rem 0",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  input: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "250px",
  },
  button: {
    padding: "0.75rem 2rem",
    fontSize: "1.25rem",
    color: "#fff",
    backgroundColor: "#0070f3",
    textDecoration: "none",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  flowerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url('/flower-pattern.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    opacity: 0.5,
  },
  errorMessage: {
    color: "#d9534f", // Red color for error message
    fontSize: "1.25rem",
    marginTop: "1rem",
  },
};
