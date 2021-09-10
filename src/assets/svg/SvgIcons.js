import React from 'react';
import Svg, {
	Circle,
	Ellipse,
	G,
	Text,
	TSpan,
	TextPath,
	Path,
	Polygon,
	Polyline,
	Line,
	Rect,
	Use,
	Image,
	Symbol,
	Defs,
	LinearGradient,
	RadialGradient,
	Stop,
	ClipPath,
	Pattern,
	Mask,
} from 'react-native-svg';
import colors from '../../theme/colors';


const Home = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path d="M0 0h24v24H0z" stroke="none" />
		<Path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
		<Path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
	</Svg>
);

const Phone = ({size, color}) => (
	<Svg
      	width={size}
      	height={size}
      	viewBox="0 0 24 24"
    >
      	<Path data-name="Path 20" d="M0 0h24v24H0z" fill="none" />
      	<Path
			data-name="Path 21"
			d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
    </Svg>
);


const Id = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path d="M0 0h24v24H0z" stroke="none" />
		<Rect x={3} y={4} width={18} height={16} rx={3} />
		<Circle cx={9} cy={10} r={2} />
		<Path d="M15 8h2M15 12h2M7 16h10" />
	</Svg>
);


const Vendedor = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
	>
		<Path data-name="Path 26" d="M0 0h24v24H0z" fill="none" />
		<Circle
			data-name="Ellipse 5"
			cx={1}
			cy={1}
			r={1}
			transform="translate(12 3)"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
		<Path
			data-name="Line 16"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M7 21l3-4"
		/>
		<Path
			data-name="Path 27"
			d="M16 21l-2-4-3-3 1-6"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
		<Path
			data-name="Path 28"
			d="M6 12l2-3 4-1 3 3 3 1"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
	</Svg>
);


const Email = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path d="M0 0h24v24H0z" stroke="none" />
		<Rect x={3} y={5} width={18} height={14} rx={2} />
		<Path d="M3 7l9 6 9-6" />
	</Svg>
);

const Observacion = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<Rect x={5} y={3} width={14} height={18} rx={2} />
		<Line x1={9} y1={7} x2={15} y2={7} />
		<Line x1={9} y1={11} x2={15} y2={11} />
		<Line x1={9} y1={15} x2={13} y2={15} />
	</Svg>
);

const Lista = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<Line x1={9} y1={6} x2={20} y2={6} />
		<Line x1={9} y1={12} x2={20} y2={12} />
		<Line x1={9} y1={18} x2={20} y2={18} />
		<Line x1={5} y1={6} x2={5} y2={6.01} />
		<Line x1={5} y1={12} x2={5} y2={12.01} />
		<Line x1={5} y1={18} x2={5} y2={18.01} />
	</Svg>
);


const Pago = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path d="M0 0h24v24H0z" stroke="none" />
		<Rect x={7} y={9} width={14} height={10} rx={2} />
		<Circle cx={14} cy={14} r={2} />
		<Path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2" />
	</Svg>
);


const Bonificacion = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
    >
      	<Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      	<Path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
      	<Path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
    </Svg>
);



const LimiteCredito = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<Circle cx={12} cy={12} r={9} />
		<Line x1={9} y1={15} x2={15} y2={9} />
	</Svg>
);



const Saldo = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<Circle cx={12} cy={12} r={9} />
		<Path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
		<Path d="M12 6v2m0 8v2" />
	</Svg>
);



const Contacto = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
	>
      	<Path data-name="Path 39" d="M0 0h24v24H0z" fill="none" />
		<Circle
			data-name="Ellipse 9"
			cx={3}
			cy={3}
			r={3}
			transform="translate(9 4)"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
		<Circle
			data-name="Ellipse 10"
			cx={3}
			cy={3}
			r={3}
			transform="translate(14 13)"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
      	<Circle
			data-name="Ellipse 11"
			cx={3}
			cy={3}
			r={3}
			transform="translate(4 13)"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
    </Svg>
);

const Arrow = ({size, color}) => (
	<Svg
      	width={size}
      	height={size}
    >
		<G
			data-name="Group 47"
			fill="none"
			stroke={color}
			strokeLinecap="round"
			strokeWidth={1.5}
		>
        	<Path data-name="Line 32" d="M1.061 1.061l4 4" />
        	<Path data-name="Line 33" d="M1.061 9.061l4-4" />
    	</G>
    </Svg>
);

const Search = ({size, color}) => (
	<Svg
      width={size}
      height={size}
    >
      <G
        transform="translate(.75 .75)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <Circle cx={4.444} cy={4.444} r={4.444} />
        <Path d="M10 10L7.583 7.583" />
      </G>
    </Svg>
);


const Error = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<Circle cx={12} cy={12} r={9} />
		<Line x1={12} y1={8} x2={12} y2={12} />
		<Line x1={12} y1={16} x2={12.01} y2={16} />
	</Svg>
);



const Default = ({size, color}) => (
	<Svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke={color}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<Path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<Circle cx={5} cy={12} r={1} />
		<Circle cx={12} cy={12} r={1} />
		<Circle cx={19} cy={12} r={1} />
	</Svg>
);



const svgList = {
	'domicilio': Home,
	'telefono': Phone,
	'CIUT': Id,
	'vendedor': Vendedor,
	'observacion': Observacion,
	'bonificacion': Bonificacion,
	'limite credito': LimiteCredito,
	'contacto': Contacto,
	'saldo': Saldo,
	'email': Email,
	'lista': Lista,
	'pago': Pago,
	
	'arrow': Arrow,
	'search': Search,
	'error': Error,
	'default': Default
	
};



const getSvg = (src) => {
	if(svgList[src]){
		return svgList[src];
	} else {
		return svgList['default'];
	}
}


const SvgIcons = ({src, size, color}) => {

	const SvgComponent = getSvg(src);

	const svgSize = size ? size : 24;

	const svgColor = color ? color : colors.detailIcon;

	return(
		<>
			<SvgComponent size={svgSize} color={svgColor} />
		</>
	)
};



export default SvgIcons;