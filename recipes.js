events.listen('recipes', function (e) {
  var mekCrush = e.recipes.mekanism.crushing
  var mekEnrich = e.recipes.mekanism.enriching
  
  function energize(ingredient, result, rCount, power) {
    e.recipes.powah.energizing({
      ingredients: ingredient,
      energy: power,
      result: {
        item: result,
        count: rCount
      }
    })
  }

  function kjsShaped(result, pattern, ingredients, count) {
    e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients)
  }

  function kjsShapeless(result, ingredients, count) {
    e.shapeless(item.of(result, count != null ? count : 1), ingredients)
  }

  //Powah recipes
  energize([{
    tag: 'forge:storage_blocks/iron'
  }, {
    tag: 'forge:storage_blocks/gold'
  }], 'powah:energized_steel_block', 2, 90000)
  
  energize([{
    item: 'botania:blaze_block'
  }], 'powah:blazing_crystal_block', 1, 810000)
  
  energize([{
    tag: 'forge:storage_blocks/diamond'
  }], 'powah:niotic_crystal_block', 1, 2700000)
  
  energize([{
    tag: 'forge:storage_blocks/emerald'
  }], 'powah:spirited_crystal_block', 1, 9000000)
  
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
 
  e.recipes.industrialforegoing.dissolution_chamber({
    input: [{
      tag: 'minecraft:planks'
    }],
    inputFluid: '{FluidName:\'immersiveengineering:creosote\',Amount:125}',
    processingTime: 1,
    output: {
      item: 'immersiveengineering:treated_wood_horizontal',
      count: 1
    }
  })

  mekCrush(item.of('minecraft:blaze_powder', 4), '#forge:rods/blaze')
  mekCrush(item.of('minecraft:quartz', 4), '#forge:storage_blocks/quartz')
  mekEnrich(item.of('minecraft:blaze_rod'), [item.of('minecraft:blaze_powder', 4)])
  mekEnrich(item.of('powah:uraninite', 2), 'powah:uraninite_ore_poor')
  mekEnrich(item.of('powah:uraninite', 4), 'powah:uraninite_ore')
  mekEnrich(item.of('powah:uraninite', 8), 'powah:uraninite_ore_dense')
  
  //Creative recipes
  //energize([{
  //  item: 'refinedstorage:controller'
  //}], 'refinedstorage:creative_controller', 1, 420000000)
  
  //energize([{
  //  item: 'refinedstorageaddons:wireless_crafting_grid'
  //}], 'refinedstorageaddons:creative_wireless_crafting_grid', 1, 420000)
  
  //energize([{
  //  item: 'refinedstorage:wireless_crafting_monitor'
  //}], 'refinedstorage:creative_wireless_crafting_monitor', 1, 420000)
  
  //energize([{
  //  item: 'refinedstorage:wireless_fluid_grid'
  //}], 'refinedstorage:creative_wireless_fluid_grid', 1, 420000)
  
  //energize([{
  //  item: 'refinedstorage:wireless_grid'
  //}], 'refinedstorage:creative_wireless_grid', 1, 420000)
  
  })
  
//NBT Resets
  var resetNBT = [
    'rftoolsbase:filter_module',
    'rftoolspower:dimensionalcell_simple',
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_advanced',
    'rftoolspower:powercell_card',
    'rftoolsutility:syringe'
  ]
  utils.listOf(resetNBT).forEach(function (reset) {
    e.shapeless(item.of(reset), reset)
    
  })