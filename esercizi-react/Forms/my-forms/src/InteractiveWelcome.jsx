import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome () {
    const [name, setName] = useState('')
    
    return (
        <div>
            <input name="name" />
            <Welcome />
        </div>
    )
}