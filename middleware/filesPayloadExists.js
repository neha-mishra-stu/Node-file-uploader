const filesPayloadExists = (req, res, next) =>{
    if(!res.files) return res.status(400).json({status: "error" , message: "missing files"})

    next()    
}
module.exports = filesPayloadExists