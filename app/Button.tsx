"use client";
type ButtonProps = {
    firstButton: string,
    secondButton: string
}
function Button({ firstButton, secondButton }: ButtonProps) {
    function handleFirstClick() {
        console.log(firstButton);
}

function handleSecondClick() {
    console.log(secondButton);
}
    return (
        <>
        <button onClick={handleFirstClick}>
             First Button
        </button>
        
        <button onClick={handleSecondClick}>
                Second Button
        </button>
        </>
        );
}

export default Button;