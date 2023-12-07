import "./JatekTer.css";
import Elem from "./Elem.js";

export default function JatekTer(props){

    return(
        <div className="jatekTer">
            {
                props.lista.map((elem, index) => {
                    return(<Elem ertek={elem} katt={props.katt} key={index} index={index}></Elem>);
                })
            }
        </div>
    );
}