import { users } from "../models/UsersModel";
import { generateAccessToken } from "../helpers/authenticate";

export const registerAuth = async (req, res) => {
    const { username, password,email } = req.body;
    try{
    const result = await new users({
        username: username,
        password: password,
        email:email
    })
    result.save()
    const accetoken = await generateAccessToken(username)
    res.header('Authorization', accetoken)
    res.status(200).json({ "User create successfully, Token: ": accetoken })
}catch(err){
    console.error(err)
    res.status(404).json({"msg":"Internal error"})
}
}

export const loginAuth = async (req, res) => {
    const { username, password } = req.body;

    const result = await users.findOne({ where: { username } })

    if(result.password === password){
        const token = await generateAccessToken(username);
        res.json(token)
    }
}

