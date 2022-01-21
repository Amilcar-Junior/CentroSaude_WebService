/*global $*/

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

class DatePicker extends React.Component {
	componentDidMount () {
		if ( this.refs.datepicker.classList.contains ( 'hasDatePicker' ) ) return;
		
		$ ( this.refs.datepicker ).datepicker ( {
			onSelect : ( value ) => this.props.onChange ( value ? Moment ( value , 'MM/DD/YYYY' ) : '' )
		} );
	}
	
	render () {
		return <input
			type="text"
			ref="datepicker"
			{...this.props}/>
	}
}

DatePicker.propTypes = {
	onChange : PropTypes.func
};

export default DatePicker;