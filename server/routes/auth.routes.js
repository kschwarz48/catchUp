import { db } from "../database";
export function registerRoutes(router) {
  router.post("/login", async (req, res) => {
    const credentials = req.body;
    const collection = db.collection("users");
    const user = await collection.findOne({
      email: credentials.email,
      password: credentials.password,
    });
    if (user) {
      req.session.userId = user._id;
      res.send(user._id);
    } else {
      res.send("Username/Password is incorrect or doesn't exist.");
    }
  });

  router.post("/register", async (req, res) => {
    const user = req.body;
    const collection = db.collection("users");
    try {
      const result = await collection.insertOne(user);
      res.send("ok");
    } catch (er) {
      res.send("failed");
    }
  });
}

export default {
  registerRoutes,
};
