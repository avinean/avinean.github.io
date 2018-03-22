class App extends React.Component {
	constructor() {
		super();
		this.state = {
			trigged: true,
			checked: true
		};		
	}

	onTriggerClick = (e) => {
		this.setState({
			trigged: e,
			trigMessage: e ? 'cool' : 'fuck'
		});
	}
	
	onCheckbox = (e) => {
		this.setState({
			checked: e,
			checkMessage: e ? 'checked' : 'fuck'
		});
	}

	render() {
		return(
			<div>
				<Trigger onChange={this.onTriggerClick} status={this.state.trigged} size="small"/>
				<p>{this.state.trigMessage}</p>
				<Checkbox onChange={this.onCheckbox} checked={this.state.checked}/>
				<p>{this.state.checkMessage}</p>
				<h1><a href="https://github.com/avinean/avinean.github.io/tree/master/proj/trigger">git hub</a></h1>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));