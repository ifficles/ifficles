// New Fluids
events.listen('fluid.registry', event => {

event.create('molten_valdanium').textureThick(0x21004E).displayName('Molten Valdanium').bucketColor(0x21004E)
event.create('molten_starlight_iron').textureThick(0xDFE1E2).displayName('Molten Starlight Infused Iron').bucketColor(0xDFE1E2)
event.create('molten_manainfused_coal').textureThick(0x204C52).displayName('Molten Mana Infused Coal').bucketColor(0x204C52)
event.create('organic_water').textureThin(0x4D9349).displayName('Organic Water').bucketColor(0x4D9349)

// Convert dragon breath to storable in RS / AE
event.create('fluid_dragon_breath').textureThick(0x95118A).displayName('Dragon Breath').bucketColor(0x95118A)

})