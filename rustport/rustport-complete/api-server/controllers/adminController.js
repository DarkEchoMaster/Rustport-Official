import {posts} from "../models/BlogPost.js"; import {dashboardAnalytics} from "../services/analyticsService.js";
import {listContactMessages} from "./contactController.js";
export const dashboard=(req,res)=>res.json({summary:{totalRevenue:18342.45,monthlyRevenue:4250.75,activeListings:47,users:913,blogPosts:posts.length,contacts:listContactMessages().length},analytics:dashboardAnalytics(),payments:[{customer:"Example Owner",type:"Premium #1",amount:300,status:"paid"},{customer:"Community Admin",type:"Featured month",amount:84.99,status:"paid"}],mostViewedPost:[...posts].sort((a,b)=>b.views-a.views)[0],contacts:listContactMessages()});
export const contacts=(req,res)=>res.json({contacts:listContactMessages()});
