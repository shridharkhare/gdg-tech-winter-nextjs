"use client";
import Hello from "@/components/Hello";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/page2">Go to Page2</Link>
      <br />
      <a href="/page2">Go to Page2</a>
      <Hello />
    </div>
  );
}
