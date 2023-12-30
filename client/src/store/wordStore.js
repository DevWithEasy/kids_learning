import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const wordStore = (set) => ({
    words : [],
    word : '',
    letters : [],
    a_letters : [],
    addWords: (words) => {
        set((state) => ({
            words : words
        }))
    },
    addWord: (word) => {
        set((state) => ({
            word : word
        }))
    },
    addLetters: (letters) => {
        set((state) => ({
            letters : letters
        }))
    },
    addALetters: (letter) => {
        set((state) => ({
            a_letters : [...state.a_letters,letter],
            letters : state.letters.filter(item=> item != letter)
        }))
    },
    removeALetter :(letter) => {
        set((state) => ({
            a_letters : state.a_letters.filter(item=>item != letter),
            letters : [...state.letters,letter],
        }))
    },
})
const useWordStore = create(
    devtools(
        persist(wordStore, {
            name: "words"
        })
    )
)
export default useWordStore;