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
		console.log(e);
		this.setState({
			trigged: e,
			trigMessage: e ? 'cool' : 'fuck'
		});
	};
	
	onCheckbox = (e) => {
		this.setState({
			checked: e.checked,
			checkMessage: e.checked ? 'checked' : 'fuck'
		});
	};

	onRadio = (e) => {
		this.setState({
			radioChecked: e.checked,
			radioMessage: e.checked ? 'radio' : 'fuck'
		});
	};

	render() {

		const fakeValues = [
			{
				id: 1,
				answer: "London is a capital of Ukraine",
				isok: false
			},{
				id: 2,
				answer: "I am not me",
				isok: false
			},{
				id: 3,
				answer: "Right answer",
				isok: true
			},{
				id: 4,
				answer: "Duck",
				isok: false
			}
		];

		return(

			<div>
				<h1><a href="https://github.com/avinean/avinean.github.io/tree/master/proj/trigger">git hub</a></h1>
				<br />
				<br />
				<br />
				<br />
				<br />
				<CheckboxGroup data={fakeValues}/>
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