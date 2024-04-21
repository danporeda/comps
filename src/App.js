import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {

  return (
    <div>
      <div>
        <Button success rounded outline><GoBell /> Penis Pop</Button>
      </div>
      <div>
        <Button danger outline><GoCloudDownload /> Titty Top</Button>
      </div>
      <div>
        <Button warning><GoDatabase /> Clitty Cop</Button>
      </div>
      <div>
        <Button secondary outline>Bitty Bop</Button>
      </div>
      <div>
        <Button primary rounded>Shitty Shop</Button>
      </div>
    </div>
  )
}

export default App;