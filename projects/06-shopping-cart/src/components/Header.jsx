import { Filters } from "./Filters";
export const Header = ({ changeFilters }) => {
  return (
    <>
      <h1>Shopping Card 🛒</h1>
      <Filters onChange={changeFilters} />
    </>
  );
};
