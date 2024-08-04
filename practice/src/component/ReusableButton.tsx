import React from "react";
import { IconType } from "react-icons";

interface ReusableButtonProps {
  text: string;
  imageSrc?: string;
  altText?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  icon?: IconType; // Add icon prop to accept a React icon component
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  altText = "button image",
  onClick,
  style,
  className = "",
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`flex items-center justify-center py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-300 ${className}`}
    >
      {Icon && <Icon className="mr-2 h-6 w-6" />}{" "}
    </button>
  );
};

export default ReusableButton;
