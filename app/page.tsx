export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07090d",
        color: "#f6f8fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <section style={{ maxWidth: "900px" }}>
        <p
          style={{
            color: "#82f7c7",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontSize: "12px",
          }}
        >
          Personal Audio Intelligence
        </p>

        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 90px)",
            lineHeight: "0.98",
            letterSpacing: "-0.05em",
            margin: "24px 0",
          }}
        >
          Your ears are not average.
          <span
            style={{
              display: "block",
              color: "#9ea8b7",
            }}
          >
            Your headphones shouldn&apos;t be either.
          </span>
        </h1>

        <p
          style={{
            maxWidth: "650px",
            color: "#bec6d2",
            fontSize: "20px",
            lineHeight: "1.6",
          }}
        >
          HeadphonesBase helps you find headphones matched to your music,
          devices, environment and listening preferences.
        </p>

        <button
          type="button"
          style={{
            marginTop: "28px",
            padding: "16px 22px",
            border: "none",
            borderRadius: "10px",
            background: "#82f7c7",
            color: "#07110d",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Find My Sound
        </button>
      </section>
    </main>
  );
}
