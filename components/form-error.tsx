import { AlertCircle } from "lucide-react";

interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if(!message) return null;
    return (
        <div className=" bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <AlertCircle className="w-5 h-5" />
            <p>{message}</p>
        </div>
    )
}