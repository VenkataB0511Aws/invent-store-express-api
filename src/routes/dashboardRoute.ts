import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

const dashboardRoute = Router();

dashboardRoute.get("/", getDashboardMetrics);

export default dashboardRoute;