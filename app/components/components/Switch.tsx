"use client";

import { useState } from "react";

interface SwitchProps {
  label: string;
  nome: string;
  valorInicial?: boolean;
}

export default function Switch({
  label,
  nome,
  valorInicial = false,
}: SwitchProps) {
  const [ativo, setAtivo] = useState<boolean>(valorInicial);

  return (
    <label className="flex cursor-pointer items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={ativo}
        onClick={() => setAtivo((valorAtual) => !valorAtual)}
        className={`relative h-6 w-11 rounded-full transition ${
          ativo ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            ativo ? "left-6" : "left-1"
          }`}
        />
      </button>

      <input type="hidden" name={nome} value={ativo ? "sim" : "nao"} />

      <span className="text-gray-700">{label}</span>
    </label>
  );
}
