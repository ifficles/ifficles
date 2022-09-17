
// Listen to server recipe event
events.listen('recipes', function (e) {

    // Remove recipes for cable tiers
    e.remove({id: 'creativecrafter:creative_crafter'})
     
    // Add shaped recipes to craft creative items from acquireable items
    e.shaped(item.of('creativecrafter:creative_crafter'), [
      'aba',
      'cde',
      'aba'
    ], {
      'a': 'minecraft:netherite_block',
      'b': 'extendedcrafting:nether_star_block',
      'c': 'kubejs:valdanium_block',
      'd': 'extrastorage:netherite_crafter',
      'e': 'minecraft:elytra'
    })
  })