import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dbkey = searchParams.get('dbkey');

  if (!dbkey) {
    return NextResponse.json({ error: 'dbkey não fornecida' }, { status: 400 });
  }

  try {
    const manager = await prisma.dataUserManager.findUnique({
      where: { accessKey: dbkey },
      include: { dataTable: true }, // para trazer os usuários associados
    });

    if (!manager) {
      return NextResponse.json({ error: 'dbkey inválida' }, { status: 404 });
    }

    return NextResponse.json(manager.dataTable); // retorna os usuários associados ao dono do dbkey
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}





