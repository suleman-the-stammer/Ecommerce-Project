

import CommonForm from '@/components/ui/common/form';
import { loginFormControls, registerFormControls } from '@/config';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
}
function LoginLayout() {
  const [formData , setFormData] = useState(initialState);
  const onSubmit = ()=>{}
    return (
      <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground '>
            Sign in to your account
          </h1>
         
          </div>
          <CommonForm
          formControls={loginFormControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          buttonText={'Sign In'}
          />
         <p className='mt-3 text-center'> Don't have an account ! <Link className='font-medium ml-3 hover:underline ' to='/auth/register'>Register Here</Link> </p> 
      </div>
    )
  }
  
  export default LoginLayout
  