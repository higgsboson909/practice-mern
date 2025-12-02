export const getAllNotes = (req, res) => {
  res.status(200).send("Here are all your notes");
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
