const getPath=(data)=>{
    const {lan,searchParams} = data
    const query = searchParams.get('q')
    if(lan === 'ar'){
        return `arabic`
    }
    if(lan === 'bn' && query === 'vowel'){
        return `bangla/vowel`
    }else if(lan === 'bn' && query === 'non_vowel'){
        return `bangla/non_vowel`
    }else if(lan === 'bangla_kar'){
        return `bangla/kar`
    }else if(lan === 'bangla_fola'){
        return `bangla/fola`
    }else if(lan === 'punctuation_mark'){
        return `bangla/punctuation_mark`
    }else if(lan === 'en' && query === 'capital'){
        return `english/?q=capital`
    }else if(lan === 'en' && query === 'small'){
        return `english/?q=small`
    }else if(lan === 'en' && query === 'number'){
        return `english/number`
    }
}

export default getPath