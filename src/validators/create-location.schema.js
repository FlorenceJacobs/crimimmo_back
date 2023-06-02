export const createLocationSchema = yup.object({
    number: yup.number().required(),
    street: yup.string().required().max(255).min(2),
    postal_code: yup.string().required(),
    region: yup.string().max(255).min(2),
    locality: yup.string().required().max(255).min(2),
});