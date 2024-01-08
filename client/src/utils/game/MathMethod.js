class MathMethod{
    static random(n){
        return Math.floor(Math.random() * n)
    }
    static numbers = (n) => {
        const array = new Array(3).fill(0).map((_,i)=> i)
        let data = [n]
        array.forEach(n=>{
            const n_2 = Math.floor(Math.random() * 10)
            const g_n = data.includes(n) ? n_2-1 : n_2
            data.push(g_n) 
        })
        for (var i = data.length - 1; i > 0; i--) {

            var j = Math.floor(Math.random() * (i + 1))
    
            var temp = data[i]
    
            data[i] = data[j]
    
            data[j] = temp
        }
        return data
    }
}

export default MathMethod