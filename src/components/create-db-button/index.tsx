'use client'

import { createDataUserManager } from "@/services/data-users.service";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function CreateDBButton({ email }: { email: string }) {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleCreateDB = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/data-manager', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const result = await res.json();
            if (res.ok) {
                console.log('Criado com sucesso:', result);
                // fazer algo, ex: refresh da página
            } else {
                alert(result.error || 'Erro ao criar banco');
            }
        } catch (err) {
            console.error(err);
            alert('Erro interno');
        }
        setIsLoading(false);
        router.refresh();
    };

    return <button className="btn mt-2.5" disabled={isLoading} onClick={handleCreateDB}>{isLoading ? 'Carregando...' : 'Criar Banco de Usuários'}</button>
}