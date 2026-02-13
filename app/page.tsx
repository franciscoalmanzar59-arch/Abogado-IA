use client
import { useState } from 'react'
import { Scale, Upload, Shield, Zap } from 'lucide-react'
export default function Home() {
const [pais, setPais] = useState(null)
const [archivo, setArchivo] = useState(null)
return (
<div className="min-h-screen bg-slate-50 p-5 font-sans text-gray-900">
<div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
<div className="text-center mb-8">
<div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
<Scale className="text-white" size={32} />
</div>
<h1 className="text-2xl font-bold">Abogado IA</h1>
<p className="text-gray-500 text-sm italic">Tu guía legal automática</p>
</div>
<div className="mb-8">
<label className="block text-sm font-bold mb-3 text-center">1. Selecciona tu País</label>
<div className="grid grid-cols-2 gap-3">
<button onClick={() => setPais('MX')} className={p-4 rounded-xl border-2 transition-all font-bold ${pais === 'MX' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-100 text-gray-400'}}>🇲🇽 México</button>
<button onClick={() => setPais('RD')} className={p-4 rounded-xl border-2 transition-all font-bold ${pais === 'RD' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-100 text-gray-400'}}>🇩🇴 R. Dom.</button>
</div>
</div>
<div className="mb-8">
<label className="block text-sm font-bold mb-3 text-center">2. Sube el Contrato</label>
<div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center">
<input type="file" id="f" className="hidden" onChange={(e) => setArchivo(e.target.files[0])} />
<label htmlFor="f" className="cursor-pointer">
<Upload className="mx-auto text-gray-300 mb-3" size={48} />
<p className="text-sm text-gray-400 font-medium">{archivo ? archivo.name : 'Toca aquí'}</p>
</label>
</div>
</div>
<button onClick={() => alert('¡Analizando!')} className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-xl">
ANALIZAR AHORA
</button>
<div className="flex justify-around mt-10 text-[10px] text-gray-400 uppercase font-bold">
<div className="flex flex-col items-center gap-1"><Shield size={16} className="text-green-400" /> Privado</div>
<div className="flex flex-col items-center gap-1"><Zap size={16} className="text-yellow-400" /> Rápido</div>
</div>
</div>
</div>
)
}
]]`