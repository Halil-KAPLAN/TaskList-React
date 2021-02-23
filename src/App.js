import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true },
];

function App() {
  const [liste, setListe] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input placeholer="listeye ekle" />
        <button>Ekle</button>
      </div>
      <div className="liste">
        {liste.map((item) => (
          <div className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
      </div>
      <button className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}

export default App;
