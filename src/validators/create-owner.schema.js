export const createOwnerSchema = yup.object({
    lastname: yup.string().required().max(255),
    firstname: yup.string().max(500),
    email: yup.string().required(),
    birthdate: yup.date().required().max(new Date()),
    subscribeDate: yup.number().required(),
    password: yup.number().required(),
});