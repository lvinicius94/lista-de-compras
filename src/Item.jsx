import React, { useState, useEffect} from "react";
import './Item.css';
import Icone from './assets/removeIcon.png'


function Item({textoproduto, imagemIcone, onClick, corProduto, onClickR, quantidadeFinal, onClickAdicionar, onClickSubtrair}){  


    

///////////////////////////////////////////////////

  

/////////////////////////////////////////////////////

    const [preco, setPreco] = useState('R$ 0,00');

    const handleChange = (event) => {
        let deifnirPreco = event.target.value;

        // Remove caracteres não numéricos
        deifnirPreco = deifnirPreco.replace(/[^0-9]/g, '');

        // Formata o valor como preço
        if (deifnirPreco) {
            deifnirPreco = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(deifnirPreco / 100);
        }

        setPreco(deifnirPreco);
    };

   return (

        <div className="item" style={corProduto}  >

            <div className="nomePreco">
                <span onClick={onClick} className="nomeItem">{textoproduto}<img className="statusIcon" src={imagemIcone} alt="Produto não selecionado" /></span>
                
                <input 
                className="precoItem" 
                type="text" 
                value={preco} 
                onChange={handleChange} 
                pattern="[0-9]*"
                inputMode="numeric"
                />

            </div>

            <div className="quantidadeItem">
                    <button onClick={onClickSubtrair} className="menosItem">-</button>
                    <span className="valorQuantidade">{quantidadeFinal}</span>
                    <button onClick={onClickAdicionar} className="maisItem">+</button>
                    

            </div>

            <div className="divBotaoRemover">
                    <button onClick={onClickR} className="botaoRemover"><img className="removeButton" src={Icone} alt="botao que remove produtos" /></button>
            </div>
    
            

        </div>

      
            
   )
}


export default Item