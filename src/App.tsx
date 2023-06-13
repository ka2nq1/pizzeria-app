import React, { FC, useState } from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import Pizza from './models/Pizza';

const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([])

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza])
    }

    console.log(pizzasList);
    

    return (
        <div className="App">
            <div className='wrap'>
                <span className='heading'>Our pizzeria</span>
                <AddPizzaForm {...{addPizza}}/>
                <DisplayPizzas {...{pizzasList}}/>
            </div>
        </div>
    );
}

export default App;
