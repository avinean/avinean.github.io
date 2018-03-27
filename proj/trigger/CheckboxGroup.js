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
			if (e.checked) {
				this.setState({checkedId: e.uniqid});
			}
		}).then(() => {
			this.props.data.forEach(el => {
				if (this.props.typeMode === 'radioEdit') {
					el.checked = e.uniqid === el.uniqid;
				}
			});
		});
		// }).then(() => {
		// 	this.props.callback({
		// 		props: this.props,
		// 		state: this.state
		// 	});
		// });
	};

	deleteForm = e => {
		Promise.resolve()
		.then(() => {
			this.props.data = this.props.data.filter(el => e.uniqid !== el.uniqid);
		}).then(() => {
			this.setState({checkedId: null});
		})
	};

	addField = _ => {
		Promise.resolve().then(() =>{
			this.props.data.push({});
		}).then(() => {
			this.setState({data: this.props.data});
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
		else if (this.props.typeMode === 'radioEdit') {
			items = this.props.data.map((e,i) => {
				return(
					<div key={i}>
						<Box
							onChange={this.createForm}
							onDelete={this.deleteForm}
							type="radiobox"
							value={e.uniqid === this.state.checkedId}
							form={e}
							editable="1"
							uniqid={i}
						/>
					</div>
				);
			});
		}

		return(
			<div>
				{items}
				{this.props.typeMode === 'radioEdit' && <button onClick={this.addField}>add field</button>}
			</div>
		);
	}
}