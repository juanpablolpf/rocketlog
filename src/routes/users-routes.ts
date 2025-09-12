import { Router } from "express";

import { UsersControllers } from "@/controllers/users-controllers";

const usersRoutes = Router()
const usersController = new UsersControllers()

usersRoutes.post("/", usersController.create)

export {usersRoutes}