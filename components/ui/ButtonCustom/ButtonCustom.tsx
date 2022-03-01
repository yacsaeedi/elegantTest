import classNames from 'classnames';
import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from "./ButtonCustom.module.scss";
import { FunctionComponent } from 'react';

export interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
    children?: ReactNode;
    title?: string;
    mode?: "contained" | "containedOutlined" | "danger" | "dangerOutlined" | "disabledOutlined";
    Icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
    size?: "small" | "medium" | "large" ;
    disabled?: boolean;
}
const ButtonCustom: FC<ButtonProps> = ({ children,title,mode,Icon,size,disabled,...props}) => {
    return (
    <button 
            className={classNames({[styles.btnConatiner] : true},
            {[styles.containedModeStyle]: mode === "contained"},
            {[styles.containedOutlinedModeStyle]: mode === "containedOutlined"},
            {[styles.dangerModeStyle]: mode === "danger" },
            {[styles.dangerOutlinedModeStyle]: mode === "dangerOutlined"},
            {[styles.disabledOutlinedModeStyle]: mode === "disabledOutlined"},
            {[styles.disabledModeStyle]: disabled},
            {[styles.smallSize] : size === "small"} ,
            {[styles.mediumSize]: size === "medium"},
            {[styles.largeSize]: size === "large"})}
            disabled={disabled}
            {...props}
            
             >
            {children}
          <div className={styles.container}>
              {Icon?
              <Icon 
                fill={mode === "danger" ? "white": mode === "dangerOutlined" ? "rgb(221, 0, 0)" : disabled  ? "rgb(48, 48, 48)" : mode === "contained" ? "white" : mode === "containedOutlined" ? "rgb(5, 11, 87)"  : mode === "disabledOutlined" ? 'rgb(160, 160, 160)' : ""} 
                className={classNames('w-6 h-6')}
               />:null} 
                <span className={styles.titleStyle}>{title}</span>
          </div>
        </button>
        );
};

export default ButtonCustom;
