import React, { FC } from 'react';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	bordered?: boolean;
	icon?: string;
	iconPosition?: 'left' | 'right';
	errorMessage?: string;
}

const Textarea: FC<Props> = ({ label, bordered, icon, iconPosition, errorMessage, ...rest }) => {
	return (
		<>
			<div className={`relative ${rest.disabled && 'opacity-40'}`}>
				{label && <label className='font-NotoSans-SemiBold mr-auto text-purple-700'>{label}</label>}
				<div className='relative'>
					<textarea
						data-testid='textarea'
						{...rest}
						className={`
                    ${errorMessage ? 'bg-red-500 bg-opacity-10 border border-red-400' : 'bg-white'}
                    ${rest.disabled && 'bg-slate-300'}
                    ${icon && iconPosition === 'left' && 'pl-14'}
                    ${icon && iconPosition === 'right' && 'pr-14'}
                    border min-h-[170px] resize-none rounded-xl w-full p-4 mt-2 focus:outline-none shadow-xl `}
					/>
					{icon && (
						<div className={`absolute top-1/2 -translate-y-1/2 ${iconPosition === 'left' ? 'left-5' : 'right-5'}`}>
							<i className='fa-regular fa-envelope text-2xl text-purple-400'></i>
						</div>
					)}
				</div>
				{errorMessage && <small className='text-red-500 pt-1'>{errorMessage}</small>}
			</div>
		</>
	);
};

export default Textarea;
