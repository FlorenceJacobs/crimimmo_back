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

        console.log('les datas sont récupérées');
        console.log(data.lon)
        const result = await Location.create({
                    ...location,
                    holidayRentalId: 1,
                    longitude : data[0].lon,
                    latitude : data[0].lat,
                    state : data[0].address.state,
                    region : data[0].address.region,
                    county : data[0].address.county
                });
    }
}