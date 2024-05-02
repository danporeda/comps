import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {

  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5"><GoBell /> Oh No!</Button>
      </div>
      <div>
        <Button danger outline><GoCloudDownload /> Wuh Oh</Button>
      </div>
      <div>
        <Button warning><GoDatabase /> Bitty Bitty Bop</Button>
      </div>
      <div>
        <Button secondary outline>Bing Bong</Button>
      </div>
      <div>
        <Button primary rounded>Ding Dang</Button>
      </div>
    </div>
  )
}

export default ButtonPage;