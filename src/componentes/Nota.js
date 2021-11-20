import React from 'react'

export default function Nota(props){
    return(
        <>
            <label>Insita a Nota {props.num}: </label><br/>
            <input value={props.valor} name={props.name} onChange={(e)=>props.set(e)} /><br/>
        </>
    );
}