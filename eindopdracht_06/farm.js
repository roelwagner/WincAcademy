const get_yield_for_plant = (crop) => {
    return crop.yield;
}

const get_yield_for_crop = (input) => {
    return input.num_crops * get_yield_for_plant(input.crop);
}

const get_total_yield = (allCrops) => {
    return allCrops.crops.reduce((total, crops) => {
        return total + get_yield_for_crop(crops);
    },0)
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
};