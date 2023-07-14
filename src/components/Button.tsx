import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant: 'primary' | 'outlined';

}

function Button({ className, variant="primary", ...props }: ButtonProps) {

    const variantClasses ={
        primary: "bg-primary text-white hover:bg-secondary",
        outlined: "bg-transparent border border-primary text-primary"
    }

    const _className = twMerge(
    variantClasses[variant], 
    "appearance-none rounded-lg p-2 mt-4 text-sm font-medium shadow w-full transition-all "
    );

    return (
    <button className={_className} {...props}>
        {props.children}
    </button>
    );
}

export default Button;