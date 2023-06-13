import React, { FC } from 'react';
import Pizza from '../models/Pizza';

interface DisplayPizzasProps {
    pizzasList: Pizza[],
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList}) => {
 
    return (
        <ul className='container'>
            {pizzasList.map((pizza) => (
                <li key={pizza.id}>
                    <img width='300' src={pizza.img} alt="pizza" />
                    <h3>{pizza.title}</h3>
                    <p>{pizza.price}</p>
                </li>
            ))}
        </ul>
    )
}

export default DisplayPizzas;