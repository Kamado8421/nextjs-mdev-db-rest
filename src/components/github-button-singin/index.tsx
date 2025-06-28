import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import GithubLoginButton from './GithubLoginButton';
import { getOrCreateUser } from '@/services/users.service';

export default async function GithubLoginSection() {
  const session = await getServerSession();

  if (session?.user) {
    const user = await getOrCreateUser({
      name: session.user.name || 'Usuário Desconhecido',
      email: session.user.email || '',
      urlProfile: session.user.image || ''
    })
    
    console.log(user);

    redirect('/dashboard');
  }

  return <GithubLoginButton />;
}
