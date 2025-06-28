'use client';
import Image from "next/image";
import Logout from "../logout-button";

export default function Navbar(data: { profile: string, username: string }) {
    return (
        <header className="w-full bg-[#131313] h-18 pl-5 pr-5 flex items-center justify-between top-0 sticky">
            <h1 className="font-bold text-2xl"><span className="tag">&copy;</span> M<span className="tag">'</span>DEV <span className="tag">APIs</span></h1>
            <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                    <span className="font-semibold">{data.username}</span>
                    <span className="tag text-[14px]">Developer</span>
                </div>
                <Image className="rounded-[50%] border-2 p-1 border-amber-200" height={50} width={50} src={data.profile} alt="profile" />
                <Logout />
            </div>
        </header>
    )
}