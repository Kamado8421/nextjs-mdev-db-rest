import CopyButton from "@/components/copy-button";
import CreateDBButton from "@/components/create-db-button";
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { getDataUserManagerByEmail } from "@/services/data-users.service";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function DashBoard() {
    const session = await getServerSession()

    if (!session?.user) return redirect('/')

    const dataUsers = await getDataUserManagerByEmail(session?.user?.email || '');

    var usersRows: { jid: "user1@whatsapp.net", nome: "João", premium: true, dono: false, xp: 1500, saldo: 120, banido: false }[] = []
    if (dataUsers) {
        usersRows = []
    }

    return (
        <div>
            <Navbar
                profile={session.user.image || ''}
                username={session.user.name || 'Seja Bem-vindo(a)'}
            />

            <main className="h-full pl-[20px] pr-[20px]">
                <h1 className="font-bold text-4xl mt-10">Dashboard</h1>
                <span className="desc text-[#505050]">Gerencie seu banco de usuários com nossa API.</span>

                <div>
                    <div className="bg-[#131313] p-5 rounded-[8px] max-w-[500px] mt-10">

                        {dataUsers ?
                            <>
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-semibold">Banco de Dados</h1>
                                    <span>Usuários: {usersRows.length}/100</span>
                                </div>
                                <button style={{ backgroundColor: '#19416e', color: 'white' }} className="btn mt-2.5 bg-[#19416e]">Documentação de uso</button>
                            </>
                            :
                            <>
                                <h1 className="text-2xl font-semibold">Banco de Dados</h1>
                                <CreateDBButton email={session.user?.email || ''} />
                            </>

                        }

                        {dataUsers &&
                            <div className="flex items-center justify-between p-[10px] mt-4">
                                <span><span className="font-semibold text-[#7b7b7b] text-[14px]">🔑 Sua DB-Key: </span>**************************</span>
                                <CopyButton text={dataUsers.accessKey} />
                            </div>
                        }
                    </div>
                </div>

                {dataUsers && usersRows.length > 0 &&

                    <div className="overflow-x-auto mt-10">
                        <table className="min-w-full border border-gray-700 rounded-md overflow-hidden text-sm">
                            <thead className="bg-[#1e1e1e] text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left"></th>
                                    <th className="px-4 py-2 text-left">JID</th>
                                    <th className="px-4 py-2 text-left">Nome</th>
                                    <th className="px-4 py-2 text-left">Premium</th>
                                    <th className="px-4 py-2 text-left">Dono</th>
                                    <th className="px-4 py-2 text-left">XP</th>
                                    <th className="px-4 py-2 text-left">Saldo</th>
                                    <th className="px-4 py-2 text-left">Banido</th>
                                    <th className="px-4 py-2 text-left"></th>
                                </tr>
                            </thead>
                            <tbody className="text-white">
                                {usersRows.map((user, idx) => (
                                    <tr key={idx} className="border-t border-gray-700 hover:bg-[#202020]">
                                        <td className="px-4 py-2">{idx + 1}</td>
                                        <td className="px-4 py-2">{user.jid}</td>
                                        <td className="px-4 py-2">{user.nome}</td>
                                        <td className="px-4 py-2">
                                            <span className={`inline-block w-5 h-5 rounded-full ${user.premium ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                        </td>
                                        <td className="px-4 py-2">
                                            <span className={`inline-block w-5 h-5 rounded-full ${user.dono ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                        </td>
                                        <td className="px-4 py-2">{user.xp}</td>
                                        <td className="px-4 py-2">R$ {user.saldo}</td>
                                        <td className="px-4 py-2">
                                            <span className={`inline-block w-5 h-5 rounded-full ${user.banido ? 'bg-red-500' : 'bg-green-500'}`}></span>
                                        </td>
                                        <td className="px-4 py-2 flex gap-2">
                                            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 py-1 rounded-md">
                                                ✏️
                                            </button>
                                            <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md">
                                                🗑️
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                }

                {dataUsers && usersRows.length === 0 && <h1 className="mt-5">Você não possui usuário.</h1>}


            </main>

            <Footer />
        </div>
    )




}