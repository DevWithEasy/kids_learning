const shuffleWord=(word)=>{
    var characters = word.split('');

    for (var i = characters.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1))

        var temp = characters[i]

        characters[i] = characters[j]

        characters[j] = temp
    }

    return characters;
}

export default shuffleWord