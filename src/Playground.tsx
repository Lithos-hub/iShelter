import { RefObject, useRef } from 'react';
import { Formik, Form } from 'formik';

import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';

import * as Yup from 'yup';

const Playground = () => {
	const formRef: RefObject<HTMLFormElement> = useRef(null);
	const validationSchema = Yup.object().shape({
		playground_input: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
		playground_textarea: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
	});
	return (
		<div className='mx-[5vw] py-[5vh]'>
			<h1 className='text-center text-3xl'>Components</h1>

			<Formik
				initialValues={{
					playground_input: '',
					playground_textarea: '',
					playground_select: '',
					playground_checkbox: '',
					playground_radiobuttongroup: '',
				}}
				validationSchema={validationSchema}
				onSubmit={() => {}}
			>
				{({ handleSubmit, getFieldProps }) => (
					<Form ref={formRef} onSubmit={handleSubmit}>
						<h1 className='text-5xl font-bold text-slate-900 my-5'>Inputs</h1>

						<div className='grid grid-cols-4 gap-5'>
							<Input {...getFieldProps('playground_input')} name='playground_input' label='Input (default)' />
							<Input {...getFieldProps('playground_input')} name='playground_input' label='Input (disabled)' disabled />
							<Input {...getFieldProps('playground_input')} name='playground_input' label='Input (bordered)' bordered />
							<Input
								{...getFieldProps('playground_input')}
								name='playground_input'
								label='Input (error)'
								errorMessage='Required'
							/>
							<Input
								{...getFieldProps('playground_input')}
								name='playground_input'
								label='Icon (left)'
								icon={() => <i className='fa-solid fa-envelope text-purple-500 text-2xl'></i>}
								type='email'
								iconPosition='left'
							/>
							<Input
								{...getFieldProps('playground_input')}
								name='playground_input'
								label='Icon (right)'
								icon={() => <i className='fa-solid fa-key text-purple-500 text-2xl'></i>}
								type='password'
								iconPosition='right'
							/>
						</div>

						<h1 className='text-5xl font-bold text-slate-900 my-5'>Textareas</h1>
						<div className='grid grid-cols-2 gap-5'>
							<Textarea {...getFieldProps('playground_input')} name='playground_input' label='Textarea (default)' />
							<Textarea
								{...getFieldProps('playground_input')}
								name='playground_input'
								label='Textarea (default)'
								disabled
							/>
							<Textarea
								{...getFieldProps('playground_input')}
								name='playground_input'
								label='Textarea (bordered)'
								bordered
							/>
							<Textarea
								{...getFieldProps('playground_input')}
								name='playground_input'
								label='Textarea (error)'
								errorMessage='Required'
							/>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Playground;
