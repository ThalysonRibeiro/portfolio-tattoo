"use client"
import { AlertOctagon, ArrowLeft, RefreshCw } from 'lucide-react';

interface ErrorProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export default function Error({ error, resetErrorBoundary }: ErrorProps) {

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="animate-pulse">
          <AlertOctagon className="w-24 h-24 mx-auto mb-4 text-red-500" />
          <h1 className="text-6xl font-bold tracking-tight mb-2">Oops!</h1>
          <h2 className="text-2xl font-medium text-gray-400 mb-8">Algo deu errado</h2>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-400">
            Parece que nossa máquina de tatuagem deu problema. Não se preocupe, nós vamos consertar.
          </p>

          {error && (
            <div className="bg-white/5 border border-red-500/20 rounded-lg p-4 mx-auto max-w-lg">
              <p className="text-red-400 font-mono text-sm">
                {error.message}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              className="relative bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para a página inicial
            </button>

            {resetErrorBoundary && (
              <button
                onClick={resetErrorBoundary}
                className="relative bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5" />
                Tentar novamente
              </button>
            )}
          </div>
        </div>

        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1590246814883-57c511d63d13?auto=format&fit=crop&w=1200&q=80"
            alt="Tattoo Equipment"
            className="rounded-xl opacity-50 hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}