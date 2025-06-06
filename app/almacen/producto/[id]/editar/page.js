'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditarProducto({ params }) {
  const router = useRouter();
  const { id } = params;

  const [producto, setProducto] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
    idCategoria: ""
  });

  useEffect(() => {
    fetch(`/api/productos/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setForm({
          nombre: data.nombre,
          precio: data.precio,
          stock: data.stock,
          idCategoria: data.idCategoria
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        precio: parseFloat(form.precio),
        stock: parseInt(form.stock),
        idCategoria: parseInt(form.idCategoria),
      }),
    });
    router.push("/almacen/producto");
    router.refresh();
  };

  if (!producto) return <p className="text-center py-8 text-gray-500">Cargando producto...</p>;

  return (
    <section className="min-h-screen py-12 px-6 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">✏️ Editar Producto</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Precio (S/)</label>
            <input
              type="number"
              name="precio"
              value={form.precio}
              onChange={handleChange}
              step="0.01"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Stock</label>
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">ID Categoría</label>
            <input
              type="number"
              name="idCategoria"
              value={form.idCategoria}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-black text-white hover:bg-yellow-500 hover:text-black px-6 py-2 rounded transition-all"
            >
              Guardar Cambios
            </button>
            <button
              type="button"
              onClick={() => router.push("/almacen/producto")}
              className="text-gray-500 hover:underline"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
