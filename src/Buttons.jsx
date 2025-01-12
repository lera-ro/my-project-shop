function Buttons({filteredGoods}) {
    return(
        <div className="cont">           
            <button onClick={() => filteredGoods("care")} className="change">Care</button>
            <button onClick={() => filteredGoods("decorative")} className="change">Decorative cosmetics</button>
            <button onClick={() => filteredGoods("perfume")} className="change">Perfume</button>
        </div>
    )
}

export default Buttons;