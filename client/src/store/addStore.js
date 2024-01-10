import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const addStore = (set) => ({
    n_1: null,
    n_2: null,
    index: null,
    answer: '?',
    numbers: [],
    addArray: [],
    array_1: [],
    array_2: [],
    dummyArray_1: [],
    dummyArray_2: [],
    wrong: false,
    wrongId: null,
    setN_1: (n) => {
        set((state) => ({
            n_1: n
        }))
    },
    setN_2: (n) => {
        set((state) => ({
            n_2: n
        }))
    },
    setN_2: (n) => {
        set((state) => ({
            n_2: n
        }))
    },
    setIndex: (n) => {
        set((state) => ({
            index: n
        }))
    },
    setAnswer: (n) => {
        set((state) => ({
            answer: n
        }))
    },
    setNumbers: (n_array) => {
        set((state) => ({
            numbers: n_array
        }))
    },
    setAddArray: (n_array) => {
        set((state) => ({
            addArray: n_array
        }))
    },
    setArray_1: (n_array) => {
        set((state) => ({
            array_1: n_array
        }))
    },
    setArray_2: (n_array) => {
        set((state) => ({
            array_2: n_array
        }))
    },
    setDummyArray_1: (n_array) => {
        set((state) => ({
            dummyArray_1: n_array
        }))
    },
    setDummyArray_2: (n_array) => {
        set((state) => ({
            dummyArray_2: n_array
        }))
    },
    setWrong: (q) => {
        set((state) => ({
            wrong: q
        }))
    },
    setWrongId: (n) => {
        set((state) => ({
            wrongId: n
        }))
    },
    dropItem: (item) => {
        set((state) =>{
            if (item.array == 'array_1'){
                return {
                    addArray : [...state.addArray,item],
                    array_1 : state.array_1.length === 1 ? [] : state.array_1.filter(array => array._id !== item._id )
                }
            }else if (item.array == 'array_2'){
                return {
                    addArray : [...state.addArray,item],
                    array_2 : state.array_2.length === 1 ? [] : state.array_2.filter(array => array._id !== item._id )
                }
            }
        })
    },
    resetAdd: () => {
        set((state) => ({
            n_1: 0,
            n_2: 0,
            index: 0,
            answer: '?',
            numbers: [],
            addArray: [],
            array_1: [],
            array_2: [],
            dummyArray_1: [],
            dummyArray_2: [],
            wrong: false,
            wrongId: null,
        }))
    },

})
const useAddStore = create(
    devtools(
        persist(addStore, {
            name: "addition"
        })
    )
)
export default useAddStore;