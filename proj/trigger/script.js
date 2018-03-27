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
			],
			dataRadio: [{}],
			dataCheck: [{}],
		}
	}

	callback = e => {
		//for test
		console.log(this.state);
	};

	onNewFormCreate = e => {

	};

	render() {
		return(

			<div>
				<h1><a href="https://github.com/avinean/avinean.github.io/tree/master/proj/trigger">git hub</a></h1>
				<br />
				<br />
				<h1>Radiobox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.fakeValuesRadio}
					typeMode="radioView"
				/>
				<h1>Checkbox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.fakeValuesCheck}
					typeMode="checkView"
				/>
				<h1>Editable radiobox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.dataRadio}
					typeMode="radioEdit"
				/>
				<h1>Editable checkbox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.dataCheck}
					typeMode="checkEdit"
				/>
				<br />
				<br />
				<br />
				<Box
					value={this.state.trigged}
					type="trigger"
					size="small"
					on="OK" off="Chpok"
				/>
				<Box
					value={this.state.checked}
					type="checkbox"
					on="OK" off="Chpok"
				/>
				<Box
					value={this.state.radioChecked}
					type="radiobox"
					on="OK" off="Chpok"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));