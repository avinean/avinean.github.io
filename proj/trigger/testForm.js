class TestFrom extends React.Component {
    // consructor(props) {
    //     super(props);

    // }
    render() {
        if (this.props.type === 'edit') {
            return(
                <div className="edit-mode-test">
                    <textarea placeholder="Please write a question ..." className="test-form-textarea"></textarea>
                </div>
            );
        }
        else if (this.props.type === 'view') {
            return(
                <div className="view-mode-test">
                    view mode
                </div>
            );
        }
        else return <h1>UNDEFINED TYPE</h1>
    }
}