import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
//this array is list of pizza datas
const pizzaData = [
    {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "https://i.ibb.co/JzR9bqt/focaccia.jpg",
    soldOut: false,
    },
    {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "https://i.ibb.co/JyR9L8P/margherita.jpg",
    soldOut: false,
    },
    {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "https://i.ibb.co/YP3L2HY/spinaci.jpg",
    soldOut: false,
    },
    {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "https://i.ibb.co/7WXYjgv/funghi.jpg",
    soldOut: false,
    },
    {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "https://i.ibb.co/p3rQD7H/salamino.jpg",
    soldOut: true,
    },
    {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "https://i.ibb.co/Y0CZgW6/prosciutto.jpg",
    soldOut: false,
    },
];
function App() {
return (
<div className='container'>
<Header />
<Menu />
<Footer />
</div>
);
}
//this function include the header of the website
function Header() {
    const style = {};
    return (
    <header className="header footer">
    <h1 style={style}>Night Star Fast Food</h1>
    </header>
    );
}
//function menu render pizzadata list
function Menu() {
    const pizzas = pizzaData;
    // const pizzas= [];
    const numPizzas=pizzas.length;
    return(
    <main className='menu'>
    <h2>Our Menu</h2>
    {numPizzas > 0  ? (
    <ul className='pizzas'>
        {pizzas.map((pizza) => (
            <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
    </ul>
    ) : <p> we are still working on our menu .come back later!</p>}
    </main>  
    );
}
function Pizza(props) {
    return (
    <li className='pizza'>
    <img src={props.pizzaobj.photoName}  alt={props.pizzaobj.name}/>
    <h3>{props.pizzaobj.name}</h3>  
    <p>{props.pizzaobj.ingredients}</p>
    <span>{props.pizzaobj.price}</span>
    </li>
    );
}
function Footer() {
    const hour = new Date().getHours();
    const OpenHour=12; 
    const CloseHour=22;
    const isOpen=hour >= OpenHour && hour <= CloseHour;
    console.log(isOpen);
    return(

        <footer className='footer'>
            {isOpen ? (
            <Order CloseHour={CloseHour} />  
            ):<p>we are happy to welcome you between {OpenHour}:00 and {CloseHour}:00.</p>}
    </footer>
    );

}
function Order(props) {
return(
    <div className="order">
                <p>
                we are open until {props.CloseHour}:00. come visit us or order online
                </p>
                <button className="btn">Order</button>
            </div> 
) 
}
const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
