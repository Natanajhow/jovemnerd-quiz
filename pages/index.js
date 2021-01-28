import styled from 'styled-components'
import db from '../db.json';
import Widget from "../src/components/widgets";
import Footer from "../src/components/footer";
import GitHubCorner from "../src/components/gitHubCorner";
import BackgroundImage from "../src/components/quizBackGround";
import QuizLogo from "../src/components/quizLogo";

const Title = styled.h1`
 font-size: 50px;
color: ${({ theme }) => theme.colors.primary};
`

/*const BackgroundImage = styled.div`

  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <BackgroundImage backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.header>
            <h1>Jovem Nerd</h1>
          </Widget.header>
          <Widget.content>
            <p>Lambda, lambda, lambda nerd!</p>
          </Widget.content>
        </Widget>
        <Widget>
          <Widget.content>
            <h1>Quis da Galera!</h1>
            <p>Lambda, lambda, lambda nerd!</p>
          </Widget.content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </BackgroundImage>
  );
}
