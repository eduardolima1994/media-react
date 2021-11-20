import React from 'react'

export default function Resultado(props){
    return(
        <>
            <p>A média é: { props.total }</p>
            <p>{props.total >= 40 ? 'Aprovado' : 'Reprovado'}</p>
        </>
    );
}