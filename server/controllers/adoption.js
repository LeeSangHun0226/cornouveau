const Adoption = require('../models/adoption');

exports.saveAdoption = (req, res) => {
  const { name, titleImage, subImage } = req.body;

  const adoption = new Adoption({
    name,
    titleImage,
    subImage,
  });

  return adoption.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.oneAdoptionGet = (req, res) => {
  const adoptionId = req.params.id;

  Adoption.find({ _id: adoptionId }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};


exports.allAdoptionGet = (req, res) => {  
  Adoption.find({}, (err, data) => {
    if (err) console.log(req.err);
    return res.json(data);
  });
};

