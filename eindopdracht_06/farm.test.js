const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
} = require("./farm");

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(get_yield_for_plant(corn)).toBe(30);
    });
});

describe("get_yield_for_crop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_yield_for_crop(input)).toBe(30);
    });
});

describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_yield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(get_total_yield({ crops })).toBe(0);
    });
});

describe("get_costs_for_crop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        costs: 1,
    };

    const input = {
        crop: corn,
        num_crops: 10,
    };

    test("Get the costs for a crop", () => {
        expect(get_costs_for_crop(input)).toBe(10);
    });
});

describe("get_revenue_for_crop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        costs: 1,
        sale_price: 2,
    };

    const input = {
        crop: corn,
        num_crops: 10,
    };

    test("Get the revenue for the crop total without outside influences", () => {
        expect(get_revenue_for_crop(input)).toBe(60);
    });
});

describe("get_profit_for_crop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        costs: 1,
        sale_price: 2,
    };

    const input = {
        crop: corn,
        num_crops: 10,
    };

    test("Get the profits for a crop without outside influences", () => {
        expect(get_profit_for_crop(input)).toBe(50);
    });
});

describe("get_total_profit", () => {
    test("Calculate total profits of multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 1,
            sale_price: 4,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            costs: 2,
            sale_price: 7,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_profit({ crops })).toBe(107);
    })
})