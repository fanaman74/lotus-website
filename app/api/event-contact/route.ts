import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, phone, event_type, event_date, guests, message } = body;

    if (!first_name || !last_name || !email || !event_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = createServerClient();
    const { error } = await supabase.from('lotus_event_requests').insert({
      first_name,
      last_name,
      email,
      phone: phone || null,
      event_type,
      event_date: event_date || null,
      guests: guests ? parseInt(guests, 10) : null,
      message: message || null,
      status: 'pending',
    });

    if (error) {
      console.error('Event request insert error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
