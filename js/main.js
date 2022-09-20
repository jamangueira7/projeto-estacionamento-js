const registerCar = (event) => {
    event.preventDefault();

    var carModel = document.getElementById('car-model').value;
    var licensePlate = document.getElementById('license-plate').value;
    var time = new Date();

    let car = {
        model: carModel,
        plate: licensePlate,
        hour: time.getHours(),
        minutes: time.getMinutes()
    };

    let cars = [];

    if(localStorage.getItem('car_yard') !== null) {
        cars = JSON.parse(localStorage.getItem('car_yard'));

    }

    cars.push(car);
    localStorage.setItem('car_yard', JSON.stringify(cars));

};

const showCarYard = () => {
    let cars = JSON.parse(localStorage.getItem('car_yard'));

    let result = document.getElementById('result');

    cars.forEach(car => {
        const tr = document.createElement('tr');

        const tdModel = document.createElement('td');
        tdModel.innerHTML = car.model;
        tr.appendChild(tdModel);

        const tdPlate = document.createElement('td');
        tdPlate.innerHTML = car.plate;
        tr.appendChild(tdPlate);

        const tdStart = document.createElement('td');
        tdStart.innerHTML = car.hour + ":" + car.minutes
        tr.appendChild(tdStart);
        result.appendChild(tr);
    });
};

addEventListener('submit', registerCar);
