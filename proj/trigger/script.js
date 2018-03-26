class App extends React.Component {
	constructor() {
		super();
		this.state = {
			trigged: true,
			checked: true,
			radioChecked: true,
			fakeValuesRadio: [
				{
					id: 1,
					answer: "London is a capital of Ukraine",
				},{
					id: 2,
					answer: "I am not me",
				},{
					id: 3,
					answer: "Right answer",
				},{
					id: 4,
					answer: "Duck",
				}
			],
			fakeValuesCheck: [
				{
					id: 1,
					answer: "London is a capital of Ukraine",
				},{
					id: 2,
					answer: "I am not me",
				},{
					id: 3,
					answer: "Right answer",
				},{
					id: 4,
					answer: "Duck",
				},{
					id: 5,
					answer: "Aimzibesovzibes",
				}
			]
		}
	}

	onTriggerClick = (e) => {
		this.setState({
			trigged: e,
		});
	};
	
	onCheckbox = (e) => {
		this.setState({
			checked: e.checked,
		});
	};

	onRadio = (e) => {
		this.setState({
			radioChecked: e.checked,
		});
	};

	onNewFormCreate = (e) => {

	};

	render() {

		return(

			<div>
				<h1><a href="https://github.com/avinean/avinean.github.io/tree/master/proj/trigger">git hub</a></h1>
				<br />
				<br />
				<CheckboxGroup data={this.state.fakeValuesRadio} typeMode="radioView"/>
				<CheckboxGroup onCreate={this.onNewFormCreate} typeMode="radioEdit"/>
				<CheckboxGroup data={this.state.fakeValuesCheck} typeMode="checkView"/>
				<br />
				<br />
				<br />
				<InputChecks onChange={this.onTriggerClick} checked={this.state.trigged} type="trigger" size="small"/>
				<InputChecks onChange={this.onCheckbox} checked={this.state.checked} type="checkbox"/>
				<InputChecks onChange={this.onRadio} checked={this.state.radioChecked} type="radiobox"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));