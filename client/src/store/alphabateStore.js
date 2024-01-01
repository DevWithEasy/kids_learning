import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const alphabetStore = (set) => ({
    letters : [],
    addLetters: (letters) => {
        set((state) => ({
            letters : letters
        }))
    }
})
const useAlphabetStore = create(
    devtools(
        persist(alphabetStore, {
            name: "alphabets"
        })
    )
)
export default useAlphabetStore;