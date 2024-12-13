// app/api/message/route.js
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request) {
  // Get query parameters from the request URL
  const { searchParams } = new URL(request.url);

  // Extract 'name' and 'message' from query parameters
  const name = searchParams.get('name');
  const message = searchParams.get('message');

  // If name or message is missing, return an error message
  if (!name || !message) {
    return NextResponse.json({ response: 'Both name and message are required' }, { status: 400 });
  }

  // Format the response
  const responseMessage = `${name} said "${message}"`;

  // Return the formatted message as a JSON response
  return NextResponse.json({ response: responseMessage });
}
