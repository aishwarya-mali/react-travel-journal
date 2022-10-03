import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import travelData from './travelData'

function App() {
	const travelCards = travelData.map((data, i) => {
		return <Card key={i} data={data} />
	})
	return (
		<div className="App">
			<Header />
			{travelCards}
		</div>
	);
}

export default App;
