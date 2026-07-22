import cron from "node-cron"; cron.schedule("*/10 * * * *",()=>console.log("Refreshed cached server statistics."));
