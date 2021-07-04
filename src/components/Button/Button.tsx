import './Button.css';

interface ButtonProps {
  onClick(): void;
  title: String;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="btn">
      {props.title}
    </button>
  );
};
export default Button;
