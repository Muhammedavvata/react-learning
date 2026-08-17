"use client";

function NameInput() {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log('Your name is: ' + event.target.value);
    }

    return (
        <input
            type="text"
            onChange={handleChange}
            placeholder="Enter your name..."
        />
    );
}

export default NameInput;