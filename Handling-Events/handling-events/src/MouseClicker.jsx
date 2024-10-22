export function MouseClicker () {
 function handleMouseClick (event) {
    console.log(event.target.name)
 };

 function handleMouseClick2 (event) {
    console.log(event.target.src)
 };

    return (
        <div>
            <button name="one" onClick={handleMouseClick}>click me</button>
        <button name="two" onClick={handleMouseClick2}>
        <img src="images.png" alt="test-image" />
    </button>
        </div>
        

    )
};