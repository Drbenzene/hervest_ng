import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import InputField from '../../input/inputField';
import SelectInputField from '../../input/selectInputField';
import Switch from "react-switch";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { RxCross2 } from 'react-icons/rx'
import emailjs from '@emailjs/browser';


interface IModal{
    open: boolean;
    setOpen: any
}
export default function CreatePlan({open, setOpen}: IModal) {
    const [checked, setChecked] = useState(true);
    const handleChange = (nextChecked: any) => {
        setChecked(nextChecked);
        changeHandler('earn_interest', nextChecked)
    };

    const cancelButtonRef = useRef(null)


    const [formValues, setFormValues] = useState<any>({
        name:'',
        target_amount : '',
        starting_date: '',
        earn_interest: true,
        frequency: '',
        saving_duration: [1]
    })

    const changeHandler = (name:string, value:any) => {
        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const mailLink = `mailto:yomi@hervest.ng?subject=New Personal Saving Plan&body= ${JSON.stringify(formValues)}`

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" 
            initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen  overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all mt-0 md:mt-5 min-h-screen sm:w-full max-w-lg sm:max-w-lg">
                              
                              {/* <form ref= {formValues} onSubmit={submitHandler}> */}
                              <div className="bg-white px-4 pb-4 md:pt-5 pt-3 sm:p-6 sm:pb-4 w-full">
                                    <div className='mb-5 mt-5'>
                                        <div className='flex justify-between items-center mt-10'>
                                            <h2 className='font-bold text-base text-[#666666] '>Create a Personal Saving Plan</h2>
                                            <RxCross2
                                            onClick={() => setOpen(!open)}
                                            color='#F05C90'
                                            size={20}
                                            className='cursor-pointer '
                                            />
                                        </div>
                                        <p className='my-2'>Start a saving plan to smash your goals</p>
                                    </div>

                                    <InputField
                                        label="Name of Personal Savings"
                                        type='text'
                                        placeholder='Enter Name'
                                        name='name'
                                        onChange={(e:any) => changeHandler('name', e.target.value )}
                                        value={formValues.name} />

                                    <div className='my-5'>
                                        <InputField
                                            label="Target Amount"
                                            type='text'
                                            placeholder='NGN 0'
                                            name='name'
                                            onChange={(e:any) => changeHandler('target_amount', e.target.value )}
                                            value={formValues.target_amount}
                                        />

                                        <div className='mt-3 flex items-center'>
                                            <Switch
                                                onChange={handleChange}
                                                checked={checked}
                                                className="react-switch"
                                                onColor="#5B2E4F"
                                                height={20}
                                                width={48}
                                                handleDiameter={20}
                                            />
                                            <span className='ml-3 text-[#666666] text-sm md:text-base'>Earn Interest on this saving plan</span>
                                        </div>
                                    </div>

                                    <div className='my-3'>
                                    <InputField
                                            label="When would you like to start this saving?"
                                            type='date'
                                            placeholder='Select a Day'
                                            name='name'
                                            onChange={(e:any) => changeHandler('starting_date', e.target.value )}
                                            value={formValues.starting_date}
                                        />
                                    </div>

                                    <div className='my-3'>
                                        <SelectInputField
                                            name='frequency'
                                            placeholder='Select Option'
                                            onChange={(e:any) => changeHandler('frequency', e.target.value )}
                                            label='Saving Frequency' />
                                    </div>

                                    <div>
                                        <label className='my-5 text-sm font-bold text-[#666666]'>How long do you want to save for?</label>
                                        <Slider
                                            className='mt-5  text-white'
                                            range={true}
                                            defaultValue={1}
                                            step={1}
                                            min={0}
                                            max={12}
                                            marks={{ 2: 2, 4: 4, 6: 6, 8: 8 , 10: 10  }}
                                            draggableTrack={true}
                                            startPoint={0}
                                            onChange={(nextValues) => {
                                                console.log('Change:', nextValues);
                                              //   setValue(nextValues as any);
                                              changeHandler('saving_duration', nextValues)
                                              }}
                                              value={formValues.saving_duration}
                                        />
                                    </div>

                                    <div className='m-10 flex flex-col justify-center rounded-xl p-5 items-center text-center bg-[#FBF9FA]'>
                                        <p>Your maturity date will be</p>
                                        <p className='font-bold text-primary'>21st February 2022</p>
                                    </div>

                                    <div className='flex justify-end'>
                                    <a href={mailLink}>

                                        <button 
                                        // onClick = {(e:any) => submitHandler(e)}
                                        className='bg-primary text-white mt-10 cursor-pointer flex justify-start px-8 py-2 items-center rounded-md'>
                                            PROCEED
                                        </button>
                                    </a>
                                    </div>

                                </div>
                              {/* </form> */}


                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}