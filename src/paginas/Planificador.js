import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTasks } from '../Fetch/FetchTasks';

function Planificador() {
    const location = useLocation();
    const userId = location.state.id;
    const { state } = location;
    const { username } = state || {};  // Aseguramos que state existe antes de acceder a username
    const options = [
        <option value="pendiente">Pendiente</option>,
        <option value="en-progreso">En progreso</option>,
        <option value="completada">Completada</option>
    ];
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks(userId)
            .then(data => {
                console.log(data);
                setTasks(data);
            })
            .catch(error => console.error(error));
    }, [userId]);

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl">Bienvenido, {username}</h1>
                <div>
                    <a href="/proyectos" className="text-white">Proyectos</a>
                </div>
            </header>

            <div className="p-4">
                {/* Aquí puedes agregar el contenido de tu top informativo */}
            </div>

            <div className="flex-grow p-4">
                <div className="shadow-lg rounded-lg overflow-x-auto">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">Actividad</th>
                                <th className="px-4 py-2 border">Fecha</th>
                                <th className="px-4 py-2 border">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id}>
                                    <td className="px-4 py-2 border text-center">{task.title}</td>
                                    <td className="px-4 py-2 border  text-center">{task.dueDate}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <select value={task.status}>
                                            {options}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p className="text-sm">&copy; 2024 Soaint. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Planificador;