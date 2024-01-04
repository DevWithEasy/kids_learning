export const previous = (params) => {
    const {letters,id,setId,setLetter} = params
    if(id === 0) {
        setId(letters.length - 1)
        setLetter(letters[letters.length - 1])
        return
    }
    setId(id-1)
    setLetter(letters[id-1])
}

export const next = (params) => {
    const {letters,id,setId,setLetter} = params
    if(id+1 === letters.length){
        setId(0)
        setLetter(letters[0])
        return
    }
    setId(id+1)
    setLetter(letters[id+1])
}