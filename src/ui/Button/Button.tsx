import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button.style';

export type ButtonProps = {
    className?: string;
    disabled?: boolean;
    href?: string;
    type?: 'submit' | 'reset' | 'button';
    onClick?: (e: React.MouseEvent<Element>) => void;
};

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { disabled, onClick } = props;
    const isExternalLink = props.href ? /^https?:\/\//.test(props.href) : false;

    // if (props.href) {
    //     if (isExternalLink) {
    //         return (
    //             <a href={props.href} className={classNames('a-btn', props.className)}>
    //                 <span className="a-btn__inner">{props.children}</span>
    //             </a>
    //         );
    //     } else {
    //         return (
    //             <Link to={props.href} className={classNames('a-btn', props.className)}>
    //                 <span className="a-btn__inner">{props.children}</span>
    //             </Link>
    //         );
    //     }
    // }

    return (
        <StyledButton 
            as="button" 
            disabled={disabled}
            onClick={onClick}
        >
            {props.children}
        </StyledButton>
        // <button
        //     className={classNames('a-btn', props.className)}
        //     disabled={props.disabled}
        //     onClick={props.onClick}
        //     type={props.type}
        // >
        //     <span className="a-btn__inner">{props.children}</span>
        // </button>
    );
};

export default Button;