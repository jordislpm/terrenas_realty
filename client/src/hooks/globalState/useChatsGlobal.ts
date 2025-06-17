import { chatsStore } from "../../global/messages";

const useChatsStore = () => {
  const chatsGlobal = chatsStore((state) => state.chatsGlobal);
  const updateChatsGlobal = chatsStore((state) => state.updateChatsGlobal);

  return {
    chatsGlobal,
    updateChatsGlobal,
  };
};

export default useChatsStore;
