exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('resources').insert([
                { id: 1, resource_name: 'Computer', resource_description: 'Use materials provided by Lambda or passed projects.' },
                { id: 2, resource_name: 'Soap', resource_description: 'Always sing the alphabet song when washing your hands!' },
                { id: 3, resource_name: 'Air', resource_description: 'Breathing excersizes help you stay sane!' }
            ]);
        });
};