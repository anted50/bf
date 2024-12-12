"use client";
import Head from "next/head";
import { useState } from "react";
import confetti from "canvas-confetti";
import { Fireworks } from "fireworks-js";

export default function Home() {
  const [response, setResponse] = useState(null);

  const handleYes = () => {
    setResponse("YES!!! 🎉💕");
    const container = document.getElementById("fireworks-container");
    const fireworks = new Fireworks(container, { speed: 3 });
    fireworks.start();
    setTimeout(() => fireworks.stop(), 3000);
    launchConfetti();
    for (let i = 0; i < 30; i++) {
      const emoji = document.createElement("div");
      emoji.textContent = ["💖", "🎉", "✨", "💕"][
        Math.floor(Math.random() * 4)
      ];
      emoji.style.position = "absolute";
      emoji.style.left = `${Math.random() * 100}vw`;
      emoji.style.top = `${Math.random() * 100}vh`;
      emoji.style.fontSize = "2rem";
      emoji.style.animation = "floatUp 1s ease-out forwards";
      document.body.appendChild(emoji);
      setTimeout(() => emoji.remove(), 1000);
    }
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 550,
      spread: 120,
      origin: { y: 0.6 },
      emojis: ["💖", "🎉", "✨", "❤️"],
      useWorker: true,
    });
  };

  const handleNo = () => {
    setResponse("No 😢 Maybe we can talk?");
    const yesButton = document.getElementById("yesButton");
    yesButton.style.animation = "wiggle 1s ease infinite";
  };

  const swapButtons = () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    // Swap positions
    const yesButtonStyle = window.getComputedStyle(yesButton);
    const noButtonStyle = window.getComputedStyle(noButton);

    const yesTop = yesButtonStyle.top;
    const yesLeft = yesButtonStyle.left;

    yesButton.style.top = noButtonStyle.top;
    yesButton.style.left = noButtonStyle.left;

    noButton.style.top = yesTop;
    noButton.style.left = yesLeft;
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>Will You Be My BF?</title>
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>Will You Be My Boyfriend? 🥰</h1>
        <p style={styles.description}>Choose your destiny:</p>
        <div style={styles.buttonContainer}>
          <button
            style={{ ...styles.yesButton, animation: "heartbeat 2s infinite" }}
            onClick={handleYes}
            id="yesButton"
          >
            Yes
          </button>
          <button style={styles.noButton} onClick={handleNo} id="noButton">
            No
          </button>
        </div>
        {/* <div style={{ position: 'relative', height: '200px' }}> */}
        {/* <button
    id="yesButton"
    style={{ position: 'absolute', top: '50px', left: '50px' }}
    onClick={handleYes}
  >
    Yes
  </button>
  <button
    id="noButton"
    style={{ position: 'absolute', top: '50px', left: '150px' }}
    
  >
    No
  </button>
</div> */}

        {response && <p style={styles.response}>{response}</p>}
      </main>

      <footer style={styles.footer}>
        <p>Made with 💖 by AntHead</p>
        <p>Also there is no backing out now</p>
      </footer>
      <div style={styles.flowerBackground}></div>
      <div
        id="fireworks-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>

      <style jsx global>{`
        @keyframes heartbeat {
          0%,
          50%,
          100% {
            transform: scale(1);
          }
          25%,
          75% {
            transform: scale(1.1);
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }
        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .container {
          background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb);
          background-size: 300% 300%;
          animation: gradientBG 8s ease infinite;
        }
      `}</style>
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
  buttonContainer: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  yesButton: {
    padding: "1rem 2rem",
    fontSize: "1.25rem",
    color: "#fff",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  noButton: {
    padding: "1rem 2rem",
    fontSize: "1.25rem",
    color: "#fff",
    backgroundColor: "#f44336",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  response: {
    marginTop: "2rem",
    fontSize: "2rem",
    color: "#333",
  },
  footer: {
    marginTop: "3rem",
    fontSize: "1rem",
    color: "#888",
    zIndex: 2,
  },
  flowerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/flower-pattern.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    opacity: 0.5,
  },
};
