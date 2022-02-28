import classNames from 'classnames';
import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from "./ButtonCustom.module.scss";
import { FunctionComponent } from 'react';

export interface ButtonProps
    /* extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> */ {
    children?: ReactNode;
    title?: string;
    mode?: string;
    Icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
    size?: string;
    disabled?: boolean
}
const ButtonCustom: FC<ButtonProps> = ({ children,title,mode,Icon,size,disabled}) => {
    return (
    <button 
            className={classNames({[styles.btnConatiner] : true},
            {[styles.fillModeStyle]: mode === "fill" ? true : false},
            {[styles.outLineModeStyle]: mode === "outline" ? true : false},
            {[styles.dangerModeStyle]: mode === "danger" ? true : false},
            {[styles.disabledModeStyle]: mode === "disabled" ? true : false},
            {[styles.smallSize] : size === "small"? true : false} ,
            {[styles.mediumSize]: size === "medium"? true : false},
            {[styles.largeSize]: size === "large"? true : false})}
            disabled={disabled}
             >
            {children}
          <div className={styles.container}>
              {Icon?
              <Icon 
                fill={mode === "danger" ? "white":mode === "disabled" ? "rgb(48, 48, 48)" : mode === "fill" ? "white"  : mode === "outline" ? 'rgb(5, 11, 87)' : ""} 
                className={classNames('w-6 h-6')}
               />:null} 
                <span className={styles.titleStyle}>{title}</span>
          </div>
        </button>
        );
};

export default ButtonCustom;
