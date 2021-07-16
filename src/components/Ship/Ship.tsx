import React from 'react';
import './Ship.css';

interface ShipProps {
  position: 'h' | 'v';
  length: number;
}

const Ship: React.FC<ShipProps> = ({ position, length }) => {
  // function dragStartHandler(e: React.DragEvent<HTMLDivElement>): void {}
  // function dragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
  //   setAAA(false);
  //   console.log(e.target);
  // }
  // function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>): void {
  //   setAAA(false);
  // }
  // function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
  //   e.preventDefault();
  //   setAAA(true);
  // }
  // function dropHandler(e: React.DragEvent<HTMLDivElement>): void {
  //   e.preventDefault();
  //   setAAA(false);
  // }
  return (
    <div
      // draggable={true}
      // onDragStart={dragStartHandler}
      // onDragLeave={dragLeaveHandler}
      // onDragEnd={dragEndHandler}
      // onDragOver={dragOverHandler}
      // onDrop={dropHandler}
      className={`ship ${'ship_' + position + '_' + length} ${
        'ship_' + (position === 'h' ? 'v' : 'h') + '_1'
      }`}
    ></div>
  );
};
export default Ship;
