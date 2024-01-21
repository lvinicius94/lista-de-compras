import React, { useState, useEffect} from "react";
import './Item.css';
import Icone from './assets/removeIcon.png'



function Item({textoproduto, imagemIcone, onClick, corProduto}){  

    const [quantidadeDinamica, setquantidadeDinamica] = useState(1);

    const adicionar = () => {
        setquantidadeDinamica(valorAtual => valorAtual + 1);
    };

    const subtrair = () => {
        setquantidadeDinamica(valorAtual => Math.max(valorAtual - 1, 1));
    };

///////////////////////////////////////////////////



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

    <div className="divStatusIcon">
        <div className="item" style={corProduto}  >

            <div className="nomePreco">
                <span onClick={onClick} className="nomeItem">{textoproduto}</span>
                <input className="precoItem" type="text" value={preco} onChange={handleChange} />
            </div>

            <div className="quantidadeItem">
                    <button onClick={subtrair} className="menosItem">-</button>
                    <span className="valorQuantidade">{quantidadeDinamica}</span>
                    <button onClick={adicionar} className="maisItem">+</button>
            </div>

            <div className="divBotaoRemover">
                    <button className="botaoRemover"><img className="removeButton" src={Icone} alt="botao que remove produtos" /></button>
            </div>
    


        </div>
        <img className="statusIcon" src={imagemIcone} alt="Produto não selecionado" />    

    </div>
   )
}


export default Item