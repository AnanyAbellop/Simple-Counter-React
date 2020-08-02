import React from "react";
import PropTypes from "prop-types";

var SecondsStyles = {
	width: "18rem;",
	background: "black",
	color: "white"
};
var SpanStyle = {
	width: "80px",
	border: "1px solid groove green",
	borderRadius: "10px"
};

var seg1 = 0;
var seg2 = 0;
var seg3 = 0;
var seg4 = 0;
var seg5 = 0;
var seg6 = 0;
var seg7 = 0;

export function SecondsCounter(props) {
	seg7 = props.segundos;
	seg6++;
	if (seg6 > 9) {
		seg6 = 0;
		seg5++;
	}
	if (seg5 > 9) {
		seg5 = 0;
		seg4++;
	}

	if (seg4 > 9) {
		seg4 = 0;
		seg3++;
	}

	if (seg3 > 9) {
		seg3 = 0;
		seg2++;
	}

	if (seg2 > 9) {
		seg2 = 0;
		seg1++;
	}

	return (
		<div className="card text-center" style={SecondsStyles}>
			<div className="card-header">
				<i className="far fa-clock number" />
				<span className="number" style={SpanStyle}>
					{seg1}
				</span>
				<span className="number" style={SpanStyle}>
					{seg2}
				</span>
				<span className="number" style={SpanStyle}>
					{seg3}
				</span>
				<span className="number" style={SpanStyle}>
					{seg4}
				</span>
				<span className="number" style={SpanStyle}>
					{seg5}
				</span>
				<span className="number" style={SpanStyle}>
					{seg6}
				</span>
			</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	segundos: PropTypes.number
};
