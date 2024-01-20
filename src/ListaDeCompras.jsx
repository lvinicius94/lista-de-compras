import React, { useState, useEffect} from "react";
import './ListaDeCompras.css';
import Item from './Item'

function ListaDeCompras(){


    return (
        <div className="bordaPrincipal">
            <h1>Minha Lista de Compras de Dezembro</h1>
            <form className="formProdutos">
                <input type="text" 
                    placeholder="Farinha de Trigo da Marca XY..."
                />
                <button className="botaoAdicionar" type="submit">+</button>
            </form>
            
            <div className="listaProdutos">
                
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
   


            </div>
            
            <div className="footerTotal">
                <span className="quantidade">Quantidade: 36</span>
                <div className="divSubtotal">
                    <span className="subtotal">Subtotal:</span>
                    <span className="valorSubtotal">R$ 2.070,36</span>
                </div>
            </div>
                
        </div>

    )

}


export default ListaDeCompras