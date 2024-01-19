import styles from './Message.module.css'

import { useState, useEffect } from 'react'

function Message({type, msg}){

    const [visible,setVisible] = useState(false)

    //se nao tiver msg visibilidade sera falsa e return nada (encerra)
    useEffect(()=> {
      if(!msg) {
        setVisible(false)
        return
      }
    /*se tiver a msg  a visibilidade dela sera true.
        (uma const com timer para aparecer a mensagem 
        por 3000 milisegundos O setVisible false e para msg sair depois do timer
        no final retornando o timer para limpar */ 
      setVisible(true)
      const timer = setTimeout(() =>{
        setVisible(false)
      },3000)

      return () => clearTimeout (timer)
    },[msg]);
    

    return (
        <>
        {visible &&(
            <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
        )}
        </>
    )
}

export default Message