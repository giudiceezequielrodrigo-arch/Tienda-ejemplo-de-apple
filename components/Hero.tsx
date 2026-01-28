
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 px-4 text-center bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <h2 className="text-orange-600 font-bold tracking-tight text-sm uppercase">Nuevo</h2>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-apple-black leading-tight">iPad Pro</h1>
        <p className="text-xl md:text-2xl text-apple-gray font-medium max-w-2xl mx-auto leading-relaxed">
          Extraordinariamente fino. Potencia descomunal con el chip M4.
        </p>
        <div className="flex justify-center items-center space-x-8 pt-4">
          <button className="btn-apple-primary">
            Más información
          </button>
          <button className="btn-apple-secondary text-lg">
            Comprar <span>&rsaquo;</span>
          </button>
        </div>
      </div>
      <div className="mt-16 max-w-5xl mx-auto px-4 animate-slide-up">
        <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1400" 
              alt="iPad Pro" 
              className="rounded-[2.5rem] shadow-2xl mx-auto transition-transform duration-1000 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-black/5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
