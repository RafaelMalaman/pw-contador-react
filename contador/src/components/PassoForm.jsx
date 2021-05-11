import React from 'react'

export default props =>{
    return(
        <h2>
            <label htmlFor="passoInput">Passo: </label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                //Parâmetro event = evento da tag (no caso o input)
                //o sinal de + converte o value (padrão string) para number
                onChange={event => props.setPasso(+event.target.value)}

             />
        </h2>
    )
}