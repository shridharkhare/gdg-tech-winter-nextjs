"use client";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState(""); // State to hold input value
  const router = useRouter(); // Next.js router for navigation

  const handleRedirect = () => {
    if (name) {
      router.push(`/user/${name}`); // Redirect to the dynamic route
    } else {
      alert("Please enter a name!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Enter GitHub Username</h1>
        <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ex. google"
        style={{
          padding: "10px",
          fontSize: "16px",
          marginRight: "10px",
          width: "250px",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={handleRedirect}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to User Page
      </button>
        <br />
        <Navbar />
    </div>
  );
}
