import React from 'react';
import { ArrayLetterCoordinates, ArraynumericCoordinates } from '../../utils/constants';
import Ship from '../Ship/Ship';
import './Field.css';

interface FieldProps {
  matrix: Array<Array<{}>>;
  disabled: Boolean;
  placeholder: String;
}

const Field: React.FC<FieldProps> = ({ matrix, placeholder, disabled }) => {
  function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <div className={`field ${disabled && 'field_disabled'}`}>
      <div className="field__coordinates field__coordinates_horizontal">
        {ArrayLetterCoordinates.map((str, i) => (
          <div key={i} className="field__coordinate">
            {str}
          </div>
        ))}
      </div>
      <div className="field__coordinates field__coordinates_vertical">
        {ArraynumericCoordinates.map((str, i) => (
          <div key={i} className="field__coordinate">
            {str}
          </div>
        ))}
      </div>
      <div className="field__battlefield">
        {matrix.map((line, i) =>
          line.map((cellData: any, j) => (
            <div
              onDragOver={dragOverHandler}
              onDrop={dropHandler}
              key={'' + i + j}
              className="field__cell"
            >
              {cellData.displayedShips && (
                <Ship
                  length={cellData.displayedShips.length}
                  position={cellData.displayedShips.position}
                />
              )}
            </div>
          ))
        )}
      </div>
      <p className="field__placeholder">{placeholder}</p>
    </div>
  );
};
export default Field;
