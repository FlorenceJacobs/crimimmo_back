import yup from 'yup';

export const createLocationSchema = yup.object({
    number: yup.number(),
    street: yup.string().max(255).min(2),
    postal_code: yup.string(),
    locality: yup.string().max(255).min(2),
});