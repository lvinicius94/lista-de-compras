import React, { useState, useEffect} from "react";
import './Item.css';



function Item(){  
   return (
    <div className="item">
        <span className="nomeItem">Farinha de Trigo da Marca XY</span>
            <div className="quantidadeItem">
                <span>123</span>
            </div>
        <button className="botaoRemover">X</button>
        <span className="precoItem">R$ 12,00</span>
    </div>
   )
}


export default Item