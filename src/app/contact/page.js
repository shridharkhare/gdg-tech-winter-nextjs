'use client'

import Link from 'next/link'

export default function Contact() {
    return (
        <div>
        <h1>This is the Contact Page</h1>
        <p>Connect with us at support@gmail.com</p>
        <br />
        <nav>
            <Link href="/">Home</Link> || 
            <Link href="../user">User Info</Link> || 
            <Link href="../contact">Contact</Link>
        </nav>
        </div>
    )
    }