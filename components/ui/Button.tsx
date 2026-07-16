import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-cyan-600 hover:scale-[1.02] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}