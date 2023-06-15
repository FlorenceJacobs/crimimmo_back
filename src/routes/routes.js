import { Router } from "express";
import { RentalController } from "../controllers/rental.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { createLocationSchema } from "../validators/create-location.schema.js";
import { createUserSchema } from "../validators/create-user.schema.js";
import { createRentalSchema } from "../validators/create-rental.schema.js";
import { LocationController } from "../controllers/location.controller.js";
import { UserController } from "../controllers/user.controller.js";
import  upload  from '../middlewares/multer-config.middleware.js';
import { LoginBodySchema } from "../validators/login.body.schema.js";


export const routes = Router();

routes.route('/login')
    .post(validationMiddleware(LoginBodySchema),
    UserController.login);

routes.route('/rentals')
    .get(RentalController.index);

routes.route('/add-rental-details')
    .post(
        // upload.single('image'),
        validationMiddleware(createRentalSchema),
        RentalController.create
        );

routes.route('/add-rental-location')
    .post(
        validationMiddleware(createLocationSchema),
        LocationController.create
        );

routes.route('/add-user')
    .post(
        upload.single("picture"),
        validationMiddleware(createUserSchema),
        UserController.create
        );