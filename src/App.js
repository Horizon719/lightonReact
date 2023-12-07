import { useState } from "react";
import "./App.css";
import Model from "./model/Model.js";
import JatekTer from "./komponens/JatekTer.js";

const MODEL = new Model(3);

function App() {
    const [allapotLista, setAllapotLista] = useState(MODEL.getAllapotLista());
    function katt(index){
        MODEL.setAllapot(index);
        
        setAllapotLista(MODEL.getAllapotLista());
    }

    return (
        <div className="App">
            <header className="App-header">LightOn</header>
            <article>
                <JatekTer katt={katt} lista={allapotLista}></JatekTer>
            </article>
            <footer>
                <p>Milichovszky Sándor</p>
            </footer>
        </div>
    );
}

export default App;
