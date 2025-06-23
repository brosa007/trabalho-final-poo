"use client";
import { useState } from "react";
import AccountBalanceCard from "./_components/AccountBalanceCard";
import AddTransactionButton from "./_components/AddTransactionButton";
import Header from "./_components/Header";
import MonthSelector from "./_components/MonthSelector";
import TransactionsList from "./_components/TransactionsList";

const MOCK_TRANSACTIONS = [
  { name: "Caio Gabriel", email: "caio.gabriel@gmail.com", value: 1999 },
  { name: "Tulio Amaral", email: "tulio.amaral@gmail.com", value: 1999 },
  { name: "Vitor Vitorette", email: "vitor.vitorette@gmail.com", value: 1999 },
  { name: "Kathleen", email: "kathleen@gmail.com", value: 1999 },
];

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(6); // Julho
  const balance = 45231.89;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <MonthSelector
              selected={selectedMonth}
              onChange={setSelectedMonth}
            />
            <AddTransactionButton />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <AccountBalanceCard balance={balance} />
            {/* Aqui ficaria o gráfico, ignorado */}
          </div>
          <div className="flex-1">
            <TransactionsList transactions={MOCK_TRANSACTIONS} />
          </div>
        </div>
      </main>
    </div>
  );
}
