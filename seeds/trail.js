exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE TABLE trail RESTART IDENTITY')
        .then(function() {
            const trails = [{
                    name: 'Crater Lake and Mirror Lake',
                    distance: 14.8,
                    location: 'Monarch Lake',
                    elev_gain: 1983
                }, {
                    name: 'Gourd Lake',
                    distance: 16.6,
                    location: 'Monarch Lake',
                    elev_gain: 2450
                }, {
                    name: 'Cascade Falls',
                    distance: 9.2,
                    location: 'Monarch Lake',
                    elev_gain: 862
                }, {
                    name: 'Monarch Lake Loop Trail',
                    distance: 3.9,
                    location: 'Monarch Lake',
                    elev_gain: 260
                }, {
                    name: 'Blue Lake',
                    distance: 5.1,
                    location: 'Brainard Lake',
                    elev_gain: 830
                },{
                    name: 'Isabelle Glacier',
                    distance: 8.75,
                    location: 'Brainard Lake',
                    elev_gain: 510
                },{
                    name: 'Pawnee Lake',
                    distance: 12.8,
                    location: 'Brainard Lake',
                    elev_gain: 362
                },{
                    name: 'Arapaho Lakes',
                    distance: 7.1,
                    location: 'East Portal',
                    elev_gain: 1961
                },{
                    name: 'Iceberg Lakes',
                    distance: 11.8,
                    location: 'East Portal',
                    elev_gain: 2904
                },{
                    name: 'Rogers Peak Lake and Heart Lake',
                    distance: 8.7,
                    location: 'East Portal',
                    elev_gain: 2099
                }

            ];


            return knex('trail').insert(trails);
        });
};
