module.exports = mapTraitAttribute = (input) => { 
    let newTraitAttribute = []
    input.map((i) => newTraitAttribute = [...newTraitAttribute, {name:Object.values(i)[0]  , trait:{connectOrCreate:[ {where:{id: +Object.keys(i)[0]} }]}}] )

    return newTraitAttribute


}