import React, { useState, useEffect} from "react";
import './CampoTotal.css';




function CampoTotal(){  

    return (

<div className="footerTotal">
                <span className="quantidade">Quantidade: {50}</span>
                <div className="divSubtotal">
                    <span className="subtotal">Subtotal:</span>
                    <span className="valorSubtotal">R$ 2.466,00</span>
                </div>
</div>

    )
}

export default CampoTotal