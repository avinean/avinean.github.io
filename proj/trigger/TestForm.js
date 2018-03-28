class TestForm extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		const p = this.props;
		let m = p.type;
		let title = p.title && <p className="test-form-title">{p.title}</p>;
		let text = p.data.text && <p className="test-form-text">{p.data.text}</p>

		return(
			<div className="test-form-wrap">
				{title}
				{text}
				<CheckboxGroup
					data={p.data.data}
					type={p.type}
				/>
			</div>
		);
	}

}