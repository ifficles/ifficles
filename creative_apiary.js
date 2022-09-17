
// Listen to server recipe event
events.listen('recipes', function (e) {

    // Remove recipes for cable tiers
    e.remove({id: 'creativeapiary:tcreative_apiary'})
    e.remove({id: 'creativeapiary:creative_apiary_storage'})
     
    // Add shaped recipes to craft creative items from acquireable items
    e.shaped(item.of('creativeapiary:tcreative_apiary'), [
      'KAK',
      'ARA',
      'KAK'
    ], {
      'K': 'kubejs:valdanium_block',
      'A': 'resourcefulbees:t4_apiary',
      'R': '#resourcefulbees:resourceful_honeycomb_block'
    })
  
    e.shaped(item.of('creativeapiary:creative_apiary_storage'), [
      'SWS',
      'WVW',
      'SWS'
    ], {
      'S': '#resourcefulbees:resourceful_honeycomb_block',
      'W': 'minecraft:nether_star',
      'V': 'kubejs:valdanium_block'
    })

  })