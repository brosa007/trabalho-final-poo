type Props = {
  balance: number;
};

export default function AccountBalanceCard({ balance }: Props) {
  return (
    <div className="mb-4 w-64 rounded-lg bg-white p-6 shadow">
      <span className="text-sm text-gray-500">Saldo em Conta</span>
      <div className="mt-2 text-2xl font-bold">
        R${balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </div>
    </div>
  );
}
