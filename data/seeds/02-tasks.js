exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('tasks').insert([
                { id: 1, task_description: 'Pass this Sprint', task_notes: 'Feel like i am doing alright', task_completed: false, project_id: 1 },

                { id: 2, task_description: 'Wash hands regularly.', task_notes: 'So far so good', task_completed: true, project_id: 2 },

                { id: 3, task_description: 'have schedueled alone time.', task_notes: 'Not going crazy is difficult', task_completed: false, project_id: 3 }
            ]);
        });
};