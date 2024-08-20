import Notes from '../model/model.notes.js'; 

const getnotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log('error', error);
    res.status(500).json(error);
  }
};

export default getnotes;
