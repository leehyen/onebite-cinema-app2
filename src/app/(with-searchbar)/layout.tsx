import { ReactNode } from "react";

export default function Layout({
    children
}:{
    children:ReactNode;
}){
    return(
        <div>
            Global Layout
            {children}
        </div>
    );
}