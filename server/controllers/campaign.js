const Campaign = require('../models/campaign');

exports.saveCampaign = (req, res) => {
  const { name, titleImage, subImage } = req.body;

  const campaign = new Campaign({
    name,
    titleImage,
    subImage,
  });

  return campaign.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.oneCampaignGet = (req, res) => {
  const campaignId = req.params.id;

  Campaign.find({ _id: campaignId }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};


exports.allCampaignGet = (req, res) => {  
  Campaign.find({}, (err, data) => {
    if (err) console.log(req.err);
    return res.json(data);
  });
};

