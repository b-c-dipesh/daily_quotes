import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Quote = ({ quotes }) => {
	const [currentQuote, setCurrentQuote] = useState(
		Math.ceil(Math.random() * quotes.length)
	);
	const [quotesArray, setQuotesArray] = useState([]);

	const nextQuote = (e) => {
		setCurrentQuote(Math.ceil(Math.random() * quotes.length));
	};

	const fetchQuotes = () => {
		setQuotesArray(quotes.map((quote) => quote.h));
	};

	useEffect(() => {
		fetchQuotes();
	});

	return (
		<Container className="app">
			<Row className="mt-5">
				<Col xs={12} className="align-self-center my-5">
					<div
						style={{ minHeight: '200px', maxHeight: '200px' }}
						className="shadow rounded p-5"
						dangerouslySetInnerHTML={{
							__html: quotesArray[currentQuote],
						}}
					></div>
					<Button className="mt-5" onClick={nextQuote}>
						Next Quote
					</Button>
				</Col>
				<Col xs={12} className="text-center mt-5">
					<Badge className="shadow bg-secondary">
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

export default Quote;
