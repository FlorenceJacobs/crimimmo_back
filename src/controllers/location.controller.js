import { Location } from "../models/location.model.js";

export const LocationController = {

    create: async (req, res) => {
        const location = req.parsedBody;
        const result = await Location.create({
            ...location,
            longitude : longitude,
            latitude : latitude,

        });
        // res.json(result);
    }
}