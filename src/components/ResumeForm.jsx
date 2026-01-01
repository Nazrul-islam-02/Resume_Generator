
import React, { useState } from 'react';

const ResumeForm = ({getData}) => {
    // console.log(getData);

    const [formData , setFormData] = useState({
        name:"",
        email:"",
        image:"",
        
    })

    const handleChange = (e)=>{
        if(e.target.type === 'file'){
            setFormData({...formData,[e.target.name]: e.target.files[0]});

        }else{
        setFormData({...formData,[e.target.name]: e.target.value});
        }
    }


    const hangleSubmit = (e)=>{
        e.preventDefault();
        getData(formData);
    }

    return (
        <div>
            <form action="" onSubmit={hangleSubmit}>

                <input type="text" name='name' onChange={handleChange} placeholder='Enter your name' />
                <br />
                <input type="email" name='email' onChange={handleChange} placeholder='Enter your email' />
                <br />
                <input type="file" name='image' accept='image/' onChange={handleChange} />
                <button type='submit' className='bg-green-300 rounded-lg p-2 cursor-pointer'>ResumeGenerate</button>
            </form>
        </div>
    );
};

export default ResumeForm