const Competible = require('../models/competible');

exports.saveCompetible = (req, res) => {
  const { name, price, amount, titlePhoto, description } = req.body;

  const competible = new Competible({
    name,
    price,
    amount,
    titlePhoto,
    description,
  });

  return competible.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.oneCompetibleGet = (req, res) => {
  console.log(req.params)
  const productId = req.params.competiblename;

  Competible.find({ _id: productId }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};


exports.allCompetiblesGet = (req, res) => {  
  Competible.find({}, (err, data) => {
    if (err) console.log(req.err);
    return res.json(data);
  });
};

