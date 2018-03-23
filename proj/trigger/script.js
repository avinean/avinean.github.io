class App extends React.Component {
	constructor() {
		super();
		this.state = {
			trigged: true,
			checked: true,
			radioChecked: true
		};		
	}

	onTriggerClick = (e) => {
		this.setState({
			trigged: e,
			trigMessage: e ? 'cool' : 'fuck'
		});
	};
	
	onCheckbox = (e) => {
		this.setState({
			checked: e,
			checkMessage: e ? 'checked' : 'fuck'
		});
	};

	onRadio = (e) => {
		this.setState({
			radioChecked: e,
			radioMessage: e ? 'radio' : 'fuck'
		});
	};

	render() {
		return(
			<div>
				<h1><a href="https://github.com/avinean/avinean.github.io/tree/master/proj/trigger">git hub</a></h1>
				<br />
				<br />
				<br />
				<br />
				<br />
				{/*<TestFrom type="edit"/>*/}
				{/*<TestFrom type="view"/>*/}
				{/*<TestFrom />*/}
				<br />
				<br />
				<br />
				<Trigger onChange={this.onTriggerClick} status={this.state.trigged} size="small"/>
				<p>{this.state.trigMessage}</p>
				<InputChecks onChange={this.onCheckbox} checked={this.state.checked} type="checkbox"/>
				<p>{this.state.checkMessage}</p>
				<InputChecks onChange={this.onRadio} checked={this.state.radioChecked} type="radiobox"/>
				<p>{this.state.radioMessage}</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));