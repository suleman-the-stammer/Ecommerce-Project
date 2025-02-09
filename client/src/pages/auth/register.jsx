

import CommonForm from '@/components/ui/common/form';
import { registerFormControls } from '@/config';
import { useToast } from '@/hooks/use-toast';
import { registerUser } from '@/store/AuthSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  userName: '',
  email: '',
  password: '',
};

function RegisterLayout() {
  const [formData , setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {toast} = useToast();
  
  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(registerUser(formData)).then((data)=>{
     if(data?.payload?.success) {
      toast({
       title: data?.payload?.message,
      })
      navigate('/auth/login');
     } else{  
      toast({
        title: data.payload.message,
         variant: "destructive",
      })
     }
  })
    
  }
    return (
      <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground '>Create New Account</h1>
          
          </div>
          <CommonForm
          formControls={registerFormControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          buttonText={'Sign Up'}

          />
        <p className='mt-3 text-center'>Already Have an Account! <Link className='font-medium ml-3 hover:underline ' to='/auth/login'>Login</Link> </p> 
      </div>
    )
  }
  
  export default RegisterLayout
  