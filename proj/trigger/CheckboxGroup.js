class CheckboxGroup extends React.Component {

	constructor(props) {
		super(props);
		this.props.data[0] = {uniqid: Math.random(0,1)*Math.random(0,1)};
		this.state = {checkedId: null};
	}

	setVal = (e) => {
		Promise.resolve().then(() => {
			this.props.data.forEach(el => {
				if (this.props.type === 'radio') {
					el.value = e.uniqid === el.id;
					this.setState({value: e.uniqid === el.id});
				}
				if (this.props.type === 'check')
					e.uniqid === el.id ? el.value = !el.value :  null;
			});
		}).then(() => {
			this.props.callback && this.props.callback({
				props: this.props,
				state: this.state
			});
		});
	};

	createForm = e => {
		Promise.resolve()
		.then(() => {
			if (this.props.type  === 'radio') {
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
		.then(() => this.props.data.push({uniqid: Math.random(0,1)*Math.random(0,1)}))
		.then(() => this.setState({data: this.props.data}));
	};

	render() {
		let m = this.props.type;
		let items = this.props.data.map((e,i) => {
			return(
				(m === 'check' && this.props.editable) ?
					<Box
						key={e.uniqid}
						onChange={this.createForm}
						onDelete={this.delField}
						editable={1}
						type="checkbox"
						value={e.checked}
						form={e}
						uniqid={e.uniqid}
					/> :
				(m === 'radio' && this.props.editable) ?
					<Box
						key={e.uniqid}
						onChange={this.createForm}
						onDelete={this.delField}
						editable={1}
						type="radiobox"
						value={e.uniqid === this.state.checkedId}
						form={e}
						uniqid={e.uniqid}
					/> :
				m === 'radio' ?
					<Box
						key={e.id}
						onChange={this.setVal}
						type="radiobox"
						title={e.answer}
						uniqid={e.id}
						value={e.value}
						prevent={true}
					/> :
				m === 'check' ?
					<Box
						key={e.id}
						onChange={this.setVal}
						type="checkbox"
						title={e.answer}
						uniqid={e.id}
					/> : ''
			);
		});

		return(
			<div>
				{this.props.editable ? <button onClick={this.addField} class="add-button">add field</button> : ''}
				{items}
			</div>
		);
	}
}