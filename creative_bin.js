onEvent('recipes', event => {
    event.custom(
      {
        "type": "powah:energizing",
        "ingredients": [
          {"item": "kubejs:valdanium_block"},
          {"item": "extendedcrafting:the_ultimate_ingot"},
          {"item": "extendedcrafting:ultimate_singularity"},
          {"item": "storagedrawers:creative_storage_upgrade"}
        ],
        "energy": 2147483647,
        "result": {
          "item": "mekanism:creative_bin",
          "count": 1
        }
      }
  )
  })