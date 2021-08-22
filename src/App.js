/** @format */

import "./App.css";
import { FruitsShop } from "./Components/FruitsShop";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>به سایت خرید میوه خوش آمدید!</h1>
        <h3>برای اضافه شدن هر میوه،روی آن کلیک کنید</h3>
      </header>
      <FruitsShop />
    </div>
  );
}

export default App;
