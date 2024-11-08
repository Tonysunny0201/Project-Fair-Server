// const jwt = require('jsonwebtoken')

// const jwtMiddleware = (req, res, next) => {
//     console.log("inside middleware");

//     const token = req.headers['authorization'].split(" ")[1]
//     console.log(token);
//     if (token) {
//         try {
//             const jwtResponse = jwt.verify(token, process.env.JWTPASSWORD)
//             console.log(jwtResponse);
//             req.userId = jwtResponse.userId
//             next()
//         } catch (err) {
//             res.status(401).json("authorisation failed ...plz login")
//         }
//     } else {
//         res.status(404).json("authorisation failed...token missing")
//     }

// }

// module.exports = jwtMiddleware





const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("Inside jwtMiddleware");
    const token = req.headers["authorization"].split(" ")[1]
    console.log(token);
    if(token){
        try{
           const jwtResponse = jwt.verify(token,process.env.JWTPASSWORD)
           console.log(jwtResponse);
           req.userId = jwtResponse.userId
            next()
        }catch (err){
            res.status(401).json("Authorization failed.. Please login!!")            
        }
    }else{
        res.status(404).json("Authorization failed.. Token is missing!!")
    }
    
}

module.exports = jwtMiddleware