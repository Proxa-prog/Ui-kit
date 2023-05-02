import { Button } from "./index";
import { useState } from "react";

function App() {
    const [text, setText] = useState('кнопище');

    const handleButtonCLick = () => {
        setText(text + '1')
    }

    return (
        <>
            <div>
                <Button
                    id='buttonID'
                    onClick={handleButtonCLick}
                >
                    {text}
                </Button>
            </div>
        </>
    )
}

export default App
