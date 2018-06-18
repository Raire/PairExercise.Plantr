const model = require('./models')
const VegetablePlot = model.db.model('vegetable_plot')

model.Vegetable.create({ name: 'Carrot', color: 'orange', planted_on: new Date() })
  .then((createdVeg) => {
    return model.Gardener.create({ name: 'Bob', age: 56, favoriteVegetableId: createdVeg.id })
      .then((createdGar) => {
        return model.Plot.create({ size: 10, shaded: true, gardenerId: createdGar.id })
      })
  })

model.Vegetable.create({ name: 'Broccoli', color: 'green', planted_on: new Date() })
model.Vegetable.create({ name: 'Beet', color: 'purple', planted_on: new Date() })

model.db.sync(/*{force: true}*/)
  .then(() => {
    console.log('Sync successful.');
    model.db.close()
  })
  .catch(err => {
    console.log('Error: ', err);
    model.db.close()
  })
