import { InfoTitle } from 'components/MovieCard/MovieCard.styled';
import {
  ExtraButtons,
  ExtraButtonsWrapper,
  ExtraLink,
} from './ExtraInfo.styled';

const ExtraInfo = () => {
  return (
    <ExtraButtonsWrapper>
      <InfoTitle>More info</InfoTitle>
      <ExtraButtons>
        <li>
          <ExtraLink to={'cast'}>Cast</ExtraLink>
        </li>
        <li>
          <ExtraLink to={'reviews'}>Reviews</ExtraLink>
        </li>
      </ExtraButtons>
    </ExtraButtonsWrapper>
  );
};

export default ExtraInfo;
