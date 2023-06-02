import yup from 'yup';

export const createRentalSchema = yup.object({
    name: yup.string().required().max(255),
    description: yup.string().max(500),
    type: yup.string().required().oneOf(['House','Apartment','Bungalow']),
    fromDate: yup.date().required().max(new Date()),
    nbrPersMax: yup.number().required(),
    nightPrice: yup.number().required(),
    weekPrice: yup.number(),
    weekendPrice: yup.number(),
});