class Box extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        	value: this.props.value,
			sizes: {
				big: {
					wrap: 'big wrap',
					on: 'big-trig trig trig-on',
					off: 'big-trig trig trig-off'
				},
				small: {
					wrap: 'small wrap',
					on: 'small-trig trig trig-on',
					off: 'small-trig trig trig-off'
				}
			}
        };

        if (this.props.editable) {
			this.props.form.uniqid = this.props.uniqid;
		}
    }

    check = () => {
		this.props.value = !this.props.value;

		if (this.props.editable) {
			this.props.form.checked = this.props.value;
			this.props.form.uniqid = this.props.uniqid;
		}

		this.setState({
			value: !this.state.value
		});

		if (this.props.onChange) {
			this.props.editable
				? this.props.onChange(this.props.form)
				: this.props.onChange({
					props: this.props,
					state: this.state,
					uniqid: this.props.uniqid
				});
		}
    };

	onInput = (e) => {
		this.props.form.title = e.target.value || '';
		this.props.form.uniqid = this.props.uniqid;
		if (this.props.onChange) {
			this.props.onChange(this.props.form);
		}
	};

    render() {
		let title = '';
		if (this.props.title) {
			title = <div className="check box-title">{this.props.title}</div>;
		}
		if (this.props.on && this.state.value) {
			title = <div className="check box-title">{this.props.on}</div>;
		}
		if (this.props.off && !this.state.value) {
			title = <div className="check box-title">{this.props.off}</div>;
		}

		const size = (this.props.size in this.state.sizes) ? this.props.size : 'big';

		let box = null;

		if (this.props.editable) {
			if (this.props.type === 'checkbox') {

				box = <div className="check-box-wrapper">
					reserved
				</div>;

			}
			if (this.props.type === 'radiobox') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className="radio-box">
						{this.props.value &&
						<i className="zmdi zmdi-circle radio-box-access"></i>}
					</div>
					<div className="check box-title" onInput={this.onInput}><input type="text"/></div>
					{this.props.onDelete && <button onClick={() => this.props.onDelete(this.props.form)}>X</button>}
				</div>;

			}
		}
		else {
			if (this.props.type === 'checkbox') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className="check-box">
						{this.props.value &&
						<i className="zmdi zmdi-check check-box-access"></i>}
					</div>
					{title}
				</div>;

			}
			if (this.props.type === 'radiobox') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className="radio-box">
						{this.props.value &&
						<i className="zmdi zmdi-circle radio-box-access"></i>}
					</div>
					{title}
				</div>;

			}
			if (this.props.type === 'trigger') {

				box = <div className="check-box-wrapper">
					<div onClick={this.check} className={this.state.sizes[size].wrap}>
						<div className={this.state.value ?
							this.state.sizes[size].on :
							this.state.sizes[size].off}
						>{this.state.value ? 'ON' : 'OFF'}</div>
					</div>
					{title}
				</div>;

			}
		}

		return box;
    }
}