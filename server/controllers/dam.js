const Dam = require('../models/dam');

exports.saveDam = (req, res) => {
  const { name, titleImage, subImage } = req.body;

  const dam = new Dam({
    name,
    titleImage,
    subImage,
  });

  return dam.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.oneDamGet = (req, res) => {
  const damId = req.params.damname;

  Dam.find({ _id: damId }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};


exports.allDamGet = (req, res) => {  
  Dam.find({}, (err, data) => {
    if (err) console.log(req.err);
    return res.json(data);
  });
};

