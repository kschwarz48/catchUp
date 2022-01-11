import { db } from "../database";
import Competition from "../models/Competition";

function registerRoutes(router) {
  router.get("/workload");

  router.post("/workload", async (req, res) => {
    if (!req.session.userId) {
      return res.send("Unauthorized.");
    }
    const workload = req.body;
    if (
      !workload.endDate ||
      !workload.startDate ||
      !workload.type ||
      !workload.name ||
      !workload.color
    ) {
      return res.send("Please fill all fields.");
    }
    if (workload.startDate < new Date().toISOString().substr(0, 10)) {
      return res.send(
        "Start Date must be before " + new Date().toISOString().substr(0, 10)
      );
    }
    if (workload.endDate <= workload.startDate) {
      return res.send("End date cannot be before or on start date.");
    }
    if (!Competition.types.includes(workload.type)) {
      return res.send("Competition type does not exist.");
    }
    if (!Competition.color.includes(workload.color)) {
      return res.send("Color does not exist.");
    }
    try {
      const collection = db.collection("workload");
      workload.userId = req.session.userId;
      const result = await collection.insertOne(workload);
      return res.send("ok");
    } catch (er) {
      return res.send("failed");
    }
  });
}

export default {
  registerRoutes,
};
