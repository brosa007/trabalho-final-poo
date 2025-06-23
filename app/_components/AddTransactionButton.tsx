import { Button } from "./ui/button";

export default function AddTransactionButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <Button
      className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      onClick={onClick}
    >
      Adicionar Transação
    </Button>
  );
}
