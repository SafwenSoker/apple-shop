const User = require('./../models/user')
const bcrypt = requrie('bcrypt')

signup = (req,res,next)=> {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.statuss(200).json({message: 'User created ! '}))
        .catch(error => res.status(400).json({error}));
    })
    .catch(error => res.status(500).json({error}))
}

login = (req,res,next) => {
    
}

module.exports = {
    signup,
    login
}