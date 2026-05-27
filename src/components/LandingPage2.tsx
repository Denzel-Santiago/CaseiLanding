import { GraduationCap, Users, Target, TrendingUp, Database, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function LandingPage2() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Gestión Académica<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                Inteligente
              </span> y Eficiente
            </h1>

            <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto">
              Revoluciona la forma en que tu universidad gestiona cargas académicas,
              asistencias y calificaciones con UPChiapas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-xl">
                Agenda tu demo gratuita
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white rounded-lg font-semibold hover:bg-white/30 transition-all">
                Conocer más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">El Reto Actual</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              ¿Por qué necesitas <span className="text-emerald-600">esta solución</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl shadow-lg border-2 border-red-100">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Estudiantes sin Rumbo Claro</h3>
              <p className="text-gray-700 leading-relaxed">
                Los alumnos irregulares con materias rezagadas navegan sin guía clara para armar
                su horario. Pierden tiempo valioso buscando manualmente qué grupos están abiertos
                y cuáles encajan con sus necesidades académicas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-3xl shadow-lg border-2 border-amber-100">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tutores Saturados de Trabajo Manual</h3>
              <p className="text-gray-700 leading-relaxed">
                El personal académico dedica horas interminables a revisar listas, verificar cupos,
                cruzar horarios y proponer cargas académicas viables. Un proceso agotador, propenso
                a errores y que limita el tiempo para la atención personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Nuestra Propuesta</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              La Solución que <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Necesitas</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/30">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Sistema Inteligente de Propuesta de Cargas Académicas
                  </h3>
                  <p className="text-lg text-emerald-50 leading-relaxed">
                    Olvídate del trabajo manual. Nuestro algoritmo inteligente analiza en segundos
                    las materias pendientes, evalúa grupos disponibles, considera restricciones de
                    horarios y genera automáticamente las mejores combinaciones posibles para cada alumno.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: "🎯", text: "Análisis automático de historial" },
                  { icon: "⚡", text: "Resultados en tiempo real" },
                  { icon: "🔄", text: "Múltiples combinaciones viables" },
                  { icon: "✨", text: "Optimización de horarios" }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <p className="text-sm font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alcances Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Todo lo que Necesitas</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Funcionalidades Completas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Gestión por Roles",
                desc: "Permisos personalizados para cada tipo de usuario del sistema",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Control de Asistencias",
                desc: "Seguimiento automático y reportes en tiempo real",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Gestión de Calificaciones",
                desc: "Captura, cálculo y visualización de evaluaciones",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Importación Masiva",
                desc: "Carga rápida de datos desde Excel y CSV",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Dashboards Inteligentes",
                desc: "Métricas clave adaptadas a tu rol",
                gradient: "from-violet-500 to-purple-500"
              },
              {
                title: "Módulo de Cargas",
                desc: "Propuestas automáticas inteligentes",
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}></div>
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usuarios Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Diseñado Para Ti</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Todos los Actores Educativos</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: "Directores",
                desc: "Reportes ejecutivos y toma de decisiones estratégicas",
                icon: "👔",
                color: "from-blue-500 to-cyan-500"
              },
              {
                role: "Tutores",
                desc: "Herramientas para acompañamiento y gestión de alumnos",
                icon: "📋",
                color: "from-emerald-500 to-teal-500"
              },
              {
                role: "Docentes",
                desc: "Control simplificado de asistencias y evaluaciones",
                icon: "👨‍🏫",
                color: "from-purple-500 to-pink-500"
              },
              {
                role: "Alumnos",
                desc: "Acceso inmediato a información académica personalizada",
                icon: "🎓",
                color: "from-orange-500 to-red-500"
              }
            ].map((user, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-purple-100 hover:border-purple-300 text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${user.color} rounded-full flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform`}>
                  {user.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{user.role}</h3>
                <p className="text-gray-600">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetización Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wide">Inversión Inteligente</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Modelos de Contratación Flexibles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm p-8 rounded-3xl border-2 border-emerald-400/30 hover:border-emerald-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Licencia Institucional</h3>
              <p className="text-emerald-100 mb-6 text-lg">
                Suscripción anual completa por campus, con precio ajustado al tamaño
                de tu institución. Sin costos ocultos.
              </p>
              <ul className="space-y-3">
                {[
                  "Costo único anual por campus",
                  "Actualizaciones automáticas incluidas",
                  "Soporte técnico prioritario 24/7",
                  "Capacitación inicial sin cargo"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-emerald-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-8 rounded-3xl border-2 border-purple-400/30 hover:border-purple-400/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Servicios Premium</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Potencia tu sistema con módulos avanzados y capacidades empresariales
                a la medida de tus necesidades.
              </p>
              <ul className="space-y-3">
                {[
                  "Reportes avanzados con BI",
                  "Integración con ERPs externos",
                  "Módulos personalizados a medida",
                  "Consultoría estratégica incluida"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-purple-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Tecnología de Punta</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Construido con lo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Mejor</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Next.js', color: 'from-black to-gray-700' },
              { name: 'React', color: 'from-cyan-500 to-blue-500' },
              { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
              { name: 'Tailwind CSS', color: 'from-teal-500 to-cyan-500' },
              { name: 'Supabase', color: 'from-emerald-500 to-green-600' }
            ].map((tech, idx) => (
              <div key={idx} className={`px-8 py-4 bg-gradient-to-r ${tech.color} text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105`}>
                <span className="text-lg font-bold">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border-2 border-slate-200">
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              <span className="font-bold text-emerald-600">Velocidad, seguridad y escalabilidad</span> garantizadas.
              Nuestro stack tecnológico está respaldado por millones de desarrolladores en todo el mundo
              y las empresas más innovadoras del planeta.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            El futuro de la gestión académica está aquí
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50 mb-10 leading-relaxed">
            Únete a las instituciones que ya están revolucionando su forma de trabajar.
            Ahorra tiempo, reduce errores y mejora la experiencia de toda tu comunidad educativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 text-lg">
              Agenda tu demo personalizada
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="px-10 py-5 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white rounded-xl font-bold hover:bg-white/30 transition-all flex items-center justify-center gap-2 text-lg">
              Explora todas las funcionalidades
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">UPChiapas</span>
          </div>
          <p className="text-sm">
            © 2026 Sistema de Gestión Académica UPChiapas. Innovación educativa con propósito.
          </p>
        </div>
      </footer>
    </div>
  );
}
