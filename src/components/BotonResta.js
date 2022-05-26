import { CuentaContext } from '../App';

function BotonResta() {
  return (
    <CuentaContext.Consumer>
      {({ cuenta, setCuenta }) => <button onClick={() => setCuenta(cuenta - 1)}>-</button>}
    </CuentaContext.Consumer>
    
  )
}

export default BotonResta;
