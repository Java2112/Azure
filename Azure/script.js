let users = [];
let reservations = [];

function toggleForm(formType) {
    const registerSection = document.getElementById('registerSection');
    const loginSection = document.getElementById('loginSection');
    
    if (formType === 'register') {
        registerSection.style.display = 'block';
        loginSection.style.display = 'none';
    } else {
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    }
}

function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (users.some(user => user.username === username)) {
        alert('Username already exists!');
    } else {
        users.push({ username, password });
        alert('Registration successful!');
        document.getElementById('registerForm').reset();
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        document.getElementById('loginForm').reset();
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('registerSection').style.display = 'none';
        document.getElementById('reservationSection').style.display = 'block';
    } else {
        alert('Invalid username or password!');
    }
}

function reserve() {
    const guestName = document.getElementById('guestName').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;

    reservations.push({ guestName, checkInDate, checkOutDate });
    alert('Reservation successful!');
    document.getElementById('reservationForm').reset();
    updateReservationList();
}

function updateReservationList() {
    const reservationList = document.getElementById('reservationList');
    reservationList.innerHTML = '';
    reservations.forEach((reservation, index) => {
        const li = document.createElement('li');
        li.textContent = `${reservation.guestName}: ${reservation.checkInDate} - ${reservation.checkOutDate}`;
        reservationList.appendChild(li);
    });
}
