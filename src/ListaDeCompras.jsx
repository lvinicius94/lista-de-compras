import React, { useState, useEffect} from "react";
import './ListaDeCompras.css';
import Item from './Item'
import CampoTotal from './CampoTotal'
import YesIcon from './assets/yesIcon.png'
import NotIcon from './assets/notIcon.png'

function ListaDeCompras(){

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

   const vermelho = {background:'#D9EDFF'};
   const azul = {background:'#f5f5f5'};

    function adicionaProduto(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }
        setLista([...lista,{text: novoItem, foiMarcado: false}])
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }


    function marcou(index){
        const listaAux = [...lista];
        listaAux[index].foiMarcado = !listaAux[index].foiMarcado;

        setLista(listaAux);
    }


    return (
        <div className="bordaPrincipal">
            <div className="topo">
            <h1>Minha Lista de Compras de Dezembro</h1>
            <form onSubmit={adicionaProduto} className="formProdutos">
                <input 
                id="input-entrada"
                type="text" 
                value={novoItem}
                onChange={(e)=>{setNovoItem(e.target.value)}}
                    placeholder="Farinha de Trigo da Marca XY..."
                />
                <button className="botaoAdicionar" type="submit">+</button>
            </form>

            </div>
            
            
            <div className="listaProdutos">

                {
                    lista.length < 1
                    ?
                    <p>Adicione os produtos para sua lista de compras</p>
                    :
                    lista.map((item, index)=>(
                    <Item 
                    key={index}
                    imagemIcone = {item.foiMarcado ? YesIcon : NotIcon}
                    corProduto = {item.foiMarcado ? vermelho : azul}
                    textoproduto ={item.text}
                    onClick={()=>{marcou(index)}}

                    />))                    
                }   

            </div>
            
            <CampoTotal />
                
        </div>

    )

}

export default ListaDeCompras