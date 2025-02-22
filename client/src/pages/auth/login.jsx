

import CommonForm from '@/components/ui/common/form';
import { loginFormControls } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { loginUser } from '@/store/AuthSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
}
function LoginLayout() {
  const dispatch = useDispatch();
  const {toast} = useToast()
  const [formData , setFormData] = useState(initialState);

  const onSubmit = (e)=>{
   e.preventDefault();
   dispatch(loginUser(formData)).then((data)=>{
    if(data?.payload?.success) {
      toast({
       title: data?.payload?.message,
      });
     
     } else{  
      toast({
        title: data.payload.message,
         variant: 'destructive',
      })
     }
   })
   
  }
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
  