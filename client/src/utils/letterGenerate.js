const getLetter=(data)=>{
    console.log(data?.letter)
    const {lan,searchParams,letter} = data
    const query = searchParams.get('q')
    if(lan === 'ar' || lan === 'bn' || lan === 'math' ||  lan === 'bangla_fola'){
        return letter?.letter
    }else if(lan === 'en' && query === 'small'){
        return letter?.small
    }else if(lan === 'en' && query === 'capital'){
        return letter?.capital
    }else if(lan === 'en'){
        return `${letter?.capital}_${letter?.small}`
    }else if(lan === 'bangla_kar'){
        return letter?.kar
    }
}

export default getLetter