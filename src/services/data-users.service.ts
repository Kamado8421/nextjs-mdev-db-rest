import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Busca um DataUserManager pela accessKey.
 */
export async function getDataUserManagerByAccessKey(accessKey: string) {
  try {
    const manager = await prisma.dataUserManager.findUnique({
      where: { accessKey },
      include: {
        user: true,       // dono
        dataTable: true,  // usuários ligados
      },
    });

    return manager ?? null;
  } catch (error) {
    console.error('Erro ao buscar DataUserManager por accessKey:', error);
    return null;
  }
}

/**
 * Busca um DataUserManager pelo e‑mail do usuário dono.
 * Retorna o primeiro encontrado (caso exista mais de um).
 */
export async function getDataUserManagerByEmail(email: string) {
  try {
    const manager = await prisma.dataUserManager.findFirst({
      where: {
        user: {           // faz join implícito na tabela User
          email,
        },
      },
      include: {
        user: true,
        dataTable: true,
      },
    });

    return manager ?? null;
  } catch (error) {
    console.error('Erro ao buscar DataUserManager por email:', error);
    return null;
  }
}

export async function createDataUserManager(email: string) {
  try {
    // Verifica se o usuário existe
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error(`Usuário com e-mail ${email} não encontrado`);
    }

    // Cria o DataUserManager associado ao usuário
    const manager = await prisma.dataUserManager.create({
      data: {
        userId: user.id, // associando o user existente
        // accessKey será gerado automaticamente (UUID)
        // totalRequests: 0 — já é default
      },
      include: {
        user: true,
        dataTable: true,
      },
    });

    return manager;
  } catch (error) {
    console.error('Erro ao criar DataUserManager:', error);
    throw new Error('Erro ao criar DataUserManager');
  }
}

