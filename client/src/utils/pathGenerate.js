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
    }else if(lan === 'en'){
        return `english`
    }
}

export default getPath