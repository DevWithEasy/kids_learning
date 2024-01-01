exports.get=async(req,res,next) =>{
    try {
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully completed the proccess'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.update=async(req,res,next) =>{
    try {
        
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully completed the proccess'
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}