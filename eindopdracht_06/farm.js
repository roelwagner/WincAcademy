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

const get_crop = (crop) => {
    return crop;
}

const get_costs_for_crop = (input) => {
    const plantCost = get_crop(input.crop).costs;
    return input.num_crops * plantCost;
}

const get_revenue_for_crop = (input) => {
    const plantSalePrice = get_crop(input.crop).sale_price;
    const plantYield = get_yield_for_crop(input);
    return plantYield * plantSalePrice;
}

const get_profit_for_crop = (input) => {
    const cropRevenue = get_revenue_for_crop(input);
    const cropCosts = get_costs_for_crop(input);
    return cropRevenue - cropCosts;
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
};