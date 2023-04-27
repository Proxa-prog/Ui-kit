import Vite from '/public/vite.svg';
import {FC} from "react";

interface IButton {
    children: JSX.Element;
}
const Button: FC<IButton> = (props) => {
    const { children } = props;

    return (
        <button>
            {/*<img src={Vite} width={50} height={50}/>*/}
            {children}
        </button>
    );
};

export default Button;