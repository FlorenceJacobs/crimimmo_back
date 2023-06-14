import { Location } from "../models/location.model.js";
import axios from "axios";

export const LocationController = {

    create: async (req, res) => {
        const location = req.parsedBody;
        console.log("getting address data by coordinates");
        const { street, number, postal_code, locality } = req.parsedBody;
        /* https://nominatim.openstreetmap.org/search?addressdetails=1&street=6, rue du suisse&city=villers-la-ville&country=belgium&postalcode=1495&format=json */

        const urlAdress = `https://nominatim.openstreetmap.org/search`;
        const data = await axios.get(urlAdress, {
            params : {
                format : "json",
                addressdetails : "1",
                country : "belgium",
                street : street + ', ' + number,
                postalcode : postal_code,
                city : locality,
            }
        }) 

        const result = await Location.create({
                    ...location,
                    longitude : data.data[0].lon,
                    latitude : data.data[0].lat,
                    state : data.data[0].address.state,
                    region : data.data[0].address.region,
                    county : data.data[0].address.county
                });
    }
}