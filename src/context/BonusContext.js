import { createContext, useState } from "react";

const BonusContext = createContext();

const initialBonus = null;

const BonusProvider = ({ children }) => {
  const [bonus, setBonus] = useState(initialBonus);

  const handleBonus = (e) => {
    if (bonus) {
      setBonus(null);
    } else {
      setBonus(true);
    }
  };

  const data = { bonus, handleBonus };

  return <BonusContext.Provider value={data}>{children}</BonusContext.Provider>;
};

export { BonusProvider };
export default BonusContext;
