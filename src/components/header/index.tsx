import Link from "next/link"

export function Header() {
    return (
        <header className="bg-black text-white py-5">
            <div className="flex justify-between px-10">
                <div>NextJS</div>

                <nav >
                    <ul className="flex gap-4">
                        <li>
                            <Link href={'home'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'contato'}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}