import * as React from "react";
import {Close} from "react-ionicons";
import {Remove} from "react-ionicons";


interface IconTypes {
  name: string,
  size: "xs" | "sm" | "md" | "lg" | "hg" | undefined,
  onClick?: () => void,
  className?: string,
  color?: string
}

export const Icon: React.FC<IconTypes> = ({name, size, onClick, className, color}) => {

  const getIconSize = (size: string | undefined) => {
    switch (size) {
      case "xs":
        return "10px"
      case "sm":
        return "16px"
      case "md":
        return "22px"
      case "lg":
        return "30px"
      case "hg":
        return "40px"
      default:
        return "16px"
    }
  }

  switch (name) {
    case "close":
      return <Close width={getIconSize(size)} height={getIconSize(size)} color={color ? color : "black"} onClick={onClick} cssClasses={className}/>
    case "minimize":
      return <Remove width={getIconSize(size)} height={getIconSize(size)} color={color ? color : "black"} onClick={onClick} cssClasses={className}/>;
    default:
      return <></>
  }
}
