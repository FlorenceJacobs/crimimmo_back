import dotenv from 'dotenv';
dotenv.config();
const env = process.env.NODE_ENV ?? 'development';
import { Sequelize } from 'sequelize';
import config from '/../../config/config.json' assert { type: 'json' };

export const sequelize = new Sequelize({
  ...config[env]
})