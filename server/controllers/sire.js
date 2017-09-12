const Sire = require('../models/sire');

exports.saveProduct = (req, res) => {
  const { name, titleImage, subImage } = req.body;

  const sire = new Sire({
    name,
    titleImage,
    subImage,
  });

  return sire.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.oneSireGet = (req, res) => {
  const sireId = req.params.sirename;

  Sire.find({ _id: sireId }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};


exports.allSireGet = (req, res) => {  
  Sire.find({}, (err, data) => {
    if (err) console.log(req.err);
    return res.json(data);
  });
};

