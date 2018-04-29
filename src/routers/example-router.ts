import { Request, Response, NextFunction, Router, IRouter } from 'express';
import { ExampleService } from '../services/example-service';

export class ExampleRouter {
    static routes(): Router {
        const router = Router();

        router
            .get('/:name', (request: Request, response: Response, next: NextFunction) => {
                response.send(ExampleService.exampleServiceMethod(request.params.name));
            });

        return router;
    }
}