import Note from "../models/Note.js";
import mongoose, { mongo } from "mongoose";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getAllNotes", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
  // res.status(201).json({ message: "Note created Successfully!" });
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(500).json({ message: "bad request" });
    }
    const newNote = new Note({ title: title, content: content });

    await newNote.save();
    res
      .status(201)
      .json({ message: "your note created Successfully", title, content });
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).json({ message: "Note with this id not found" });
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note Not found" });

    const { id } = req.params;
    res
      .status(200)
      .json({ message: `Note ${id}: updated Successfully`, updatedNote });
  } catch (error) {
    console.error("Error in updateNoe", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid Id" });
    }
    await Note.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .json({ message: `Note with id: ${req.params.id} deleted Successfully` });
  } catch (error) {
    console.log("error in deleteNote", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).json({ message: "Note not found with this Id" });

    const note = await Note.find({ _id: req.params.id });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById", error);
    res.status(500).json("Internal Server Error");
  }
};
