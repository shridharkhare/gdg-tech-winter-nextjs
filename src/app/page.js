"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is the Home Page</h1>
      <br />
      <Navbar />
      <hr />
      <p>Toggle Visible</p>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This is some content!</p>}
      <hr />
      <p>Counter</p>

      <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
    </div>
  );
}
