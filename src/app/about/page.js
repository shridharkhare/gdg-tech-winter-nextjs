"use client";
import Link from "next/link";

export default function Page2() {
  return (
    <div>
      <h1>This is the about Page</h1>
      <br />
      <nav>
        <Link href="/">Home</Link> || 
        <Link href="../user">User Info</Link> || 
        <Link href="../contact">Contact</Link>
      </nav>
    </div>
  );
}
