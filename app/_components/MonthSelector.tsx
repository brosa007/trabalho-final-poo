import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

type Props = {
  selected: number;
  onChange: (month: number) => void;
};

export default function MonthSelector({ selected, onChange }: Props) {
  return (
    <Select value={String(selected)} onValueChange={(v) => onChange(Number(v))}>
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Selecione o mês" />
      </SelectTrigger>
      <SelectContent>
        {months.map((m, i) => (
          <SelectItem key={i} value={String(i)}>
            {m}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
