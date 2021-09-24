import React from "react";
import 'semantic-ui-css/semantic.min.css';
import {Card, Image, Button} from 'semantic-ui-react';

const BookCard = (book) => {
    const {title, image, author, number_of_pages, language, year_of_publication, price, addToCart, addCount} = book;
    return (
        <Card>
            <Image src={image}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Автор:&nbsp;{author}</span>
                </Card.Meta>
                <Card.Meta>
                    <span className='date'>Кількість сторінок:&nbsp;{number_of_pages}</span>
                </Card.Meta>
                <Card.Meta>
                    <span className='date'>Мова:&nbsp;{language}</span>
                </Card.Meta>
                <Card.Meta>
                    <span className='date'>Рік публікації:&nbsp;{year_of_publication}</span>
                </Card.Meta>
            </Card.Content>

            <Card.Content extra>
                <a>{price}&nbsp;грн</a>
            </Card.Content>
            <Button onClick={addToCart.bind(this, book)}>Добавити в корзину {addCount > 0 && `(${addCount})`}</Button>
        </Card>
    );
};

export default BookCard;