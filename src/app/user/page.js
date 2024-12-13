'use client';

import Link from "next/link";

export default function User(){

    return (
        <div>
            <h1>This is the User Page</h1>
            <br />
            <form action="./page/{name}">
                <label>
                    Enter GitHub Username: 
                </label>
                <input type="text" name="name" />
            </form>
            <br />
            <br />
            <nav>
                <Link href="/">Home</Link> || 
                <Link href="../user">User Info</Link> || 
                <Link href="../contact">Contact</Link>
            </nav>
        </div>
    )
}