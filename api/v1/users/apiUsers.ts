import { Router } from "express";
import { apiDeleteUser } from "./apiDeleteUser";
import { apiAddUser } from "./apiAddUser";
import { apiGetUserDetail } from "./apiGetUserDetail";
import { apiUpdateUser } from "./apiUpdateUser";

export let userRouter = Router();


userRouter.route("/:id")
    .get(apiGetUserDetail)
    .delete( apiDeleteUser)
    .patch( apiUpdateUser);

userRouter.post("/", apiAddUser);