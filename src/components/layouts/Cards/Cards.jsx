import Card from "../../elements/Card/Card";

const Cards = (props) => {
    const {children} = props;
    return(
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center py-4 my-3">
                {children}
            </div>
        </>
    );
}

export default Cards;