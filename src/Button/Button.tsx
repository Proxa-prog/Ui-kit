import { FC } from "react";

import style from './Button.module.scss';

interface IButton {
    children: JSX.Element | string;
    onClick: () => void;
    id: string;
}
const Button: FC<IButton> = (props) => {
    const {
        children,
        onClick,
        id,
    } = props;

    return (
        <button
            id={id}
            className={style.button}
            onClick={onClick}
        >
            {/*<img src={Vite} width={50} height={50}/>*/}
            {children}
        </button>
    );
};

export default Button;