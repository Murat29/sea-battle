import { arrayShips } from '../../utils/constants';
import Ship from '../Ship/Ship';
import './ContainerShips.css';

const ContainerShips: React.FC = () => {
  return (
    <div className="container-ships">
      {arrayShips.map((lengthShips, i) => (
        <Ship key={i} length={lengthShips} position="h" />
      ))}
    </div>
  );
};
export default ContainerShips;
