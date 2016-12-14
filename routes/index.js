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
        id:data.id,
        name: data.name,
        distance: data.distance,
        elevation_gain: data.elev_gain,
        location: data.location
      });
    });
});



router.post('/', function(req, res) {
knex('trail').insert({
    name: req.body.name,
    distance: req.body.distance,
    location: req.body.location,
    elev_gain: req.body.elev_gain
  })
  .then(function(trail) {
      res.redirect(`/${trail.id}`);
  });
})


router.put('/:id', function(req, res) {
  console.log(req.body);
  knex('trail').where('id', req.params.id).update({
    name: req.body.name,
    distance: req.body.distance,
    location: req.body.location,
    elev_gain: req.body.elev_gain
  }, 'id').then(function() {
    res.redirect('/' + req.params.id)
  })
})

router.get('/:id/edit', function(req, res, next){
  knex('trail').select().where('id', req.params.id)
  .first()
  .then(function(data){
    res.render('edit', {
      trail:data
    });
  });
});



router.delete('/:id', function(req, res) {
  knex('trail').where('id', req.params.id).delete().then(function(data) {
    res.redirect('/')
  })
})

module.exports = router;
