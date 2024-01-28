import React, { useState, useEffect} from "react";
import './ListaDeCompras.css';
import Item from './Item'
import CampoTotal from './CampoTotal'
import YesIcon from './assets/yesIcon.png'
import NotIcon from './assets/notIcon.png'
import BotaoConfirmar from './BotaoConfirmar'


function ListaDeCompras(){




    const listaArmazenada = localStorage.getItem('Lista');

    const [Titulo, setTitulo] = useState('Minha Lista de Compras');       

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

    const somaTotal = lista.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual.quantidade;
      }, 0);

    const somaValorTotal = lista.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual.preco * itemAtual.quantidade;
      }, 0);


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



        setLista([{text: novoItem, foiMarcado: false, quantidade: 1, preco:10}, ...lista])
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
            const confirmacao = window.confirm("Remover Item? A ação não poderá ser desfeita.");
        
            if (confirmacao) {
                const listaAux = [...lista];
                listaAux.splice(index,1);
                setLista(listaAux);
              console.log("Ação confirmada!");
            } else {
              // Coloque aqui a lógica para o que deve acontecer se o usuário cancelar
              console.log("Ação cancelada!");
            }

        
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
                    preco={item.preco}
                    valorEmReal = {item.valorEmReal}        
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
       

            <CampoTotal
            
            quantidadeTotal = {somaTotal}
            somaSubTotal = {somaValorTotal} 
            
            /> 
            

        </div>



    )

}

export default ListaDeCompras