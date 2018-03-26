class CheckboxGroup extends React.Component {

	constructor(props) {
		super(props);
	}

	setVal = (e) => {
		Promise.resolve().then(() => {
			this.props.data.forEach(el => {
				if (this.props.typeMode === 'radioView') {
					el.checked = e.props.uniqid === el.id;
					this.setState({checkedId: el.id})
				}
				if (this.props.typeMode === 'checkView')
					e.props.uniqid === el.id ? el.checked = !el.checked :  null;
			});
		}).then(() => {
			this.props.response(this.props.data);
		});
	};

	render() {
		let items = null;
		if (this.props.typeMode === 'radioView') {
			items = this.props.data.map(e => {
				console.log(1, e.checked);
				return(
					<div key={e.id}>
						<InputChecks
							onChange={this.setVal}
							type="radiobox"
							title={e.answer}
							uniqid={e.id}
							checked={e.checked}
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
							onChange={this.setVal}
							type="checkbox"
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
			</div>
		);
	}
}