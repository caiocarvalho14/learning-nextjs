import Link from "next/link"

export default function NotFound() {
    return (<div className="bg-black min-h-screen text-white font-bold flex justify-center items-center">
        <div className="text-center">
            404 Página Não encontrada (página personalizada)
            <br />
            <Link href={'/home'}>
                Voltar para home
            </Link>
        </div>
    </div>)
}