import { Owner } from "../models/owner.model.js";
import { OwnerDTO } from "../dto/owner/ownerDTO.js";
import bcrypt from "bcrypt";
import { smtpTransport } from "../utils/mail.utils.js";
export const OwnerController = {

    create : async(req, res) => {

        const owner = req.parsedBody;
        //console.log
        console.log("owner controller : owner from httpClient is : " + owner);

        const exists = await Owner.findOne({ where: { email: owner.email } });
        //console.log
        console.log("owner controller : find existing owner in DB from email : " + owner.email);
        if(exists) {
            //console.log
            console.log("owner controller : this email exists in DB: " + owner.email);
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }
    // await smtpTransport.sendMail({
    //     from: 'tf2023@khunly.be',
    //     to: owner.email,
    //     subject: 'Welcome On Crimimmo',
    //     html: `<p>Welcome ${owner.firstname} ${owner.lastname} !</p>`
    // })
    const result = await Owner.create({ 
        ...owner,
        picture: req.file?.filename,
        hashedPassword: await bcrypt.hash(owner.password, await bcrypt.genSalt()),
        subscribeDate : new Date().toISOString(),
        role: 'USER'
    });
    //console.log
    console.log("owner controller : should by add to DB : " + owner.firstname);
    res.json(new OwnerDTO(result));
    }
}