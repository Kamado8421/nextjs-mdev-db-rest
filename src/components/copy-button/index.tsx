'use client'

export default function CopyButton({ text }: { text: string }) {

    function copyToClipboard(text: string) {
        if (typeof window === 'undefined' || !navigator?.clipboard) {
            console.warn('Clipboard API não está disponível');
            return;
        }

        navigator.clipboard.writeText(text)
            .then(() => {
                alert('DB-Key copiada com sucesso!');
            })
            .catch((err) => {
                console.error('Erro ao copiar texto:', err);
            });
    }

    return <button
        style={{ width: 100, padding: 4, borderRadius: 8 }}
        className="cursor-pointer font-semibold bg-blue-900 text-[14px]"
        onClick={() => copyToClipboard(text)}
    >
        copy
    </button>

}