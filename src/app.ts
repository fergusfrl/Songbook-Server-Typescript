import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { Routes } from './routes/songRoutes';

require('dotenv').config();

class App {
    public app: express.Application;
    public mongoUri: string = process.env.MONGODB_URI;
    public routes: Routes = new Routes;

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routes.routes(this.app);
    };

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        this.app.use(cors());
    };

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUri, {
            useNewUrlParser: true
        });
    };
}

export default new App().app;