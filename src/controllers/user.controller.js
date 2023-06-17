import { User } from "../models/user.model.js";
import { UserDTO } from "../dto/user/userDTO.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { smtpTransport } from "../utils/mail.utils.js";
import { Roles } from "../enums/roles.enum.js";

dotenv.config();

export const UserController = {

    create : async(req, res) => {
        const user = req.parsedBody;
        const exists = await User.findOne({ where: { email: user.email } });

        if(exists) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }
    // await smtpTransport.sendMail({
    //     from: 'tf2023@khunly.be',
    //     to: user.email,
    //     subject: 'Welcome On Crimimmo',
    //     html: `<p>Welcome ${user.firstname} ${user.lastname} !</p>`
    // })
    const result = await User.create({ 
        ...user,
        picture: req.file?.filename,
        hashedPassword: await bcrypt.hash(user.password, await bcrypt.genSalt()),
        subscribeDate : new Date().toISOString(),
        role: Roles.USER
    });
    res.json(new UserDTO(result));
    },

    login : async(req, res) =>{
        const { email, password } = req.parsedBody;
        const user = await User.findOne({ where: { email } });
        if(!user || !await bcrypt.compare(password, user.hashedPassword)) {
            res.status(401).json({ message: 'Bad Credentials' });
            return;
        }
        const payload = {
            id: user.id,
            email: user.email,
            firstname : user.firstname,
            role: user.role
        };
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY_TOKEN,
            { expiresIn: process.env.JWT_DURATION }
        );
        res.json({ token });
    }
}