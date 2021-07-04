import React from 'react';
import Cell from '../Cell/Cell';
import { ArrayLetterCoordinates, ArraynumericCoordinates } from '../../utils/constants';
import './Field.css';

interface FieldProps {
  matrix: Array<Array<Number>>;
  placeholder: String;
}

const Field: React.FC<FieldProps> = ({ matrix, placeholder }) => {
  return (
    <div className="field">
      <div className="field__coordinates field__coordinates_horizontal">
        {ArrayLetterCoordinates.map((str) => (
          <div className="field__coordinate">{str}</div>
        ))}
      </div>
      <div className="field__coordinates field__coordinates_vertical">
        {ArraynumericCoordinates.map((str) => (
          <div className="field__coordinate">{str}</div>
        ))}
      </div>
      <div className="field__battlefield">
        {matrix.map((line, i) =>
          line.map((cellData, j) => <div key={'' + i + j} className="field__cell"></div>)
        )}
      </div>
      <p className="field__placeholder">{placeholder}</p>
    </div>
  );
};
export default Field;
