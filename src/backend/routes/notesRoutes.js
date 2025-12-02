import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Here are your Notes" });
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Note created Successfully" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(201).json({ message: `Note ${id}: Updated Successfully` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Note ${id}: Deleted Successfully` });
});

export default router;
