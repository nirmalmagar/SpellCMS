import React from "react";

interface headListProps {
  className?: string;
  size?: string;
  tableName: string;
  routeLink?: string;
  addTitle: string;
  onClick?: () => void;
}
const Heading: React.FC<headListProps> = ({
  className,
  size,
  tableName,
  routeLink,
  addTitle,
  onClick,
}) => {
  return (
    <div
      className={`${
        size === "small" ? " mb-0" : "mb-0"
      } ${className} flex justify-between items-start`}
    >
      <h1
        className={`${size === "small" ? "text-md" : "text-2xl"} font-semibold`}
      >
        {tableName}
      </h1>
      <div>
        {routeLink ? (
          <div
            // href={routeLink}
            className={`${
              size === "small" ? "text-sm py-1.5 px-2" : "p-2"
            } bg-red-400 text-white rounded-lg`}
            onClick={onClick}
          >
            {addTitle}
          </div>
        ) : (
          <button
            className={`${
              size === "small" ? "text-sm py-1.5 px-2" : "p-2"
            } bg-red-400 text-white rounded-lg`}
            onClick={onClick}
          >
            {addTitle}
          </button>
        )}
      </div>
    </div>
  );
};

export default Heading;
