import React, { FC } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	bordered?: boolean;
	icon?: () => React.ReactNode;
	iconPosition?: 'left' | 'right';
	errorMessage?: string;
	success?: boolean;
}

const Input: FC<Props> = ({ label, bordered, icon, iconPosition, errorMessage, success, ...rest }) => {
	return (
		<>
			<div className={`relative ${rest.disabled && 'opacity-40'}`}>
				{label && <label className='font-NotoSans-SemiBold mr-auto text-purple-700'>{label}</label>}
				<div className='relative'>
					<input
						data-testid='input'
						{...rest}
						className={`
                    ${errorMessage ? 'bg-red-500 bg-opacity-10 border border-red-400' : 'bg-white'}
					${success ? 'bg-green-500 bg-opacity-10 border border-green-400' : 'bg-white'}
                    ${rest.disabled && 'bg-slate-300'}
                    ${icon && iconPosition === 'left' && 'pl-14'}
                    ${icon && iconPosition === 'right' && 'pr-14'}
                    border rounded-xl w-full p-4 mt-2 focus:outline-none shadow-xl `}
					/>
					{icon && (
						<div className={`absolute top-9 -translate-y-1/2 ${iconPosition === 'left' ? 'left-5' : 'right-5'}`}>
							{icon()}
						</div>
					)}
				</div>
				{errorMessage && <small className='text-red-500 pt-1'>{errorMessage}</small>}
			</div>
		</>
	);
};

export default Input;
