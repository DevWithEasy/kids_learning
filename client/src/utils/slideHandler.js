export const previous = (params) => {
    const {data,targetId,setTargetId,setTargetLetter} = params
    if(targetId === 0) {
        setTargetId(data.length - 1)
        setTargetLetter(data[data.length - 1])
        return
    }
    setTargetId(targetId-1)
    setTargetLetter(data[targetId-1])
}

export const next = (params) => {
    const {data,targetId,setTargetId,setTargetLetter} = params
    if(targetId+1 === data.length){
        setTargetId(0)
        setTargetLetter(data[0])
        return
    }
    setTargetId(targetId+1)
    setTargetLetter(data[targetId+1])
}