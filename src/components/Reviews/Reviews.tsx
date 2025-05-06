import { Card, Typography } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import './Reviews.css';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

type Review = {
	author: string;
	text: string;
};

function Arrow(props: {
	disabled: boolean;
	left?: boolean;
	onClick: (e: any) => void;
}) {
	const disabled = props.disabled ? ' arrow--disabled' : '';
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? 'arrow--left' : 'arrow--right'
			} ${disabled}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	);
}

export const Reviews = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});
	const reviews: Review[] = [
		{
			text: 'Когда я впервые попала на консультацию к Наталье, меня порадовала доброжелательная атмосфера. Психолог должен располагать к себе, так вот тут это происходит с первых секунд. Я поняла, что могу открыться и говорить о своих переживаниях. Наталья продемонстрировала высокий уровень профессионализма. Мы работали в технике «Нарративный подход». Наталья задавала очень корректные и на мой взгляд правильные вопросы, которые заставляли меня глубже анализировать свои проблемы, понять, как можно их обойти, побороть либо трансформировать в полезные вещи. Я чувствовала, поддержку на протяжении всей сессии. Это создало доверительную атмосферу, в которой я могла открыто говорить о своих сомнениях. Для себя я вынесла много полезного, и даже наметила вектор как справляться со своими сомнениями, страхами. Буду рада дальнейшей работе! Спасибо Вам за включенность, профессионализм и доброжелательность!',
			author: 'Лилия Толмачёва',
		},
		{
			text: 'Сегодня  была  на консультации у Наталии, уже не первый раз, но первый раз вместе со слушателями. Хочу поделиться своими эмоциями. Вообще, хочу отметить, что все консультации у Натальи результативные, а самое главное оставляют вкусное послевкусие. Всегда ухожу от неё с фишечками, которые могут помочь мне в последствии. Всегда после консультации ощущаю облегчения и умиротворения. Наталья, вы специалист своего дела. Что касается слушателей, вначале было ощущение скованности, потом прошло. Очень была тёплая консультация, мне очень понравилось, спасибо',
			author: 'Татьяна',
		},
		{
			text: 'Прорабатывала с Натальей проблему - страха уйти из найма и начать работать на себя. После первой сессии почувствовала уверенность в себе. Появился план действий. Страх отступил. Спустя две недели начала делать активные шаги по реализации плана. Спасибо Наталья.',
			author: 'Инна',
		},
	];

	return (
		<Card className="reviewsContainer">
			<Typography variant="h6">Отзывы:</Typography>
			<div className="navigation-wrapper">
				<div ref={sliderRef} className="keen-slider">
					{reviews.map(({ author, text }, i) => (
						<div
							className={`keen-slider__slide number-slide${
								i + 1
							}`}
						>
							<Typography>
								<i className="quote">«</i> {text}{' '}
								<i className="quote">»</i>
								<Typography fontWeight={500}>
									{author}
								</Typography>
							</Typography>
						</div>
					))}
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e: any) =>
								e.stopPropagation() ||
								instanceRef.current?.prev()
							}
							disabled={currentSlide === 0}
						/>

						<Arrow
							onClick={(e: any) =>
								e.stopPropagation() ||
								instanceRef.current?.next()
							}
							disabled={
								currentSlide ===
								instanceRef.current.track.details.slides
									.length -
									1
							}
						/>
					</>
				)}
			</div>
			{loaded && instanceRef.current && (
				<div className="dots">
					{[
						...Array(
							instanceRef.current.track.details.slides.length
						).keys(),
					].map((idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={
									'dot' +
									(currentSlide === idx ? ' active' : '')
								}
							></button>
						);
					})}
				</div>
			)}
		</Card>
	);
};
