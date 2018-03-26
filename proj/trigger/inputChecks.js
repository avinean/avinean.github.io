class InputChecks extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            checked: false
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
				: null
        );
    }
}