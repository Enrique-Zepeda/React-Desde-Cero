import Form from "react-bootstrap/Form";
import { SUPPORTED_LANGUAGES } from "../constants";
import { FromLanguage, type Language } from "../types";

type Props =
  | {
      type: "from";
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | { type: "to"; value: Language; onChange: (language: Language) => void };

export function LanguageSelector({ onChange, type, value }: Props) {
  const hancleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };
  return (
    <Form.Select
      aria-label="Seleciona un idioma"
      onChange={hancleChange}
      value={value}
    >
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
}
