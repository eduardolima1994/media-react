import React, {useState} from 'react'
import Nota from './componentes/Nota';
import Resultado from './componentes/Resultado';

export default function App(){



  const [nota, setNota] = useState({
    "nota1" : "1",
    "nota2" : "2",
    "nota3" : "3",
    "nota4" : "4"
  })

  const handleSetNota=(e)=>{
    if (e.target.getAttribute('name')==='nome1') {
      setNota({"nota1" : e.target.value, "nota2" : nota.nota2, "nota3" : nota.nota3, "nota4" : nota.nota4})
    }else if (e.target.getAttribute('name')==='nome2') {
      setNota({"nota1" : nota.nota1, "nota2" : e.target.value, "nota3" : nota.nota3, "nota4" : nota.nota4})
    }else if (e.target.getAttribute('name')==='nome3') {
      setNota({"nota1" : nota.nota1, "nota2" : nota.nota2, "nota3" : e.target.value, "nota4" : nota.nota4})
    }else if (e.target.getAttribute('name')==='nome4') {
      setNota({"nota1" : nota.nota1, "nota2" : nota.nota2, "nota3" : nota.nota3, "nota4" : e.target.value})
    }
  }


  return(
    <>
      <Nota num={1} name="nome1" valor={nota.nota1} set={handleSetNota} />
      <Nota num={2} name="nome2" valor={nota.nota2} set={handleSetNota} />
      <Nota num={3} name="nome3" valor={nota.nota3} set={handleSetNota} />
      <Nota num={4} name="nome4" valor={nota.nota4} set={handleSetNota} />
      <Resultado total={parseFloat(nota.nota1) + parseFloat(nota.nota2) + parseFloat(nota.nota3) + parseFloat(nota.nota4)} />
    </>
  );
}