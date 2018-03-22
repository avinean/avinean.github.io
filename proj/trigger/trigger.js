class Trigger extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		};
	}

	toTrig = () => {
		// задача 1
		this.setState({
			status: !this.state.status
		});
		// задача 2
		setTimeout(() => {
			this.props.onChange(this.state.status);
		}, 0);

		//--------------------------
		// ===  задумка компонента: ти по ньому клацаєш. він міняє положенн он і офф. і, відповідно 
		// ===  запускає зовнішню функцію з значенням тру/фолс в параметрах. звісно залежить від поточного положення
		// ===  срака: без таймаута задача 1 спрацьовує пізніше задачі 2
		//----------------------------


		// ===  знайшов краще рішення з використанням промісу. мабуть так навіть краще (воно ниже закоментоване)
		// Promise.resolve().then(() => {
		// 	this.setState({
		// 		status: !this.state.status
		// 	});
		// }).then(() => {
		// 	this.props.onChange(this.state.status);
		// });


		//---------------------------
		// як тобі такі рішення? що взагалі думаєш про компонент?
		// які є пропозиції щодо роботи зі стилями?
		//------------------------------------
	}

	render() {
		const s = this.state;
		const p = this.props;
		const size = (p.size in this.state.sizes) ? p.size : 'big',
			wrap = s.sizes[size].wrap,
			on = s.sizes[size].on,
			off = s.sizes[size].off;
		
		return(
			<div onClick={this.toTrig} className={wrap}>
				<div className={s.status ? on : off}>{s.status ? 'ON' : 'OFF'}</div>
			</div>
		);
	}
}