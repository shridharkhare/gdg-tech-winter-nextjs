'use client'

import Navbar from '@/components/navbar';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/message?name=${name}&message=${message}`);
        const data = await res.json();
        setResponse(data.response);
      };
  
    return (
        <div>
        <h1>This is the Contact Page</h1>
        <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ marginRight: '10px' }}
        />

        <textarea 
          placeholder="Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
        <br />
        <Navbar />
        </div>
    )
    }