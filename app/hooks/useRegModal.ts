import { create } from "zustand";

interface RegisterModalStore{
    isOpen: boolean;
    onClick: () => void;
    onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onClick: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useRegisterModal;