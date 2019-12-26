const users = document.querySelector('#users');
const key = document.querySelector('#key');
const name = document.querySelector('#name');
const age = document.querySelector('#age');

key.addEventListener('focus', e => {
    e.target.blur();
});

users.addEventListener('click', e => {
    const dataset = e.target.dataset;
    if (dataset.delete) {
        deleteUser(dataset.delete);
    }
    if (dataset.edit) {
        setEditor(dataset)
    }
});

function getUsers() {
    fetch('http://localhost:2832/user')
    .then(res => res.json())
    .then(res => {
        users.innerHTML = Object.entries(res).map(([key, user]) => {
            return `
                <div data-id="${key}">
                    ${user.name}: ${user.age}
                    <button data-delete="${key}">DELETE</button>
                    <button 
                        data-edit="${key}"
                        data-name="${user.name}"
                        data-age="${user.age}"
                    >EDIT</button>
                </div>
            `;
        }).join('');
    })
}

getUsers();

document.querySelector('#post')
    .addEventListener('click', e => {
        fetch(
            'http://localhost:2832/user',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        name: name.value,
                        age: age.value
                    }
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(e => {
            name.value = '';
            age.value = '';
            getUsers();
        })
    });


document.querySelector('#put')
    .addEventListener('click', () => {
        if (!key.value) return;
        if (!name.value && !age.value) return;

        fetch(
            `http://localhost:2832/user/${key.value}`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    user: {
                        name: name.value || undefined,
                        age: age.value ? age.value : undefined
                    }
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(e => {
            name.value = '';
            age.value = '';
            key.value = '';
            getUsers();
        })

    })

function deleteUser(id) {
    fetch(
        `http://localhost:2832/user/${id}`,
        {
            method: 'DELETE'
        }
    ).then(e => {
        getUsers();
    });
}

function setEditor(params) {
    key.value = params.edit;
    name.value = params.name;
    age.value = params.age;
}