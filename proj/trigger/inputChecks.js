class InputChecks extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
			status: this.props.status,
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
        Promise.resolve().then(() => {
			this.setState({
				checked: !this.state.checked
			});
        }).then(() => {
            if (this.props.onChange) {
            	this.props.onChange({
					checked: this.state.checked,
					props: this.props
				});
			}
        });
    };

    render() {
		const title = this.props.title ? <div className="check box-title">{this.props.title}</div> : '';
		const size = (this.props.size in this.state.sizes) ? this.props.size : 'big';
        return(
        	this.props.type === 'checkbox' ?
				<div className="check-box-wrapper">
					<div onClick={this.check} className="check-box">
						{(this.props.prevent ? this.props.checked : this.state.checked) && <i className="zmdi zmdi-check check-box-access"></i>}
					</div>
					{title}
				</div>
				:
			this.props.type === 'radiobox' ?
				<div className="check-box-wrapper">
					<div onClick={this.check} className="radio-box">
						{(this.props.prevent ? this.props.checked : this.state.checked) && <i className="zmdi zmdi-circle radio-box-access"></i>}
					</div>
					{title}
				</div>
				:
			this.props.type === 'trigger' ?
				<div onClick={this.check} className={this.state.sizes[size].wrap}>
					<div className={this.state.checked ?
						this.state.sizes[size].on :
						this.state.sizes[size].off}
					>{this.state.checked ? 'ON' : 'OFF'}</div>
				</div> : null
        );
    }
}