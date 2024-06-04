export async function authenticate(username, password) {
    const basicAuthUsername = 'admin';
    const basicAuthPassword = 'adminpassword';
    const basicAuth = btoa(`${basicAuthUsername}:${basicAuthPassword}`);

    const response = await fetch(`http://localhost:2000/api/users/username/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${basicAuth}`
        },
    });

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Autenticación fallida');
        }
        throw new Error('Error al conectar con el servidor');
    }

    const data = await response.json();
    const { username: serviceUsername, password: servicePassword } = data;

    if (username !== serviceUsername || password !== servicePassword) {
        throw new Error('Credenciales inválidas');
    }

    return data;
}
