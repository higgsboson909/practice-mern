import Note from "../models/Note.js";
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getAllNotes", error);
  }
};

export const createNote = (req, res) => {
  res.status(201).json({ message: "Note created Successfully!" });
};

export const deleteNote = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Note ${id}: deleted Successfully!` });
};

export const updateNote = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Note ${id}: updated Successfully` });
};
