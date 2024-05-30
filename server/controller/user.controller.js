import User from '../model/UserModel.js'
import bycript from 'bcrypt'


export let signup = async (req, res) => {
    try {
        let { fullname, email, password } = req.body
        let userdata = await User.findOne({ email })
        if (userdata) {
            
            return res.status(400).json({ message: "User already exists" });
        }

        let HasPassword = await bycript.hash(password, 12)
        let Createuser = new User({
            fullname: fullname,
            email: email,
            password: HasPassword,
        })

        await Createuser.save()
        res.json({ message: "created succefully" })


    } catch (error) {
        console.log(error);
        res.json({ message: "internal problem" })
    }
}


export let login = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await User.findOne({ email })
        let match = await bycript.compare(password, user.password)
        
        if (!user || !match) {
            res.json({ message: 'email and password is not mach' })
            
        } else {
            res.json({
                message: 'login succefully by ', user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })
        }


    } catch (error) {
        console.log(error);
        res.json({ message: 'internal error' })
    }
}

