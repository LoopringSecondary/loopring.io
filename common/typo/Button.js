import React from 'react';
import {hashHistory,Link} from 'react-router';
import './Button.less';
// size
	// null 长方形
	// square 正方形,
	// box 正方形+圆角
	// circle 圆形
	// rounded 矩形+圆角
	// pill 矩形+圆形
// shape
	// tiny 24
	// small 30
	// null 40
	// large 50
	// jumbo 60
	// giant 70
// border
	// border
	// borderless
	// null
// color
	// plain
	// null
	// primary
// style
	// 3D
	// raised
	// longshadow-right
	// longshadow
	// glow
// block
	// block
// font tyographic
	// uppercase
	// lowercase
	// capitalize
// dropdown
	// TODO
// Group
	// TODO
// disabled
	// TODO
// icon
	// TODO


let Button = ({
	children,
	className='',
	hidden,
	style,
	onClick,

	icon=null,

	// event
	href,
	target,
	to,
	// custom
	// theme
	// 在配置文件中，color和bg已经充分进行了匹配，组件中无需判断bg和color是dark还是light
	color,
	bg,
	bordered,
	mode,



	// single
	shape,
	size,
	// 风格
	is3d,
	israised,
	islongshadow,
	isglow,
})=>{



	let prefix = 'hzbd-btn';
	let blockProps = {
		// className:`${className} ${prefix} ${prefix}-${border} ${prefix}-${type} ${prefix}-${theme}`,
		className:` ${className} ${prefix} `,
		hidden,
		style,
		onClick,
	}


	if(bordered){
		blockProps.className +=` bg-none border-${color} color-${color} `;
		blockProps.style = {
			...blockProps.style,
			border:'1px solid',
		}
	}else{
		if(bg && color){
			// blockProps.className +=` bg-${bg} color-${color} `;
			blockProps.className +=` bg-${color} color-${bg} `;
		}
	}

	if(mode){
		if(mode.indexOf('block') > -1){
			blockProps.style = {
				...blockProps.style,
				display:'block',
			};
		}
	}
	if(hidden){
		blockProps.style = {
			...blockProps.style,
			display:'none',
		};
	}



	// if(bordered){
	// 	blockProps.className = `${className} border-${color}`;
	// }

	if(shape){
		blockProps.className += ` ${prefix}-${shape} `;
	}
	if(size){
		blockProps.className += ` ${prefix}-${size} `;
	}
	if(is3d){
		blockProps.className += ` ${prefix}-3d `;
	}
	if(israised){
		blockProps.className += ` ${prefix}-raised `;
	}
	if(islongshadow){
		blockProps.className += ` ${prefix}-longshadow `;
	}
	if(isglow){
		blockProps.className += ` ${prefix}-glow `;
	}

	if(href){
		blockProps.href = href
	}
	if(target){
		blockProps.target = target
	}
	if(to){
		blockProps.to=to;
		return (
			<Link {...blockProps}>
				{children}
			</Link>
		)

	}else{
		return (
				<a {...blockProps}>
					{children}
				</a>
		);
	}


}
export default Button;


