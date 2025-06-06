import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

// GET: obtener un producto por ID
export async function GET(_, { params }) {
  const id = parseInt(params.id);
  const producto = await prisma.producto.findUnique({
    where: { id }
  });

  if (!producto) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }

  return NextResponse.json(producto);
}

// PUT: actualizar un producto por ID
export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const data = await request.json();

  const actualizado = await prisma.producto.update({
    where: { id },
    data: {
      nombre: data.nombre,
      precio: data.precio,
      stock: data.stock,
      idCategoria: data.idCategoria,
    },
  });

  return NextResponse.json(actualizado);
}

// DELETE: eliminar un producto por ID
export async function DELETE(_, { params }) {
  const id = parseInt(params.id);

  await prisma.producto.delete({
    where: { id }
  });

  return NextResponse.json({ mensaje: "Producto eliminado" });
}
