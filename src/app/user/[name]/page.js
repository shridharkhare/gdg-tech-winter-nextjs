'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"; 

export default function Page() {
    const params = useParams();
    const name = params.name;
    console.log("name", name);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.github.com/users/' + name);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const userData = await response.json();
          setData(userData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div style={{ textAlign: 'center' , border: '1px solid red', width: '400px',
        margin: 'auto', padding: '20px', borderRadius: '10px'
      }}>
        <img src={data.avatar_url} alt={`${data.name}'s avatar`} width="150" height="150" />
        <h2>{data.name}</h2>
        <p>{data.bio || 'No bio available'}</p>
        <p><strong>Followers:</strong> {data.followers}</p>
        <p><strong>Repos:</strong> {data.public_repos}</p>
      </div>
    );
    }