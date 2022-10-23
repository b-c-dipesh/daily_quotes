import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const App = () => {
	const API_URL = 'https://zenquotes.io/api/quotes/';
	const [quotes, setQuotes] = useState([]);
	const [currentQuote, setCurrentQuote] = useState(0);

	const fetchQuotes = async () => {
		try {
			const response = await axios.get(API_URL);
			setQuotes(response.data.map((res) => res.h));
		} catch (err) {
			console.log(err);
		}
	};

	const nextQuote = (e) => {
		if (currentQuote < quotes.length - 1) {
			setCurrentQuote((prevValue) => prevValue + 1);
		} else {
			window.location.reload(true);
		}
	};

	useEffect(() => {
		fetchQuotes();
	}, []);

	return (
		<Container className="app">
			<Row className="min-vh-100">
				<Col className="align-self-center text-center">
					<div
						dangerouslySetInnerHTML={{
							__html: quotes[currentQuote],
						}}
					></div>
					<Button onClick={nextQuote}>Next Quote</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
