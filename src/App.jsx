export const App = () => {
    const onClickButton = () => {
        alert();
    }
    return (
        <>
            {console.log("TEST")}
            <h1>こんにちは！</h1>
            <p>お元気ですか？</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}