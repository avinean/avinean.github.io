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
        }
    }

    check = () => {
		this.props.value = !this.props.value;
		this.setState({
			value: !this.state.value
		});
		if (this.props.onChange) {
			this.props.onChange({
				props: this.props,
				state: this.state
			});
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
        return(
        	this.props.type === 'checkbox' ?
				<div className="check-box-wrapper">
					<div onClick={this.check} className="check-box">
						{this.props.value && <i className="zmdi zmdi-check check-box-access"></i>}
					</div>
					{title}
				</div>
				:
			this.props.type === 'radiobox' ?
				<div className="check-box-wrapper">
					<div onClick={this.check} className="radio-box">
						{this.props.value && <i className="zmdi zmdi-circle radio-box-access"></i>}
					</div>
					{title}
				</div>
				:
			this.props.type === 'trigger' ?
				<div className="check-box-wrapper">
					<div onClick={this.check} className={this.state.sizes[size].wrap}>
						<div className={this.state.value ?
							this.state.sizes[size].on :
							this.state.sizes[size].off}
						>{this.state.value ? 'ON' : 'OFF'}</div>
					</div>
					{title}
				</div> : null
        );
    }
}