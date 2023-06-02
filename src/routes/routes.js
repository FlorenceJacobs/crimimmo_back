import { Router } from "express";
import multer from 'multer';

export const routes = Router();

const upload = multer({ dest: './uploads' });

routes.route('/rentals')
    .get(RentalController.index);

routes.route('/add-rental-details')
    .post(
        upload.single('image'),
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
        validationMiddleware(createOwnerSchema),
        OwnerController.create
        );