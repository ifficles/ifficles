
// Listen to server recipe event
events.listen('recipes', function (e) {

    // Remove recipe for small krate
    e.remove({id: 'krate:krate_small'})
 
   // Add shaped recipe to craft small krate from any type of wood
    e.shaped(item.of('krate:krate_small'), [
     'SSS',
     'I I',
     'SSS'
   ], {
     'S': '#minecraft:wooden_slabs',
     'I': '#minecraft:logs'
   })})