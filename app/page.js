export default function HomePage() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold text-indigo-700">
          Bienvenido al Sistema de Gestión de Productos
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Este sistema fue diseñado para ayudarte a llevar un control detallado de tus productos,
          categorías y stock. Desde esta plataforma puedes agregar, editar, eliminar y analizar tus productos
          de manera rápida y eficiente.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-left border-t-4 border-indigo-500">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🔍 Control de Inventario</h2>
            <p className="text-gray-600">Visualiza y organiza tus productos con stock actualizado en tiempo real.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-left border-t-4 border-green-500">
            <h2 className="text-xl font-semibold text-green-700 mb-2">➕ Registro Ágil</h2>
            <p className="text-gray-600">Agrega nuevos productos fácilmente con un formulario intuitivo.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-left border-t-4 border-yellow-500">
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">📊 Reportes Detallados</h2>
            <p className="text-gray-600">Consulta estadísticas clave para tomar decisiones inteligentes.</p>
          </div>
        </div>

        {/* Nueva sección */}
        <div className="mt-20 text-left bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">✨ Beneficios del Sistema</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Interfaz amigable y adaptada a dispositivos móviles.</li>
            <li>Operaciones CRUD rápidas y seguras.</li>
            <li>Visualización clara de datos por tablas interactivas.</li>
            <li>Integración con base de datos MySQL usando Prisma ORM.</li>
            <li>Fácil despliegue y mantenimiento con tecnologías modernas como Next.js.</li>
          </ul>
        </div>

        {/* Llamado a la acción */}
        <div className="mt-16 bg-indigo-100 py-10 px-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-2">¿Listo para comenzar?</h3>
          <p className="text-gray-700 mb-4">
            Dirígete al panel de productos y comienza a gestionar tu inventario de manera eficiente.
          </p>
          <a
            href="/almacen/producto"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Ir al Panel de Productos
          </a>
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-500 mt-20">
          © 2025 Sistema de Gestión CRUD. Proyecto académico desarrollado por tu equipo.
        </footer>
      </div>
    </section>
  );
}
