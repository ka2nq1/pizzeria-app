import React, { FC, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Pizza from '../models/Pizza';
import EditPizzaForm from './EditPizzaForm';

interface SinglePizzaProps {
    pizza: Pizza,
    updatePizza: (newPizza: Pizza) => void,
    deletePizza: (id: number) => void,
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <li>
            <img width='300' src={pizza.img} alt="pizza" />
            <h3>{pizza.title}</h3>
            <p>{pizza.price}</p>
            <div className='pizzaControls'>
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={() => deletePizza(pizza.id)}/>
            </div>
            {edit ? 
                <EditPizzaForm data={pizza} {...{updatePizza, handleToggleEdit}}/>
                :
                null
            }
        </li>
    )
}

export default SinglePizza;