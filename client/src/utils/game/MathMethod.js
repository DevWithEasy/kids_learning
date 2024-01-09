import {v4 as uuidv4} from 'uuid'

class MathMethod {
    static random(n) {
        const n_1 = Math.floor(Math.random() * n)
        if (n_1 === 0) {
            return n_1 + 1
        } else {
            return n_1
        }
    }
    static numbers = (n) => {
        const array = new Array(3).fill(0).map((_, i) => i)
        let data = [n]
        array.forEach(n => {
            const n_2 = Math.floor(Math.random() * 10)
            if (data.includes(n_2)) {
                const n_3 = n_2 - 1
                if (n_3 < 0 || n_3 === 0) {
                    const n_4 = n_3 + 1
                    data.push(n_4)
                } else {
                    data.push(n_3)
                }
            } else {
                data.push(n_2)
            }
        })
        for (var i = data.length - 1; i > 0; i--) {

            var j = Math.floor(Math.random() * (i + 1))

            var temp = data[i]

            data[i] = data[j]

            data[j] = temp
        }
        return data
    }

    static dragArray(n,name){
        return new Array(n).fill(0).map((_,i) => {
            return {
                _id : uuidv4(),
                array : name
            }
        })
    }

    static dummayArray(n){
        return new Array(n).fill(0).map((_,i) => i+1)
    }
}

export default MathMethod