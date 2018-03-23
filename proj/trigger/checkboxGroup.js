class CheckboxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checkedId: null,
		}
	}

	setRadioValue = (e) => {
		this.setState({
			checkedId: e.props.uniqid,
		});
	};

	setCheckValue = (e) => {
		this.props.data.forEach(el => {
			if ((e.props.uniqid === el.id)) {
				el.checked = true;
			}
		});
	};

	checkResult = () => {
		let res;
		let checkPreRes = 0;
		let checkRes = 0;
		let missed = 0;

		if (this.props.typeMode === 'radioView') {
			this.props.data.forEach(e => {
				if (e.id === this.state.checkedId) {
					res = e.isok;
				}
			});
			console.log(res ? "It's ok" : "Looser");
		}
		else if (this.props.typeMode === 'checkView') {
			this.props.data.forEach(e => {
				if (e.isok)  checkPreRes++;
				if (e.checked && e.isok)  checkRes++;
				if (e.checked && !e.isok)  missed++;
			});
			console.log(checkRes + ' right answers; ' + missed + ' wrong answers; ' + checkRes/checkPreRes*100 + '% right answers');
		}


	};

	render() {
		let items = null;
		if (this.props.typeMode === 'radioView') {
			items = this.props.data.map(e => {
				return(
					<div key={e.id}>
						<InputChecks
							onChange={this.setRadioValue}
							type="radiobox"
							isok={e.isok}
							title={e.answer}
							uniqid={e.id}
							checked={e.id === this.state.checkedId}
							prevent={true}
						/>
					</div>
				);
			});
		}
		else if (this.props.typeMode === 'checkView') {
			items = this.props.data.map(e => {
				return(
					<div key={e.id}>
						<InputChecks
							onChange={this.setCheckValue}
							type="checkbox"
							isok={e.isok}
							title={e.answer}
							uniqid={e.id}
						/>
					</div>
				);
			});
		}
		else if (this.props.typeMode === 'checkEdit') {}
		else if (this.props.typeMode === 'radioEdit') {}

		return(
			<div>
				{items}
				<button onClick={this.checkResult}>Check result</button>
			</div>
		);
	}
}