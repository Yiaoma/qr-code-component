import { Card } from 'components';
import imgSrc from 'assets/image-qr-code.png';

export const Home = () => (
  <Card
    imgSrc={imgSrc}
    imgAlt="QR code."
    heading="Improve your front-end skills by building projects"
    text="Scan the QR code to visit Frontend Mentor and take your coding skills to
the next level"
  />
);
