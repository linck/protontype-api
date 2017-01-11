import { ProtonApplication } from '../application/ProtonApplication';
import * as Express from 'express';
/**
 * @author Humberto Machado
 */
export abstract class Middleware {
    protected express: Express.Application;
    protected protonApplication: ProtonApplication;

    public init(protonApplication: ProtonApplication): Middleware {
        this.express = protonApplication.getExpress();
        this.protonApplication = protonApplication;
        return this;
    }

    public abstract configMiddlewares(): void;
}
