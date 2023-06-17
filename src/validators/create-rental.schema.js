import yup from 'yup';
import { RentalType } from '../enums/rental-types.enum';

export const createRentalSchema = yup.object({
    name: yup.string().max(255),
    description: yup.string().max(500),
    type: yup.string().oneOf(Object.values(RentalType)),
    fromDate: yup.date().max(new Date()),
    nbrPersMax: yup.number(),
    nightPrice: yup.number(),
    weekPrice: yup.number(),
    weekendPrice: yup.number(),
});