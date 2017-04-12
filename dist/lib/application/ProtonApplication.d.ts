/// <reference types="express" />
import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { ProtonMiddleware } from '../middlewares/ProtonMiddleware';
import { BaseModel } from '../models/BaseModel';
import { ExpressRouter } from '../router/ExpressRouter';
import { GlobalConfig } from './ProtonConfigLoader';
import { ProtonDB } from './ProtonDB';
import * as Express from 'express';
/**
 * @author Humberto Machado
 */
export declare class ProtonApplication {
    private express;
    private middlewares;
    private protonDB;
    private routers;
    private authMiddleware;
    private config;
    private logger;
    /**
     * Create express application instance and middlewares
     */
    constructor(config?: GlobalConfig);
    /**
     * Initialize express application and load middlewares
     * @return express instance
     */
    bootstrap(): Promise<ProtonApplication>;
    private startServer(config);
    private loadConfig(config?);
    /**
     * Initilize all configured middlewares
     */
    private configMiddlewares();
    /**
     * Initialize all configured routes annotated with @Route
     */
    private configureRoutes();
    private createRoutesByMethod(config, router);
    private createRouterFunctionParams(req, res, model, app);
    private createMiddlewareFunctionParams(req, res, next, model, app);
    /**
     * Add authentication middleware implementations
     */
    withAuthMiddleware(authMiddleware: AuthMiddleware): this;
    /**
     * Used to route autentication.
     */
    private authenticate(useAuth);
    private routeConfigMiddlewares(config, router);
    addRouter(router: ExpressRouter): this;
    addMiddleware(middleware: ProtonMiddleware): this;
    getExpress(): Express.Application;
    getProtonDB(): ProtonDB;
    getModel<T extends BaseModel<any>>(modelName: string): T;
    getRouters(): ExpressRouter[];
    getConfig(): GlobalConfig;
    /**
     * @return list of all configured routes in ProtonApplication
     */
    getRoutesList(): {
        method: string;
        path: string;
    }[];
}
