export async function fetchTasks(userId) {
    const basicAuthUsername = 'admin';
    const basicAuthPassword = 'adminpassword';
    const basicAuth = btoa(`${basicAuthUsername}:${basicAuthPassword}`);

    const response = await fetch(`http://localhost:2000/api/tasks/assignedUser/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${basicAuth}`
        },
    });

    if (!response.ok) {
        throw new Error('Error al conectar con el servidor');
    }

    const data = await response.json();
    return data;
}