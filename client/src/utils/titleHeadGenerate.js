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
    }else if(lan === 'en' && query === 'capital'){
        return `ইংরেজি বড় হাতের অক্ষর`
    }else if(lan === 'en' && query === 'small'){
        return `ইংরেজি ছোট হাতের অক্ষর`
    }else if(lan === 'en' && query === 'number'){
        return `ইংরেজি নাম্বার (1-100)`
    }
}

export default getTitle