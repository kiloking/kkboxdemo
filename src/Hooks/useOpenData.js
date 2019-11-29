import { useState } from "react";

export function useOpenData() {
  const [openData, setOpenData] = useState();
  return {
    openData,
    setOpenData
  };
}
