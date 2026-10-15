import { NextResponse } from "next/server";

export async function GET() {
    const products = [
        { id: 1, name: 'Teclado Mecânico' },
        { id: 2, name: 'Mouse Gamer' },
    ];

    return NextResponse.json(products);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        return NextResponse.json(
            { message: 'Produto criado com sucesso!', data: body },
            { status: 201 }
        );
    }
    catch (e) {
        return NextResponse.json(
            { status: 403 }
        );
    }

}