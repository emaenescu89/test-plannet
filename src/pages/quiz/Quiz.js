import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AnswerCard from '../../components/answerCard/AnswerCard';
import Stats from '../../components/stats/Stats';
import Stepper from '../../components/stepper/Stepper';

import styles from './Quiz.module.css';

const Quiz = () => {
	const [ current, setCurrent ] = useState(0);
	const [ questions, setQuestions ] = useState([]);
	const [ responses, setResponses ] = useState([]);
	const [ viewResponse, setViewResponse ] = useState(null);

	const navigate = useNavigate();

	const getData = () => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch('http://localhost:3030/questions', requestOptions)
			.then((response) => response.json())
			.then((result) => setQuestions(result))
			.catch((error) => console.log("error", error));
	};

	const getSteps = (nrOfSteps, responses) => {
		return Array.from(Array(nrOfSteps), (_, x) => responses[x] ? responses[x].correct : null);
	}

	const getUrl = () => {
		const imgName = questions.length > 0 ? `${questions[current].image}.jpg` : 'bg_home.jpg';

		return `${process.env.PUBLIC_URL}/images/${imgName}`;
	}

	const onClickNextBtn  = () => {
		if (questions.length === responses.length) {
			const rightAnswers = responses.reduce((acc, curr) => curr.correct === true ? acc + 1 : acc, 0);
	
			navigate('/final', {state: { rightAnswers }});
		} else {
			setViewResponse(false);
		}
	}

	const renderQuestion = (q) => {
		return (
			<div className={styles.questionContainer}>
				<h2 className={styles.question}>{q.text}</h2>
				<div className={styles.options}>
					{q.answers.map((a, i) => {
						const answer = {
							answerId: a.id,
							correct: a.correct,
							questionId: q.id,
						};

						return (
							<button
								key={`button ${i}`}
								onClick={() => setResponses(curr => [...curr, answer])}>
								{a.text}
							</button>
						);
					})}
				</div>
			</div>
		);
	};

	const renderResponse = (q, r) => {
		const { description, title } = q.rightAnswer;

		return (
			<div className={styles.responseContainer}>
				<div className={styles.answerCard}>
					<AnswerCard
						correctAnswer={r.correct}
						description={description}
						title={title}
					/>
				</div>
				<div className={styles.stats}>
					<Stats
						color="red"
						percentage={q.otherResponses.false}
						text="allert Slieler lagen falsch"
					/>
					<Stats
						color="green"
						percentage={q.otherResponses.true}
						text="allert Slieler lagen rightig"
					/>
				</div>
				<button className={`accent ${styles.nextBtn}`} onClick={onClickNextBtn}> {`>`} </button>
			</div>
		);
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		responses.length > 0 && setViewResponse(true);
	}, [responses]);

	useEffect(() => {
		viewResponse === false && setCurrent(curr => curr + 1); 
	}, [viewResponse]);

	return (
		<div className={styles.wrapper} style={{backgroundImage: `url(${getUrl()})`}}>
			<div className={styles.container}>
				<Stepper activeStep={current} steps={getSteps(questions.length, responses)} />
				{questions.length && !viewResponse > 0 && renderQuestion(questions[current])}
				{viewResponse > 0 && renderResponse(questions[current], responses[current])}
			</div>
		</div>
	);
};

export default Quiz;
