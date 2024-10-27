import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
import BottomNav from './Components/BottomNav/BottomNav';
const { getData } = require("./db/db");
const technique = getData();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [tele, setTele] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const teleInstance = window.Telegram.WebApp;
      setTele(teleInstance);
      teleInstance.ready();
    } else {
      console.warn("Telegram WebApp API не доступен");
    }
  }, []); 

  const onAdd = (tech) => {
    const exist = cartItems.find((x) => x.id === tech.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === tech.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...tech, quantity: 1 }]);
    }
  };

  const onRemove = (tech) => {
    const exist = cartItems.find((x) => x.id === tech.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter(x => x.id !== tech.id));
    } else {
      setCartItems(cartItems.map(x =>
        x.id === tech.id ? { ...exist, quantity: exist.quantity - 1 } : x
      ));
    }
  };

  const onCheckout = () => {
    if (tele) {
      tele.MainButton.text = "Pay";
      tele.MainButton.show();
    } else {
      console.warn("MainButton недоступен, поскольку tele не определён");
    }
  };

  return (
    <>
      <h1 className="heading">Order A Phone</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />

      <div className="cards_container">
        {technique.map(tech => (
          <Card tech={tech} key={tech.id} onAdd={onAdd} onRemove={onRemove} />
        ))}
      </div>
      <BottomNav />
    </>
    
  );
}

export default App;
