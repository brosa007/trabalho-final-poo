type Transaction = {
  name: string;
  email: string;
  value: number;
};

type Props = {
  transactions: Transaction[];
};

export default function TransactionsList({ transactions }: Props) {
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
      <div className="mb-1 font-semibold">Últimas transações</div>
      <div className="mb-4 text-xs text-gray-500">
        Você fez {transactions.length} transações esse mês
      </div>
      <ul className="space-y-4">
        {transactions.map((t, i) => (
          <li key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-200" />
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-gray-500">{t.email}</div>
              </div>
            </div>
            <div className="font-semibold text-green-600">
              +R${t.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
