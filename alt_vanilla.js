events.listen('recipes', function (e) {
    
    function kjsShaped(result, pattern, ingredients, count) {
      e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients)
    }
  
    function kjsShapeless(result, ingredients, count) {
      e.shapeless(item.of(result, count != null ? count : 1), ingredients)
    }

      e.remove({id: 'minecraft:repeater'})

    //Misc recipes
      e.smelting(item.of('minecraft:glass'), '#forge:sand').xp(.1)
      e.shapeless(item.of('minecraft:clay_ball', 4), 'minecraft:clay')
      e.shapeless(item.of('minecraft:quartz', 4), 'minecraft:quartz_block')
  
    kjsShaped('minecraft:hopper', [
      'ILI',
      'ILI',
      ' I '
    ], {
      'L': '#minecraft:logs',
      'I': '#forge:ingots/iron'
    })
    
    kjsShaped('minecraft:stick', [
      'L',
      'L'
    ], {
      'L': '#minecraft:logs'
    }, 16)
    
    kjsShaped('minecraft:chest', [
      'LLL',
      'L L',
      'LLL'
    ], {
      'L': '#minecraft:logs'
    }, 4)
  
    // Alternate repeater recipe
    kjsShaped('minecraft:repeater', [
      'R R',
      'SRS',
      'TTT'
    ], {
      'R': 'minecraft:redstone',
      'S': 'minecraft:stick',
      'T': '#forge:stone'
    })

    kjsShaped('minecraft:repeater', [
      '   ',
      'TRT',
      'BBB'
    ], {
      'T': 'minecraft:redstone_torch',
      'R': 'minecraft:redstone',
      'B': '#forge:stone'
    })     
  })