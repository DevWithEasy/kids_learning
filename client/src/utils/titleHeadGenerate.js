const getTitle=(data)=>{
    const {lan,searchParams} = data
    const query = searchParams.get('q')
    if(lan === 'ar'){
        return `আরবি অক্ষর`
    }
    if(lan === 'bn' && query === 'vowel'){
        return `বাংলা স্বরবর্ণ`
    }else if(lan === 'bn' && query === 'non_vowel'){
        return `বাংলা ব্যঞ্জনবর্ণ`
    }else if(lan === 'bangla_kar'){
        return `বাংলা কার চিহ্ন`
    }else if(lan === 'bangla_fola'){
        return `বাংলা ফলা`
    }else if(lan === 'punctuation_mark'){
        return `বাংলা যতিচিহ্ন`
    }
}

export default getTitle