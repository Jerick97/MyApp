import {useState, useEffect} from 'react';
export default function Welcome(props){
    // Declaramos una nueva variable de estado que llamaremos counter
    const [counter, setCounter] = useState(0); //iniciara en 0

    //Hooks useEffect
    // se declara la constante en minúscula y la que modifica la constante usando camelCase

    const [semaforo, setSemaforo] = useState(false); //modificar el estado por funciones
    
    /*console.log(props);*/
    const {message, name} = props; //recuperar el valor de los props 

    //useEffect se ejecutara cuando el valor de semáforo cambia y lo iremos mostrando en consola
    useEffect(() => {
        console.log(semaforo)
    }, [semaforo])

    const contar = () =>{
        //console.log("Entrando en la función contar");
        setCounter(counter + 1);
        //!semáforo ira cambiando de false a true según se pulse
        setSemaforo(!semaforo);
    }

    return (
        <div>
            <h1>Hola Mundo {name}</h1>
            <p>{message}</p>

            <h2>Contador de React con Hooks</h2>
            <h4>El número del contador es {counter}</h4>
            <p>El semáforo está en color {semaforo ? 'red' : 'green'} </p>
            <button type="submit" onClick={contar}>Sumar Contador</button>
        </div>
        );
    //<button type="submit" onClick={() => setCounter(counter + 1)}>Sumar Contador</button>
}