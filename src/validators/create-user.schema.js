import yup from 'yup';
import { getDateYearsAgo } from '../utils/date.utils.js';

export const createUserSchema = yup.object({
    lastname: yup.string().required().max(255),
    firstname: yup.string().max(500),
    email: yup.string().required(),
    birthdate: yup.date().required().max(new Date(getDateYearsAgo(18))),
    password: yup.string().required(),
});