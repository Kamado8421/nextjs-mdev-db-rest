// app/api/datauser/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createDataUserManager } from '@/services/data-users.service';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email não fornecido' }, { status: 400 });
  }

  try {
    const dataUser = await createDataUserManager(email);
    return NextResponse.json(dataUser);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar banco' }, { status: 500 });
  }
}
