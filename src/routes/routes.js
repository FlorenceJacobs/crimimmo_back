import { Router } from "express";
import { RentalController } from "../controllers/rental.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { createLocationSchema } from "../validators/create-location.schema.js";
import { createOwnerSchema } from "../validators/create-owner.schema.js";
import { createRentalSchema } from "../validators/create-rental.schema.js";
import { LocationController } from "../controllers/location.controller.js";
import { OwnerController } from "../controllers/owner.controller.js";
import  upload  from '../middlewares/multer-config.middleware.js'


export const routes = Router();

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

routes.route('/add-owner')
    .post(
        upload.single("picture"),
        validationMiddleware(createOwnerSchema),
        OwnerController.create
        );