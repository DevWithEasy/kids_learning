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
    }else if(lan === 'en'){
        return `english`
    }else if(lan === 'en_number'){
        return `english/number`
    }else if(lan === 'math'){
        return `math`
    }else if(query === 'd_bn'){
        return `admin/find/days/?q=bn`
    }else if(query === 'd_en'){
        return `admin/find/days/?q=en`
    }else if(query === 'm_bn'){
        return `admin/find/months/?q=bn`
    }else if(query === 'm_en'){
        return `admin/find/months/?q=en`
    }else if(query === 's_bn'){
        return `admin/find/seasons/?q=bn`
    }else if(query === 's_en'){
        return `admin/find/seasons/?q=en`
    }
}

export default getPath