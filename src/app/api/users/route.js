// app/api/people/route.js
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request) {
  // Creating an array of people
  const people = [
    { name: 'Alice', age: 30, gender: 'Female' },
    { name: 'Bob', age: 25, gender: 'Male' },
    { name: 'Charlie', age: 35, gender: 'Male' }
  ];

  // Returning the array as a JSON response
  return NextResponse.json(people);
}
