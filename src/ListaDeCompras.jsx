import React, { useState, useEffect} from "react";
import './ListaDeCompras.css';
import Item from './Item'
import CampoTotal from './CampoTotal'
import YesIcon from './assets/yesIcon.png'
import NotIcon from './assets/notIcon.png'

function ListaDeCompras(){

    const listaArmazenada = localStorage.getItem('Lista');

    const [Titulo, setTitulo] = useState('Minha Lista de Compras');
    
    const [quantidadeItem, setquantidadeItem] = useState(1);



    function subtrair(index){
        const listaAux = [...lista];
        if(listaAux[index].quantidade>1){
            listaAux[index].quantidade --;
        }        

        setLista(listaAux);
    }

    function adicionar(index){
        const listaAux = [...lista];
        listaAux[index].quantidade ++;

        setLista(listaAux);
    }
    

    // Carrega o título salvo do Local Storage quando o componente é montado
    useEffect(() => {
        const savedTitulo = localStorage.getItem('Titulo');
        if (savedTitulo) {
            setTitulo(savedTitulo);
        }
    }, []);

    // Salva o título no Local Storage quando ele é alterado
    useEffect(() => {
        localStorage.setItem('Titulo', Titulo);
    }, [Titulo]);


    const [lista, setLista] = useState(listaArmazenada ? JSON.parse(listaArmazenada) : []);
    const [novoItem, setNovoItem] = useState("");

    


    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(lista));        
    },[lista])

   const marcado = {background:'#D9EDFF', textDecoration:'line-through'};
   const desmarcado = {background:'#f5f5f5'};

    function adicionaProduto(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }



        setLista([{text: novoItem, foiMarcado: false, quantidade: quantidadeItem}, ...lista])
        setNovoItem("");
        /*document.getElementById('input-entrada').focus(); */
    }


    function primeiraMaiuscula(str) {

        return str.replace(/\w\S*/g, (txt) => 
            txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
    }




    function marcou(index){
        const listaAux = [...lista];
        listaAux[index].foiMarcado = !listaAux[index].foiMarcado;

        setLista(listaAux);
    }

    function removeu(index){
        const listaAux = [...lista];
        listaAux.splice(index,1);
        setLista(listaAux);
    }


    return (
        <div className="bordaPrincipal">
            <div className="topo">

            <input
                className="Titulo" 
                type="text" 
                value={Titulo} 
                onChange={(e) => setTitulo(e.target.value)} 
            />



            <form onSubmit={adicionaProduto} className="formProdutos">
                <input 
                id="input-entrada"
                type="text" 
                value={novoItem}
                onChange={(e)=>{setNovoItem(e.target.value)}}

                    placeholder="Digite um produto..."
                />
                <button className="botaoAdicionar" type="submit">+</button>
            </form>

            </div>
            
            
            <div className="listaProdutos">

                {
                    lista.length < 1
                    ?
                    <h2>Adicione os produtos para fazer a sua primeira lista de compras!</h2>
                    /*<p>Adicione os produtos para sua lista de compras</p> */
                    :
                    lista.map((item, index)=>(
                    <Item 
                    key={index}

                    quantidadeFinal = {item.quantidade}
                    onClickAdicionar={()=>{adicionar(index)}}        
                    onClickSubtrair={()=>{subtrair(index)}}     

                    imagemIcone = {item.foiMarcado ? YesIcon : NotIcon}
                    corProduto = {item.foiMarcado ? marcado : desmarcado}
                    textoproduto ={primeiraMaiuscula(item.text)}
                    onClick={()=>{marcou(index)}}
                    onClickR={()=>{removeu(index)}}

                    />))                    
                }   

            </div>
            
            <CampoTotal somaTotal={300}/>
                
        </div>

    )

}

export default ListaDeCompras