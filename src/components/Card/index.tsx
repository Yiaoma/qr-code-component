import { FC } from 'react';
import { StyledCard, StyledH1, StyledP, StyledImg } from './style';

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  text: string;
}

export const Card: FC<CardProps> = ({ imgSrc, imgAlt, heading, text }) => (
  <StyledCard>
    <StyledImg src={imgSrc} alt={imgAlt} />
    <StyledH1>{heading}</StyledH1>
    <StyledP>{text}</StyledP>
  </StyledCard>
);
