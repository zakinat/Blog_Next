import React,{useState,useEffect,useRef} from 'react'
import {submitComment}  from '../services'


const CommentsForm = ({slug}) => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const commentEl=useRef()
    const nameEl=useRef()
    const emailEl=useRef()
    const storeDataEl=useRef()
useEffect(()=>{
nameEl.current.value=window.localStorage.getItem('name')
emailEl.current.value=window.localStorage.getItem('email')
},[])

const handleCommentSumb=()=>{
    setError(false)
    const {value: comment} =commentEl.current
    const {value: name} =nameEl.current
    const {value: email} =emailEl.current
    const {checked: storeData} =storeDataEl.current
    if(!comment || !name || !email){
        setError(true)
        return
    }

    const commentObj={
        name,email,comment,slug
    }

    if(storeData){
        window.localStorage.setItem('name',name)
        window.localStorage.setItem('email',email)
    }else{
        window.localStorage.rempveItem('name',name)
        window.localStorage.rempveItem('email',email)
    }
    submitComment(commentObj)
        .then((res)=>{
            setShowSuccessMessage(true)
            setTimeout(()=>{
                setShowSuccessMessage(false)
            },3000)
        })

}

    return (
        <div className='commentsForm bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-sembold border-b pb-4'>CommentsForm</h3>
            <div className='commentsForm__comment grid grid-cols-1 gap-4 mb-4'>
                <textarea ref={commentEl} 
                          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                          placeholder='comment'
                          name='comment'
                          />
            </div>            
            <div className='commentsForm__user grid grid-cols-2 gap-4 mb-4 lg:grid-cols-2'>
                <input
                    type='text' ref={nameEl}
                    className='p-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 '
                    placeholder='Name'
                    name='name'
                /> 
                
                
                <input
                    type='email' ref={emailEl}
                    className='py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                    placeholder='Email'
                    name='email'
                />
            </div>            
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <div>
                    <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData'  value='true'/>
                    <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>save my name for the next time</label>
                </div>
            </div>
            {error && <p className='text-xs text-red-00'>All field are required</p>}           
            <div className='commentsForm__button'>
                <button 
                    type='button' onClick={handleCommentSumb}
                    className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 font-medium rounded-full px-8 py-3 cursor-pointer'>
                    Post a Comment
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
            </div>
            
        </div>
        
    )
}

export default CommentsForm
