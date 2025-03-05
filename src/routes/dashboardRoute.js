"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dashboardController_1 = require("../controllers/dashboardController");
var dashboardRoute = (0, express_1.Router)();
dashboardRoute.get("/", dashboardController_1.getDashboardMetrics);
exports.default = dashboardRoute;
