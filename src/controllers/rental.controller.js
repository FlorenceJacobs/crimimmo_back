export const RentalController = {

    index: async (req, res) => {
       /*  const { rentals } = req.query;
        const limit = 10;
        const customers = await Customer.findAll({
            include: [Order],
            limit, 
            offset: (page - 1) * limit
        });
        res.json(customers.map(c => new CustomerDTO(c))); */
    }, 

    create: async (req, res) => {
        const {number, street, postal_code, region, locality, } = req.parsedBody;
        const result = await rentalHoliday.create({
            ...rental,
            image : req.file?.filename,

        });
        // res.json(result);
    }
}