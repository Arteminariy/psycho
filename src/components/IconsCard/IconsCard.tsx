import React from 'react';
import './IconsCard.module.css';
import { Card, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface IconsCardProps { }

const IconsCard = ({ }: IconsCardProps) => (
	<Card sx={{ mt: 8, p: 4, display: 'flex', justifyContent: 'center', flexDirection: 'row' }} className='iconsCard'>
		<a target="_blank" href="https://t.me/+79163469539">
			<TelegramIcon/>
		</a>
		<a target="_blank" href="https://wa.me/79163469539?text=Нужна%20консультация">
			<WhatsAppIcon sx={{ ml: 4 }} />
		</a>
	</Card>
);

export default IconsCard;
