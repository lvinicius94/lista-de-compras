import React, { useState, useEffect} from "react";
import './CampoTotal.css';


function CampoTotal(){  

    const quantidadeTotal = 30;

    return (

<div className="footerTotal">
                <span className="quantidade">Quantidade: {quantidadeTotal}</span>
                <div className="divSubtotal">
                    <span className="subtotal">Subtotal:</span>
                    <span className="valorSubtotal">R$ 2.466,00</span>
                </div>
</div>

    )
}

export default CampoTotal