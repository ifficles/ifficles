// Thermal Machines
onEvent('recipes', event => {

    // Centrifuge
    event.recipes.thermal.centrifuge([Item.of('minecraft:glass_bottle'), Fluid.of('kubejs:fluid_dragon_breath', 250)], 'minecraft:dragon_breath')
    })

    // Bottler - Encapsulator
    onEvent('recipes', event => {
    event.recipes.thermal.bottler('minecraft:dragon_breath', [Fluid.of('kubejs:fluid_dragon_breath', 250), 'minecraft:glass_bottle'])
    })