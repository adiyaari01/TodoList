const {model} = require("mongoose");
const User = model("User");
const bcrypt = require('bcryptjs')

const registerForm = async (req,res) =>{
    return res.status(200).json({status:'success', message:"register Form"});
}

const createUser = async (req,res) =>{
    const {username, email, password:palinTextPassword} = req.body
    
    if(!username || typeof username !== 'string'){
        return res.json({status: 'error', error: 'Invalid username'})
    }
    if(!palinTextPassword || typeof palinTextPassword !== 'string'){
        return res.json({status: 'error', error: 'Invalid password'})
    }
    if(palinTextPassword.length < 6){
        return res.json({status: 'error', error: 'Password must contains 6 charecters numbers'})
    }
    const password = await bcrypt.hash(palinTextPassword, 10)
    try{
        const newUser = await User.create({username, password, email})
        return res.status(200).json({status:'success', data:newUser});
    }catch(error){
        if (error.code ===11000){
            //duplicate key
            return res.json({status:'error', error: 'Username already in use' })
        }
        throw error
    }
    res.json({status: 'ok' })
}

module.exports = {
    registerForm,
    createUser
}