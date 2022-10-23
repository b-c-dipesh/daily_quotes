import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

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
				<Col xs={12} className="align-self-center">
					<div
						dangerouslySetInnerHTML={{
							__html: quotes[currentQuote],
						}}
					></div>
					<Button className="mt-5" onClick={nextQuote}>
						Next Quote
					</Button>
				</Col>
				<Col xs={12} className="text-center">
					<Badge className="shadow-lg bg-secondary">
						<a
							target="_blank"
							href="https://icons8.com/icon/Skp77DtGmAEV/motivation-daily-quotes"
							rel="noreferrer"
						>
							Motivation Daily Quotes
						</a>{' '}
						icon by{' '}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://icons8.com"
						>
							Icons8
						</a>
					</Badge>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
