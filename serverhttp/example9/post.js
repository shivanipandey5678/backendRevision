const express=require("express");
const app=express();
app.use(express.json());

app.post("/users", (req, res) => {
  fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file" });
      return;
    }
    const users = JSON.parse(data).users;
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);

    fs.writeFile("db.json", JSON.stringify({ users }), (err) => {
      if (err) {
        res.status(500).json({ message: "Error writing file" });
        return;
      }
      res.status(201).json(newUser);
    });
  });
});

app.listen(3009, () => {
        console.log("Server is running on port 3009");
    });
