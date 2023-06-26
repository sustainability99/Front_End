import React from "react";
import { CardItem } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { selectItemsData, setItem } from "../redux/slices/itemsSlice";
import { decrementCount, incrementCount, removeItem, selectCartItemById } from "../redux/slices/cartSlice";

const CartCard: React.FC<CardItem> = ({
    id,
    images,
    title,
    types,
    sizes,
    price,
    rating,
    info,
}) => {
    const dispatch = useDispatch();
    const { typeName, activeType, activeSize } = useSelector(selectItemsData);
    const counter = useSelector(selectCartItemById(id));
    const count: number = counter && counter.count;

    // Сокращённая форма записи для объекта. Возможно только в том случае, если пара 'ключ - значение' имеют одинаковое имя
    const cardItem = {
        id,
        images,
        title,
        types,
        sizes,
        price,
        rating,
        info,
    };

    const type = types[activeType];
    const size = sizes[activeSize];

    return (
        <div>
            <div>
                <img src={images[0]} alt={title} />
                <div>
                    <h2>
                        <a
                            href={`/pizza/${id}`}
                            onClick={() => dispatch(setItem(cardItem))}
                        >
                            {title}
                        </a>
                    </h2>
                    <p>
                        {typeName[type]} тесто, {size} см.
                    </p>
                </div>
            </div>
            <div>
                <h2>Цена</h2>
                <p>{price} $</p>
            </div>
            <div>
                <h2>Количество</h2>
                <div>
                    <button onClick={() => dispatch(decrementCount(id))}>-</button>
                    <span>{count}</span>
                    <button onClick={() => dispatch(incrementCount(id))}>+</button>
                </div>
            </div>
            <button onClick={() => dispatch(removeItem(id))}></button>
        </div>
    );
};

export default CartCard;