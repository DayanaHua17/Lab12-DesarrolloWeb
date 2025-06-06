export default function ReportesPage() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-slate-800 text-center">📊 Módulo de Reportes Generales</h1>

        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Desde este módulo podrás tener una visión completa del estado actual del sistema, incluyendo la cantidad de productos registrados, su disponibilidad en stock, rendimiento en ventas, y otros indicadores clave para la toma de decisiones estratégicas.
        </p>

        {/* Indicadores de alto nivel */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-lg p-5 border-l-4 border-blue-600">
            <h3 className="text-sm text-gray-500">Productos Registrados</h3>
            <p className="text-3xl font-semibold text-blue-700">128</p>
          </div>
          <div className="bg-white shadow rounded-lg p-5 border-l-4 border-green-600">
            <h3 className="text-sm text-gray-500">Stock Total</h3>
            <p className="text-3xl font-semibold text-green-700">3,250</p>
          </div>
          <div className="bg-white shadow rounded-lg p-5 border-l-4 border-yellow-600">
            <h3 className="text-sm text-gray-500">Categorías</h3>
            <p className="text-3xl font-semibold text-yellow-700">8</p>
          </div>
          <div className="bg-white shadow rounded-lg p-5 border-l-4 border-red-600">
            <h3 className="text-sm text-gray-500">Productos Agotados</h3>
            <p className="text-3xl font-semibold text-red-700">5</p>
          </div>
        </div>

        {/* Sección de explicación */}
        <div className="bg-white rounded-xl shadow p-8 space-y-6 mt-10">
          <h2 className="text-2xl font-bold text-slate-700">📌 ¿Qué puedes hacer aquí?</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Observar un resumen estadístico de tu inventario.</li>
            <li>Detectar productos con bajo stock o agotados.</li>
            <li>Consultar la evolución de tus registros en el tiempo.</li>
            <li>Prepararte para tomar decisiones basadas en datos reales.</li>
          </ul>
        </div>

        {/* Indicaciones o recordatorio */}
        <div className="text-center mt-10 text-sm text-gray-500">
          * Este módulo es informativo. Para realizar cambios, dirígete a la sección de productos o categorías.
        </div>
      </div>
    </section>
  );
}
