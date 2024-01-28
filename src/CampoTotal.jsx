import React, { useState, useEffect} from "react";
import './CampoTotal.css';




function CampoTotal({quantidadeTotal,somaSubTotal}){  

    if (somaSubTotal) {
        somaSubTotal = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(somaSubTotal );
    }

    return (

<div className="footerTotal">
                <span className="quantidade">Quantidade: {quantidadeTotal}</span>
                <div className="divSubtotal">
                    <span className="subtotal">Subtotal:</span>
                    <span className="valorSubtotal">{somaSubTotal}</span>
                </div>
</div>

    )
}

export default CampoTotal