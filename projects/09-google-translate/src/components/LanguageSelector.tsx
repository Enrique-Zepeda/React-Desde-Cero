import Form from "react-bootstrap/Form";
import { SUPPORTED_LANGUAGES } from "../constants";

export function LanguageSelector({ onChange }) {
  return (
    <Form.Select aria-label="Seleciona un idioma">
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
}
