import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. Header Component
function Header() {
  return <h1>Andy's Pizza Co.</h1>;
}

// 2. Pizza Component updated to accept props (name, ingredients, photoName)
function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} width="300" />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}

// 3. App Component rendering different pizzas
function App() {
  return (
    <div>
      <Header />
      <Pizza 
        name="Focaccia" 
        ingredients="Bread with olive oil and rosemary" 
        photoName="pizzas/focaccia.jpg" 
      />
      <Pizza 
        name="Funghi" 
        ingredients="Tomato, mozzarella, mushrooms, and onion" 
        photoName="pizzas/funghi.jpg" 
      />
      <Pizza 
        name="Margherita" 
        ingredients="Tomato and mozzarella" 
        photoName="pizzas/margherita.jpg" 
      />
      <Pizza 
        name="Prosciutto" 
        ingredients="Tomato, mozzarella, and ham" 
        photoName="pizzas/prosciutto.jpg" 
      />
      <Pizza 
        name="Salamino" 
        ingredients="Tomato, mozzarella, and pepperoni" 
        photoName="pizzas/salamino.jpg" 
      />
      <Pizza 
        name="Spinaci" 
        ingredients="Tomato, mozzarella, spinach, and ricotta cheese" 
        photoName="pizzas/spinaci.jpg" 
      />
    </div>
  );
}

// Render App to the screen
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);