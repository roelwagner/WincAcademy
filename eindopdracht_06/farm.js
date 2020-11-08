const get_yield_for_plant = (crop) => {
    return crop.yield;
}

const get_yield_for_crop = (input) => {
    return input.num_crops * get_yield_for_plant(input.crop);
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
};