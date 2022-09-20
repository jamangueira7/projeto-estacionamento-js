const registerCar = (event) => {
    event.preventDefault();

    var carModel = document.getElementById('car-model').value;
    var licensePlate = document.getElementById('license-plate').value;
    var time = new Date();

    car = {
        model: carModel,
        plate: licensePlate,
        hour: time.getHours(),
        minutes: time.getMinutes()
    };

    var cars = [];

    if(localStorage.getItem('car_yard') !== null) {
        cars = JSON.parse(localStorage.getItem('car_yard'));

    }

    cars.push(car);
    localStorage.setItem('car_yard', JSON.stringify(cars));

};

addEventListener('submit', registerCar);
