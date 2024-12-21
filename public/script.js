document.getElementById('cookieForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById('cookieName').value;
    const value = document.getElementById('cookieValue').value;
    await fetch('http://localhost:3000/api/set-cookie', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, value })
    });
    alert('Cookie has been set');
});

document.getElementById('localStorageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const key = document.getElementById('localStorageKey').value;
    const value = document.getElementById('localStorageValue').value;
    localStorage.setItem(key, value);
    alert('Local storage item has been set');
});

function getLocalStorage() {
    const key = document.getElementById('localStorageKey').value;
    const value = localStorage.getItem(key);
    document.getElementById('output').innerText = `Local Storage - Key: ${key}, Value: ${value}`;
}

document.getElementById('sessionStorageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const key = document.getElementById('sessionStorageKey').value;
    const value = document.getElementById('sessionStorageValue').value;
    sessionStorage.setItem(key, value);
    alert('Session storage item has been set');
});

function getSessionStorage() {
    const key = document.getElementById('sessionStorageKey').value;
    const value = sessionStorage.getItem(key);
    document.getElementById('output').innerText = `Session Storage - Key: ${key}, Value: ${value}`;
}
