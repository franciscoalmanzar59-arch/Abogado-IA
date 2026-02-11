'use client';

import { useRouter } from 'next/navigation';
import { Scale, FileText, AlertCircle } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white p-6">
      <div className="max-w-2xl mx-auto pt-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Scale className="w-20 h-20" />
          </div>
          <h1 className="text-5xl font-bold mb-3">Abogado IA</h1>
          <p className="text-xl text-blue-200">
            Tu guía legal clara y directa. Te explico la ley en lenguaje simple para que sepas qué hacer.
          </p>
        </div>

        {/* Qué hace */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            ¿Qué hago?
          </h2>
          <ul className="space-y-2 text-blue-100">
            <li>✅ Explico la ley en lenguaje claro</li>
            <li>✅ Te digo qué te corresponde por ley</li>
            <li>✅ Te doy pasos concretos</li>
            <li>✅ Te ayudo en: Tránsito, Laboral, Vivienda, Familia, Aduanas, Contratos</li>
            <li>✅ Te indico cuándo necesitas o no un abogado</li>
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={() => router.push('/pais')}
          className="w-full bg-white text-blue-900 font-bold text-xl py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg"
        >
          EMPEZAR
        </button>

        {/* Disclaimer */}
        <p className="text-xs text-blue-300 text-center mt-6">
          Abogado IA es una herramienta educativa e informativa. No constituye asesoría legal profesional ni representación jurídica.
        </p>
      </div>
    </div>
  );
}
