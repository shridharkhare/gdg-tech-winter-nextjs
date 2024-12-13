'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link> || 
            <Link href="/about">About</Link> ||
            <Link href="/user">GitHub Card</Link> || 
            <Link href="/contact">Contact</Link>
        </nav>
    )
}