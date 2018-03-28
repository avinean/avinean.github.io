class CheckboxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {checkedId: null};
	}

	setVal = (e) => {
		Promise.resolve().then(() => {
			this.props.data.forEach(el => {
				if (this.props.typeMode === 'radioView') {
					el.value = e.uniqid === el.id;
					this.setState({value: e.uniqid === el.id});
				}
				if (this.props.typeMode === 'checkView')
					e.uniqid === el.id ? el.value = !el.value :  null;
			});
		}).then(() => {
			this.props.callback({
				props: this.props,
				state: this.state
			});
		});
	};

	createForm = e => {
		Promise.resolve()
		.then(() => {
			if (this.props.typeMode  === 'radioView') {
				this.props.data.forEach(el => el.checked = e.uniqid === el.uniqid);
			}
		})
		.then(() => this.setState({checkedId: e.uniqid}));
	};

	delField = e => {
		Promise.resolve()
		.then(() => this.props.data = this.props.data.filter(el => e.uniqid !== el.uniqid))
		.then(() => this.setState({checkedId: this.state.checkedId}));
	};

	addField = _ => {
		Promise.resolve()
		.then(() => this.props.data.push({}))
		.then(() => this.setState({data: this.props.data}));
	};

	render() {
		let m = this.props.typeMode;
		let items = this.props.data.map((e,i) => {
			return(
				m === 'radioView' ?
					<Box
						key={e.id}
						onChange={this.setVal}
						type="radiobox"
						title={e.answer}
						uniqid={e.id}
						value={e.value}
						prevent={true}
					/> :
				m === 'checkView' ?
					<Box
						key={e.id}
						onChange={this.setVal}
						type="checkbox"
						title={e.answer}
						uniqid={e.id}
					/> :
				m === 'checkEdit' ?
					<Box
						key={e.uniqid || Math.random(0,1)*Math.random(0,1)}
						onChange={this.createForm}
						onDelete={this.delField}
						type="checkbox"
						value={e.checked}
						form={e}
						editable="1"
						uniqid={e.uniqid || Math.random(0,1)*Math.random(0,1)}
					/> :
				m === 'radioEdit' ?
					<Box
						key={e.uniqid || Math.random(0,1)*Math.random(0,1)}
						onChange={this.createForm}
						onDelete={this.delField}
						type="radiobox"
						value={e.uniqid === this.state.checkedId}
						form={e}
						editable="1"
						uniqid={e.uniqid || Math.random(0,1)*Math.random(0,1)}
					/> : ''
			);
		});

		return(
			<div>
				{this.props.typeMode === 'radioEdit' || this.props.typeMode === 'checkEdit' ? <button onClick={this.addField}>add field</button> : ''}
				{items}
			</div>
		);
	}
}