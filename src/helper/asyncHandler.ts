import { NextFunction, Request, Response } from "express"

type Controller = (req: Request, res: Response, next: NextFunction) => Promise<void | Response>

const asyncHandler = (fn: Controller) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next))
        .catch(err => {
            res.status(500).send({
                success: false,
                message: err.message,
            })
        })
}

export default asyncHandler;