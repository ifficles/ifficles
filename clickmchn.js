
// Listen to server recipe event
events.listen('recipes', function (e) {

   // Remove recipe for click machine
     e.remove({mod: 'clickmachine'})

  // Add shaped recipe to make auto clicker an early game item

  e.shaped(item.of('clickmachine:auto_clicker'), [
    'III',
    'IEI',
    'IRI'
  ], {
    'I': 'minecraft:iron_ingot',
    'E': 'minecraft:ender_pearl',
    'R': 'minecraft:redstone_block'
  })})