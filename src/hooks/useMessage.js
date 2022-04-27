import { useState } from "react";

export const useMessage = (initialValue = false) => {
  const [isOpenMessage, setIsOpenMessage] = useState(initialValue);

  const openMessage = () => setIsOpenMessage(true);

  const closeMessage = () => setIsOpenMessage(false);

  return [isOpenMessage, openMessage, closeMessage];
};
