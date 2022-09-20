const result = document.getElementById('result');

let cars = [];

const getCars = () => JSON.parse(localStorage.getItem('car_yard'));

const setCars = () => {
    localStorage.setItem('car_yard', JSON.stringify(cars))
};

const carModel = (carModel, licensePlate) => {
    const time = new Date();

    return {
        model: carModel,
        plate: licensePlate,
        hour: time.getHours(),
        minutes: time.getMinutes()
    };
};

const reloadScreen = () => {
    result.innerHTML = '';
    showCarYard();
}

const registerCar = (event) => {
    event.preventDefault();

    const carModel = document.getElementById('car-model').value;
    const licensePlate = document.getElementById('license-plate').value;

    const car = carModel(carModel, licensePlate);

    if(getCars() !== null) {
        cars = getCars();
    }

    cars.push(car);
    setCars();
    reloadScreen();
};

const removeCar = (plate) => {
    cars = getCars().filter(car => car.plate !== plate);
    setCars();
    result.innerHTML = '';
    showCarYard();
};

const showCarYard = () => {
    const cars = getCars();

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

        const tdFinish = document.createElement('td');
        const btnFinish = document.createElement('button');
        btnFinish.innerHTML = "Excluir";
        btnFinish.className = "btn btn-danger";
        btnFinish.setAttribute("onclick", `removeCar('${car.plate}')`);
        tdFinish.appendChild(btnFinish);

        tr.appendChild(tdFinish);

        result.appendChild(tr);
    });
};

addEventListener('submit', registerCar);
