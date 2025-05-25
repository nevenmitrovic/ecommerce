import { createContext, useState } from "react";

interface ISortContext {
  sortConfig: string;
  handleSortConfig: (selectValue: string) => void;
}

export const SortContext = createContext<ISortContext>({
  sortConfig: "best_seller",
  handleSortConfig: () => {},
});

export const SortContextProvider = ({ children }: any) => {
  const [sortConfig, setSortConfig] = useState<string>("best_seller");

  const handleSortConfig = (selectValue: string) => {
    setSortConfig(selectValue);
  };

  return (
    <SortContext.Provider value={{ sortConfig, handleSortConfig }}>
      {children}
    </SortContext.Provider>
  );
};
