class Input extends React.Component {

	constructor(props) {
		super(props);
	}

	input = e => {
		this.props.value = e.target.innerText || '';
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	};

	render() {
		return(
			<div
				contenteditable="true"
				className="input-small-field"
				onKeyPress={this.input}
			>
				{this.props.value}
			</div>
		);
	}
}