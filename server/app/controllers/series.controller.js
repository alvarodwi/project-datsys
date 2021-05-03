const db = require("../models");
const Series = db.series;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    if(!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const series = {
        title: req.body.title,
        jp_title: req.body.jp_title
    };

    Series.create(series)
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating a series"
        });
    });
};

exports.findAll = (req,res) => {
    const title = req.query.title;
    var condition = title ? { title : { [Op.like]: `%${title}%`} } : null;

    Series.findAll({where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 
                err.message || "Error retrieveing series"
        });
    });
}

exports.findOne = (req,res) => {
    const id = req.params.id;

    Series.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving a series with id="+ id
            });
        });
}

exports.update = (req, res) => {
  const id = req.params.id;

  Series.update(req.body,{
      where: {id:id}
  })
  .then(num => {
      if(num == 1){
          res.send({
              message: "Series updated successfully"
          });
      }else {
          res.send({
              message: `Cannot update Series with id=${id}`
          });
      }
  })
  .catch(err => {
      res.status(500).send({
          message: "Error updating Series with id="+id
      });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Series.destroy({
      where: {id: id}
  })
  .then(num => {
      if(num == 1){
        res.send({
            message: "Series deleted succesfully"
        });
      }else{
        res.send({
            message: `Cannot delete Series with id=${id}`
        });
      }
  })
  .catch(err => {
    res.status(500).send({
        message: "Error deleting Series with id="+id
    });
});
};

exports.deleteAll = (req, res) => {
  Series.destroy({
      where: {},
      truncate: false
  })
  .then(nums => {
    res.send({
        message: `${nums} Series deleted succesfully`
    });
  })
  .catch(err => {
    res.status(500).send({
        message: err.message || "Error deleting all Series"
    });
  })
};