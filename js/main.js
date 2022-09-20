const cadastrarVeiculo = (event) => {
    event.preventDefault();

    var carModel = document.getElementById('car-model').value;
    var licensePlate = document.getElementById('license-plate').value;
    var time = new Date();

    car = {
        model: carModel,
        plate: licensePlate,
        hour: time.getHours(),
        minutos: time.getMinutes()
    };

    console.log(car);
};

addEventListener('submit', cadastrarVeiculo);
