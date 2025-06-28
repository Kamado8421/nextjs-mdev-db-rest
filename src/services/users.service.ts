import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getOrCreateUser({
  email,
  name,
  urlProfile,
  isAdmin = false
}: {
  email: string;
  name: string;
  urlProfile: string;
  isAdmin?: boolean;
}) {
  try {
    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return existingUser; // já existe, retorna o usuário
    }

    // Cria novo usuário
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        urlProfile: urlProfile || undefined,
        isAdmin
      }
    });

    return newUser;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw new Error("Erro ao criar usuário");
  }
}
