const mongoose = require('mongoose');
const Todo = require('../src/models/Todo');

describe('test des champs du model TODO', ()=>{
    it('création d\'un Todo valide avec tous les champs requis', ()=>{
        const todo = new Todo({
            text: 'Eval test unitaire',
            completed: true
          });
      
          expect(todo.text).toBe('Eval test unitaire');
          expect(todo.completed).toBe(true);
          expect(todo.createdAt).toBeDefined();
    })

    it('Le champ \'text\' est obligatoire et ne peut pas être vide', () => {
        const todo = new Todo();
    
        const error = todo.validateSync();
        expect(error).toBeDefined();
        expect(error.errors.text).toBeDefined();
      });
})

