'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ListaProductosPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/api/productos')
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🧾 Listado de Productos</h1>

        <div className="flex justify-end mb-6">
          <Link
            href="/almacen/producto/nuevo"
            className="bg-sky-200 text-black hover:bg-sky-300 hover:text-black transition-all px-5 py-2 rounded shadow"
          >
            ➕ Nuevo Producto
          </Link>
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Nombre</th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Precio (S/)</th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Categoría</th>
                <th className="px-6 py-3 text-center text-sm font-medium uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {productos.map((prod) => (
                <tr key={prod.id} className="hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 text-sm">{prod.id}</td>
                  <td className="px-6 py-4 text-sm">{prod.nombre}</td>
                  <td className="px-6 py-4 text-sm">S/. {prod.precio.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">{prod.stock}</td>
                  <td className="px-6 py-4 text-sm">{prod.idCategoria}</td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <Link
                      href={`/almacen/producto/${prod.id}/editar`}
                      className="bg-sky-200 hover:bg-sky-300 text-black px-4 py-1 rounded text-sm"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={async () => {
                        if (confirm('¿Estás seguro de eliminar este producto?')) {
                          await fetch(`/api/productos/${prod.id}`, { method: 'DELETE' });
                          setProductos(productos.filter((p) => p.id !== prod.id));
                        }
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              {productos.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-400 text-sm">
                    No hay productos registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
