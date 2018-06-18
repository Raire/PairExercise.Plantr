const model = require('./models')

model.Vegetable.create({name: 'Carrot', color: 'orange', planted_on: new Date()})
model.Vegetable.create({name: 'Broccoli', color: 'green', planted_on: new Date()})
model.Vegetable.create({name: 'Beet', color: 'purple', planted_on: new Date()})

model.db.sync()
.then(() => {
  console.log('Sync successful.');
  model.db.close()
})
.catch(err => {
  console.log('Error: ', err);
  model.db.close()
})
