

const Button = ({btnText , className}) => {
    return (
        <button className={` cursor-pointer ${className}`}>{btnText}</button>
    )
}

export default Button