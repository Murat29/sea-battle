import React from 'react';
import { arrayShips } from '../../utils/constants';
import { getRandomNumber } from '../../utils/getRandomNumber';
import { typeCell, typeMatrix } from '../../type/typeCell';
import Field from '../Field/Field';
import ContainerShips from '../ContainerShips/ContainerShips';
import './Main.css';

const Main: React.FC = () => {
  const [arr, setArr] = React.useState<typeMatrix>(
    Array(10)
      .fill(Array(10))
      .map((arr) => arr.fill({ displayedShips: null, ship: null, shot: false, free: true }))
  );

  function generateShipPosition(lengthShips: Number, matrix: typeMatrix): Array<any> {
    let i = getRandomNumber(0, 9);
    let j = getRandomNumber(0, 9);

    const position = Math.random() < 0.5 ? 'h' : 'v';

    for (let k = 0; k < lengthShips; k++) {
      // const curI = position === 'v' ? i + k : i;
      // const curJ = position === 'h' ? j + k : j;
      const curI = position === 'v' ? i + k : i;
      const curJ = position === 'h' ? j + k : j;
      // console.log(`i: ${curI}, j: ${curJ}`);
      // console.log(!matrix[curI]?.[curJ].free);

      const aa = !matrix[curI]?.[curJ]?.free;
      if (!matrix[curI]?.[curJ]?.free) return generateShipPosition(lengthShips, matrix);
    }
    return [i, j, position];
  }

  function markOccupiedCells(
    i: number,
    j: number,
    position: string,
    lengthShips: number,
    matrix: typeMatrix
  ) {
    if (position === 'h') {
      for (let k = 0; k < 3; k++) {
        if (matrix[i - 1 + k]?.[j - 1]?.free) matrix[i - 1 + k][j - 1].free = false;
        if (matrix[i - 1 + k]?.[j + lengthShips]?.free)
          matrix[i - 1 + k][j + lengthShips].free = false;
      }

      for (let k = 0; k < lengthShips; k++) {
        if (matrix[i - 1]?.[j + k]?.free) matrix[i - 1][j + k].free = false;
        if (matrix[i]?.[j + k]?.free) {
          matrix[i][j + k].free = false;
          matrix[i][j + k].ship = true;
        }
        if (matrix[i + 1]?.[j + k]?.free) matrix[i + 1][j + k].free = false;
      }
    } else if (position === 'v') {
      for (let k = 0; k < 3; k++) {
        if (matrix[i - 1]?.[j - 1 + k]?.free) matrix[i - 1][j - 1 + k].free = false;
        if (matrix[i + lengthShips]?.[j - 1 + k]?.free)
          matrix[i + lengthShips][j - 1 + k].free = false;
      }

      for (let k = 0; k < lengthShips; k++) {
        if (matrix[i + k]?.[j - 1]?.free) matrix[i + k][j - 1].free = false;
        if (matrix[i + k]?.[j]?.free) {
          matrix[i + k][j].free = false;
          matrix[i + k][j].ship = true;
        }
        if (matrix[i + k]?.[j + 1]?.free) matrix[i + k][j + 1].free = false;
      }
    }
  }

  function generatingYourOwnField(): typeMatrix {
    const newMatrix: any = Array.from({ length: 10 }, () => {
      return Array.from({ length: 10 }, () => {
        return { displayedShips: null, ship: null, shot: false, free: true };
      });
    });

    arrayShips.forEach((lengthShips) => {
      const [i, j, position] = generateShipPosition(lengthShips, newMatrix);
      newMatrix[i][j].displayedShips = { position: position, length: lengthShips };
      markOccupiedCells(i, j, position, lengthShips, newMatrix);
    });

    return newMatrix;
  }

  React.useEffect(() => {
    setArr(generatingYourOwnField());
  }, []);

  return (
    <main className="main">
      <Field matrix={arr} disabled={false} placeholder="Ваше поле" />
      <div className="main__container">
        <Field matrix={arr} disabled={true} placeholder="Поле противника" />
        {/* <div className="main__ships">
          <ContainerShips />
        </div> */}
      </div>
    </main>
  );
};
export default Main;
