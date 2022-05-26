import Cuenta from '../components/Cuenta';
import BotonResta from './BotonResta';
import BotonSuma from './BotonSuma';

function ComponenteA() {

  return (
    <div style={{ maxWidth: 300, border: '1px solid #fff'}}>
      <h3>ComponenteA</h3>
      <Cuenta />
      <div>
        <BotonResta />
        <BotonSuma />
      </div>
    </div>
  )
}

export default ComponenteA;
