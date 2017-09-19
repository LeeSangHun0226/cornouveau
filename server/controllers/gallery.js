const Gallery = require('../models/gallery');

exports.saveGallery = (req, res) => {
  const { name, titleImage, subImage } = req.body;

  const gallery = new Gallery({
    name,
    titleImage,
    subImage,
  });

  return gallery.save()
  .then(data => res.json(data))
  .catch(err => res.send({ err }));
};

exports.oneGalleryGet = (req, res) => {
  const galleryId = req.params.galleryname;

  Gallery.find({ _id: galleryId }, (err, data) => {
    if (err) res.send({ err });
    return res.json(data);
  });
};


exports.allGalleryGet = (req, res) => {  
  Gallery.find({}, (err, data) => {
    if (err) console.log(req.err);
    return res.json(data);
  });
};

