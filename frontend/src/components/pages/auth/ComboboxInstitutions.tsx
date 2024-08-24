import { useEffect, useMemo, useState } from "react";
import { CheckIcon } from "lucide-react";
import {
  ComboBox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
} from "@/components/ui/Combobox";

type InstitutionType = {
  id: string;
  name: string;
  locally: string;
};

interface ComboboxInstitutionsProps {
  value: string | null;
  onValueChange: (value: string | null) => void;
}

export const ComboboxInstitutions = ({
  value,
  onValueChange,
}: ComboboxInstitutionsProps) => {
  const [institutionsList, setInstitutionsList] = useState<InstitutionType[]>(
    []
  );

  useEffect(() => {
    async function fetchInstitutions() {
      try {
        const response = await fetch("/api/list/institutions");
        const data = await response.json();
        const dataFormatted: InstitutionType[] = data.map(
          (institution: any) => ({
            id: institution.id,
            name: institution.name,
            locally: "Perú",
          })
        );
        setInstitutionsList(dataFormatted);
      } catch (error) {
        console.error("Error al obtener las instituciones", error);
      }
    }

    fetchInstitutions();
  }, []);

  return (
    <ComboBox
      value={value}
      onValueChange={onValueChange}
      filterItems={(inputValue, items) =>
        items.filter(({ value }) => {
          const institution = institutionsList.find(
            (institution) => institution.id === value
          );
          return (
            !inputValue ||
            (institution &&
              (institution.name
                .toLowerCase()
                .includes(inputValue.toLowerCase()) ||
                institution.locally
                  .toLowerCase()
                  .includes(inputValue.toLowerCase())))
          );
        })
      }
    >
      <ComboboxInput placeholder="Selecciona tu institución..." />
      <ComboboxContent>
        {institutionsList.map(({ id, name, locally }) => (
          <ComboboxItem key={id} value={id} label={name} className="ps-8">
            <span className="text-sm text-foreground">{name}</span>
            <span className="text-xs text-muted-foreground">{locally}</span>
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
