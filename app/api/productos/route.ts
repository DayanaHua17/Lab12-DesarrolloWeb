import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

// GET: obtener todos los productos
export async function GET() {
  const productos = await prisma.producto.findMany();
  return NextResponse.json(productos);
}

// POST: crear un nuevo producto
export async function POST(request: Request) {
  const data = await request.json();

  const nuevo = await prisma.producto.create({
    data: {
      nombre: data.nombre,
      precio: data.precio,
      stock: data.stock,
      idCategoria: data.idCategoria,
    },
  });

  return NextResponse.json(nuevo);
}
