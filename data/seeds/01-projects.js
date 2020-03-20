exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('projects').insert([
                { id: 1, project_name: 'Unit 4 Build Week', project_description: 'Make sure to understand the material from the 3 weeks of unit 4.', project_completed: false },
                { id: 2, project_name: 'Not get COVID-19', project_description: 'Stay healthy and avoid people.', project_completed: true },
                { id: 3, project_name: 'Do not go crazy', project_description: 'Do not let locked in family get on nerves', project_completed: false }
            ]);
        });
};