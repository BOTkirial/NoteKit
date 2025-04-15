import Rating from "@component/Rating/Rating";

const TestRating = () => {

    return (
        <div className="test-rating">
            <Rating defaultValue={3} />
            <Rating defaultValue={3} symbol="⭐" />
            <Rating defaultValue={1} symbol="⭐" />
            <Rating defaultValue={7} symbol="♥️" maxValue={10} onChange={(value) => console.log(value)} />
            <Rating disabled defaultValue={7} symbol="♥️" maxValue={10}  />
        </div>
    )

}


export default TestRating;