import { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import {
  ComboBox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
} from "@/components/ui/Combobox";

type DegreesType = {
  id: string;
  name: string;
};

interface ComboboxDegreesProps {
  value: string | null;
  onValueChange: (value: string | null) => void;
}

export const ComboboxDegrees = ({
  value,
  onValueChange,
}: ComboboxDegreesProps) => {
  const [degreesList, setDegreesList] = useState<DegreesType[]>(
    []
  );

  useEffect(() => {
    async function fetchDegrees() {
      try {
        const response = await fetch("/api/list/degrees");
        const data = await response.json();
        const dataFormatted: DegreesType[] = data.map(
          (degree: any) => ({
            id: degree.id,
            name: degree.name,
          })
        );
        setDegreesList(dataFormatted);
      } catch (error) {
        console.error("Error al obtener los grados academicos - cliente", error);
      }
    }

    fetchDegrees();
  }, []);

  return (
    <ComboBox
      value={value}
      onValueChange={onValueChange}
      filterItems={(inputValue, items) =>
        items.filter(({ value }) => {
          const degree = degreesList.find(
            (degree) => degree.id === value
          );
          return (
            !inputValue || (degree && (degree.name.toLowerCase().includes(inputValue.toLowerCase())))
          );
        })
      }
    >
      <ComboboxInput placeholder="Selecciona tu grado académico..." />
      <ComboboxContent>
        {degreesList.map(({ id, name}) => (
          <ComboboxItem key={id} value={id} label={name} className="ps-8">
            <span className="text-sm text-foreground">{name}</span>
            {value === id && (
              <span className="absolute start-2 top-0 flex h-full items-center justify-center">
                <CheckIcon className="size-4" />
              </span>
            )}
          </ComboboxItem>
        ))}
        <ComboboxEmpty>Sin resultados.</ComboboxEmpty>
      </ComboboxContent>
    </ComboBox>
  );
};
