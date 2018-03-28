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
			fakeFormValuesRadio: {
				id: '1232qweqwe',
				text: 'This is a question?',
				data: [
					{
						id: 1,
						answer: "London is a capital of Ukraine",
					}, {
						id: 2,
						answer: "I am not me",
					}, {
						id: 3,
						answer: "Right answer",
					}, {
						id: 4,
						answer: "Duck",
					}
				]
			},
			fakeFormValuesCheck: {
				id: '1232qweqwe',
				text: 'Is multiselect working?',
				data: [
					{
						id: 1,
						answer: "London is a capital of Ukraine",
					}, {
						id: 2,
						answer: "I am not me",
					}, {
						id: 3,
						answer: "Right answer",
					}, {
						id: 4,
						answer: "Duck",
					}
				]
			},
		}
	}

	callback = e => {
		console.log(e);
	};

	render() {
		return(
			<div>
				<h1><a href="https://github.com/avinean/avinean.github.io/tree/master/proj/trigger">git hub</a></h1>
				<br />
				<br />
				<h1>Ready forms</h1>
				<TestForm
					callback={this.callback}
					data={this.state.fakeFormValuesRadio}
					type="radioView"
					title="Radio form testing"
				/>
				<TestForm
					callback={this.callback}
					data={this.state.fakeFormValuesCheck}
					type="checkView"
					title="Check form testing"
				/>
				<TestForm
					callback={this.callback}
					data={this.state.fakeFormValuesCheck}
					type="checkView"
					title="Check form testing"
				/>
				<br />
				<br />
				<br />
				<h1>Radiobox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.fakeValuesRadio}
					type="radioView"
				/>
				<h1>Checkbox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.fakeValuesCheck}
					type="checkView"
				/>
				<h1>Editable radiobox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.dataRadio}
					type="radioEdit"
				/>
				<h1>Editable checkbox group</h1>
				<CheckboxGroup
					callback={this.callback}
					data={this.state.dataCheck}
					type="checkEdit"
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