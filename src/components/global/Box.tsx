import type { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={`w-full rounded-md shadow-md bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Box;
