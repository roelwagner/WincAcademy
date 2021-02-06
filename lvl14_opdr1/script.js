const makePizza = (topping) => {
    const toppings = ["Salami", "Gorgonzola", "Mozarella"];
    const pizza = toppings.find(item => item === topping);
    const result = pizza === undefined ? "Hier is uw pizza Margherita" : `Hier is uw pizza ${pizza}`
    console.log(result);
}

const makeSushi = (filling) => {
    const fillings = ["Komkommer", "Zalm", "Tonijn"];
    const sushi = fillings.find(item => item === filling);
    const result = sushi === undefined ? "Hier is uw rijst" : `Hier is uw sushi met ${sushi}`
    console.log(result);
}

makeSushi("Zalm");
makeSushi("Tonijn");
makeSushi();
makePizza("Salami");
makePizza();