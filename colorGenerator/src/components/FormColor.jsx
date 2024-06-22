import { useState } from "react";
import Values from 'values.js';

const FormColor = ({setList}) => {
    const [color, setColor] = useState("blue");
    const [error, setError] = useState(false);

    const handleGenerator = e => {
        e.preventDefault();
        try 
        {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        }catch (error)
        {
            setError(true);
            console.log(error);
        }
        console.log(color);
    }
    
    return (
        <div className="form-color">
        <h1>Generador de paleta de colores</h1>
        <form onSubmit={handleGenerator}>
            <input type="text" placeholder="#fff" onChange={e => setColor(e.target.value)} />
            <input type="submit" value="Generar" />
        </form>
             {error ?  <p className="error">No existe</p> : null}
        </div>
    );
}

export default FormColor;
