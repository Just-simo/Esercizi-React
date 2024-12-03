import { useState } from "react"
import "./style.css"

export function Container ({title, children}) {
    const [collapse, setCollapse] = useState(false)

    function handleButton() {
        setCollapse(!collapse)
    }

    return (
        <div className="container">
            <div className="container-title">{title} <button onClick={handleButton}>Nascondi</button></div>
            <div className={`container-children ${collapse ? 'hide' : 'show'}`}>
                {children}
                <h1>Ciao a tutti</h1>
            </div>
        </div>
    )
}