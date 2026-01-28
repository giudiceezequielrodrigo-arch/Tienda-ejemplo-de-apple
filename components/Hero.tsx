
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 text-center bg-white">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-orange-600 font-semibold tracking-tight text-sm uppercase">Lo último de Apple</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-apple-black">iPad Pro</h1>
        <p className="text-xl md:text-2xl text-apple-gray font-medium max-w-2xl mx-auto">
          Extraordinariamente fino. Potencia descomunal con el chip M4 de última generación.
        </p>
        <div className="flex justify-center items-center space-x-8 pt-6">
          <button className="btn-primary">
            Más información
          </button>
          <button className="btn-secondary text-lg">
            Comprar <span>&rsaquo;</span>
          </button>
        </div>
      </div>
      <div className="mt-16 max-w-6xl mx-auto px-4">
        <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1400" 
              alt="iPad Pro" 
              className="rounded-3xl shadow-2xl mx-auto transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
