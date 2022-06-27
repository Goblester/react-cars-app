import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const BaseButton = styled.button`
  ${tw`
     text-xs
     text-white
     font-semibold
     px-5
     py-3
     border-transparent
     border-2
     border-solid
     rounded-md
     bg-transparent
     outline-none
     focus:outline-none
     transition-all
     duration-200
     ease-in-out
     m-1
    `}
`

const FilledButton = styled(BaseButton)`
  ${tw`
      text-red-500
      border-red-500
      bg-transparent
      hover:bg-red-500
      hover:text-white
      hover:border-transparent
  `}
`

const OutlinedButton = styled(BaseButton)`
  ${tw`
      bg-red-500
      hover:border-red-500
      hover:bg-transparent
      hover:text-red-500
  `}
`


interface IButtonProps {
    theme?: 'filled' | 'outlined'
    text: string
    className?: string
}


const Button: React.FC<IButtonProps> = (props) => {
    const {theme, text, className} = props

    if (theme === 'filled') return <FilledButton className={className}>{text}</FilledButton>
    else return <OutlinedButton className={className}>{text}</OutlinedButton>
}

export default Button