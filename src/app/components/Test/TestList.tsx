import List from "../List/List"

const TestList = () => {
    return (
        <div className="test-list">
            <h3>Défaut</h3>
            <List>
                {
                    new Array(50).fill(1).map((_, index) => <button key={index}>Bonjour {index}</button>)
                }
            </List>
            <h3>Vertical</h3>
            <List direction="vertical">
                {
                    new Array(50).fill(1).map((_, index) => <button key={index}>Bonjour {index}</button>)
                }
            </List>
            <h3>Vertical - scroll</h3>
            <List direction="vertical" behavior="scroll" style={{height: 250}}>
                {
                    new Array(50).fill(1).map((_, index) => <button key={index}>Bonjour {index}</button>)
                }
            </List>
            <h3>Vertical - wrap</h3>
            <List direction="vertical" behavior="wrap" style={{height: 250}}>
                {
                    new Array(50).fill(1).map((_, index) => <button key={index}>Bonjour {index}</button>)
                }
            </List>
            <h3>Horizontal - scroll</h3>
            <List direction="horizontal" behavior="scroll" xGap={100}>
                {
                    new Array(50).fill(1).map((_, index) => <button key={index}>Bonjour {index}</button>)
                }
            </List>
        </div>
    )
}

export default TestList;