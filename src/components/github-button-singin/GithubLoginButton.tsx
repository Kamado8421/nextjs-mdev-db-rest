'use client';

import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';

export default function GithubLoginButton() {
  return (
    <button
      onClick={() => signIn('github')}
      style={{ transition: '0.3s' }}
      className='bg-black flex items-center cursor-pointer gap-4 pl-10 pr-10 h-12 border-white border-[1.5px] rounded-[8px] hover:bg-[#1d1d1d]'
    >
      <FaGithub size={30} className="text-white" />
      <span className="font-semibold text-white">Entrar com GitHub</span>
    </button>
  );
}
