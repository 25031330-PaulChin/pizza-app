import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data';

// 1. Header Component
function Header() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <header className="header">
      <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>
        Andy's Pizza Co.
      </h1>
      {isOpen && <p className="tagline">Authentic Italian cuisine, all from our stone oven</p>}
    </header>
  );
}

// 2. Pizza Component (Accepts props and handles soldOut status)
function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
      </div>
    </div>
  );
}

// 3. Menu Component (Uses .map() to loop through pizzaData)
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian cuisine, all from our stone oven</p>
          <div className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </div>
        </>
      ) : (
        <p>We're still working on our menu. Please check back later!</p>
      )}
    </main>
  );
}

// 4. Order Component (Extracted component for open state)
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We're currently open until {closeHour}:00. Come visit us or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
}

// 5. Footer Component (Conditional opening hours)
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>Sorry, we're closed. We open at {openHour}:00.</p>
      )}
    </footer>
  );
}

// 6. App Component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);