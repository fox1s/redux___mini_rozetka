import './Card.css'
export default function CardComponent({items}) {
    let sum=0;

    for (const item of items) {
        sum +=item.price;
    }
    return (
        <div className="card">
            <div className="header">Обрані товари</div>
            <div className="content">
                {
                    items.map(product => <div className={'item-div'} key={product.id}>{product.id}. {product.title}</div>)
                }
                <div className={'div-counter'}>Кількість товарів: {items.length}</div>
                <div className={'div-sum'}>Сума: {sum}</div>
            </div>
        </div>
    );
}
