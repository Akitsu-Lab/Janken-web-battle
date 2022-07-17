import { ColoredMessage } from "./components/coloredMessage"
export const App = () => {
    const onClickButton = () => {
        alert();
    }

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    };
    return (
        <>
            {console.log("TEST")}
            <h1 style={{color:"red"}}>こんにちは！</h1>
            <ColoredMessage />
            <p style={contentPinkStyle}>お元気ですか？</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}