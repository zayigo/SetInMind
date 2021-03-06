const mongoose = require('mongoose');
const config = require('../config');

try {
  // mongoDB connection
  mongoose.connect(
    `mongodb+srv://${global.gConfig.username}:${global.gConfig.password}@${global.gConfig.database_url}/${global.gConfig.database}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
} catch (e) {
  console.log(e);
}

// mongoDB schema
const noteSchema = new mongoose.Schema({
  item: String,
});

const Note = mongoose.model('Note', noteSchema);

module.exports = (app) => {
  app.get('/', async (req, res) => {
    Note.find({}, (err, data) => {
      if (err) throw err;
      res.render('notes', { data });
    });
  });

  app.post('/', async (req, res) => {
    Note(req.body).save((err, nota) => {
      if (err) throw err;
      console.log(`Aggiunta: ${nota}`);
      res.json(nota);
    });
  });

  app.delete('/', async (req, res) => {
    console.log(req.body);
    Note.findByIdAndDelete(req.body.noteId, (err, nota) => {
      if (err) throw err;
      console.log(`Cancellata: ${nota}`);
      res.json(nota);
    });
  });
};
