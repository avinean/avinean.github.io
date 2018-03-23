class CheckboxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checkedId: null
		}
	}
	setValue = (e) => {
		this.setState({
			checkedId: e.props.uniqid,
			psevdoprops: e.props
		});
	};

	render() {
		const items = this.props.data.map(e => {
			return(
				<div key={e.id}>
					<InputChecks
						onChange={this.setValue}
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

		return(
			<div>
				{items}
				{this.state.psevdoprops ? 'Checked: "' + this.state.psevdoprops.title + '"' : ''}
			</div>
		);
	}
}