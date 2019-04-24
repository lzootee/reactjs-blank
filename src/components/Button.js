import React from 'react';

const ButtonComp = ({title, onPress, textColor}) => (
    <button
        style = {{marginBottom:10}}
        title = {title}
        color = {textColor}
        onClick = {onPress}/>
);

export default ButtonComp;