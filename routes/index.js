var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('trail')
  .then((data)=>{
      res.render('index', { data:data });
  });
});

router.get('/:id', function (req, res) {
  knex('trail')
    .where('id', req.params.id)
    .first()
    .then((data) => {
      res.render('view', {
        name: data.name,
        distance: data.distance,
        elevation_gain: data.elev_gain,
        location: data.location
      });
    });
});

module.exports = router;
