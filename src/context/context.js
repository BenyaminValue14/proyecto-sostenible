import { createContext, useState } from "react";
export const Globales = createContext(null);

const Context = ({children}) => {
  const [usuario, setUsuario] = useState({});
  const [pedido, setPedido] = useState('');

  return (
    <Globales.Provider value={{usuario, setUsuario,pedido, setPedido}} >
      {children}
    </Globales.Provider>
  )
}

export default Context
