// app/page.tsx (ou app/home/page.tsx se estiver usando subpastas)
import Footer from "@/components/footer";
import GithubLoginSection from "@/components/github-button-singin";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="font-bold mt-20 mb-5 text-4xl md:text-5xl">
        <span className="tag">&copy;</span> M<span className="tag">'</span>DEV <span className="tag">APIs</span> REST
      </h1>
      <span className="text-center mb-20 max-w-[300px] md:max-w-[100%]">
        Explore nossos serviços para Bots de WhatsApp. Entre em uma <br /> conta gratuitamente.
      </span>
      <GithubLoginSection />
      <Footer />
    </div>
  );
}
