export default function Header() {
  return (
    <header className="flex items-center justify-between border-b px-8 py-4">
      <nav className="flex gap-6">
        <a href="#" className="font-semibold text-black">
          Visão Geral
        </a>
        <a href="#" className="text-gray-500">
          Transferências
        </a>
        <a href="#" className="text-gray-500">
          Conta
        </a>
        <a href="#" className="text-gray-500">
          Sair
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <span className="font-medium">Gabriel Rosa</span>
        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
