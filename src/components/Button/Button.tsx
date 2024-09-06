import { BtnProps } from "../../types/buttons";

const Button: React.FC<BtnProps> = ({ icon, text, onClick, onMouseEnter, onMouseLeave, className, children }) => {
    return (
        <div>
            <div onClick={onClick} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} className={`${className}   dark:hover:text-white dark:hover:bg-slate-700 cursor-pointer`}>
                {icon}
                <p className="">{text}</p>
                {children}
            </div>
        </div>
    )
}
export default Button;