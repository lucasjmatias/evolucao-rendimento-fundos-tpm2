import Header from './components/Header';
import Investment from './components/Investment';
import Investments from './components/Investments';
import Main from './components/Main';
import { investments } from './data/investments';

export default function App() {
  console.log(investments);
  return (
    <div>
      <Header>Evolução de rendimento de fundos</Header>
      <Main>
        {investments.map(i => (
          <Investments key={i.id} fund={i}>
            {i.reports.map(r => (
              <Investment key={r.id}>{r}</Investment>
            ))}
          </Investments>
        ))}
      </Main>
    </div>
  );
}
