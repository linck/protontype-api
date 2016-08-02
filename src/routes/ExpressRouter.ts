import { ExpressApplication } from './../libs/ExpressApplication';
import {SequelizeModel} from "../models/SequelizeModel";

/**
 * Express routes configurations
 */
export abstract class ExpressRouter {
    protected express: any;
    protected modelName: string;
    protected model: any;

    constructor(expressApplication: ExpressApplication) {
        this.express = expressApplication.getExpress();
        this.model = expressApplication.getSequelizeDB().getModel(this.modelName);
        this.start();
    }

    protected sendErrorMessage(res: any, error: any): void {
        res.status(412).json({msg: error.message})
    }
    public abstract start(): void;
    public abstract start(): void;
}

export function Router(config: RouterConfig){
    return function (constructor: Function) {
       constructor.prototype.modelName = config.modelName;
    }
}

interface RouterConfig {
    modelName: string;
}