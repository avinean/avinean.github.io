class Checkbox extends React.Component {
    
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
            this.props.onChange(this.state.checked);
        });
    }


    render() {
        return(
            <div onClick={this.check} className="check-box">
                {this.state.checked && <i className="zmdi zmdi-check check-box-access"></i>}
            </div>
        );
    }
}