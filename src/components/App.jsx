import React, {Component} from "react";
import axios from "axios";
import {Card, Container}  from 'semantic-ui-react';

import BookCard from '../containers/BookCart';
import Menu from '../containers/Menu';

class App extends Component {

    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
            setBooks(data);
        });
    }

    render() {
        const {books, isReady} = this.props;
        return (
            <Container>
                <Menu/>
                <Card.Group itemsPerRow={4}>
                    {!isReady
                        ? 'Загрузка...'
                        : books.map(book => (
                            <BookCard key = {book.id} {...book}/>
                        ))}
                </Card.Group>
            </Container>
        )
    }
}

export default App;