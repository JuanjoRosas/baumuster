import { useEffect, useState } from "react";
import { DB } from "./firebase/DB"
import { collection, getDocs, query, where } from 'firebase/firestore';

const dataBase = DB();

const Table = () => {
    const [baumuster, setBaumuster] = useState('');
    const [docsPiezas, setDocsPiezas] = useState([{numeroPieza:'',descripcion:'',precio:0}])
    useEffect(()=>{
        let colRef = collection(dataBase, 'piezas');
        const q = query(colRef, where('baumuster','==',baumuster));
        getDocs(q).then(snapshot => {
            const docs = snapshot.docs.map(d => d.data());
            const newDocsPiezas = [];
            docs.forEach(doc => {
                newDocsPiezas.push({numeroPieza:doc.numeroPieza,descripcion:doc.descripcion,precio:doc.precio})
            })
            setDocsPiezas(newDocsPiezas)
        });
    },[baumuster]);

    //Cuerpo del componente
    return (
        <div className="ptContenido">  
            <div id = "divBuscar">
                <h4 className="ptLabel">Buscar baumuster:</h4>
                <input type="text" id="inputBaumuster" name="inputBaumuster" placeholder="Baumuster" />
                <button onClick={()=>setBaumuster(document.getElementById('inputBaumuster').value)} id="btnBaumuster">
                    Buscar
                </button>
            </div>
            <div>
                <table className="tablaBaumuster">
                    <thead>
                        <tr>
                            <th className="ptHead">Numero de pieza</th>
                            <th className="ptHead">Descripción</th>
                            <th className="ptHead">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docsPiezas.map((item,index) =>{
                            return <tr key={index}>
                                <td className="ptCasilla">{item.numeroPieza}</td>
                                <td className="ptCasilla">{item.descripcion}</td>
                                <td className="ptCasilla">{new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(item.precio,)}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export function PartsTable(){
    return <Table/>;
}