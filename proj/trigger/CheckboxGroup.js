class CheckboxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {checkedId: null};
	}

	setVal = (e) => {
		Promise.resolve().then(() => {
			this.props.data.forEach(el => {
				if (this.props.typeMode === 'radioView') {
					el.value = e.props.uniqid === el.id;
					this.setState({value: e.props.uniqid === el.id});
				}
				if (this.props.typeMode === 'checkView')
					e.props.uniqid === el.id ? el.value = !el.value :  null;
			});
		}).then(() => {
			this.props.callback({
				props: this.props,
				state: this.state
			});
		});
	};

	render() {
		let items = null;
		if (this.props.typeMode === 'radioView') {
			items = this.props.data.map(e => {
				return(
					<div key={e.id}>
						<Box
							onChange={this.setVal}
							type="radiobox"
							title={e.answer}
							uniqid={e.id}
							value={e.value}
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
						<Box
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