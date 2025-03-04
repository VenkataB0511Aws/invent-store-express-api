"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
const dashboardRoute = (0, express_1.Router)();
dashboardRoute.get("/", dashboardController_1.getDashboardMetrics);
exports.default = dashboardRoute;
