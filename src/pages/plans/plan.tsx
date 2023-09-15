import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Dashboard from '../../components/base-components/dashboard/dashboard-layout'
import { useNavigate } from 'react-router-dom';
import CreatePlan from '../../components/block-components/modal/plans/createPlan';
import ModalLayout from '../../components/base-components/modal/modal-layout';


function Plan() {
    const navigate = useNavigate();
    const [startPlan, setStartPlan] = useState(false)

    return (
        <Dashboard title='Plans'>
            {
                startPlan && <CreatePlan 
                open ={startPlan}
                setOpen={setStartPlan}

                />
            }
            <section>
                <div>
                    <button
                        onClick={() => navigate(-1)}
                        className='bg-[#F8F1F6] text-[#666666] cursor-pointer flex justify-start px-4 py-2 items-center rounded-xl'>
                        <MdOutlineKeyboardArrowLeft />
                        Back
                    </button>
                </div>

                <h2 className='font-bold text-xl mt-5 text-[#666666] '>Personal Savings</h2>

                <div className='flex justify-center items-center flex-col my-10'>
                    <img
                        className='object-cover'
                        alt=""
                        src='https://res.cloudinary.com/dlhjvo4tz/image/upload/v1694703237/Group_7767_dvjn6q.png'
                    />

                    <div className='text-center'>
                        <p className='font-bold text-xl mt-5 text-primary'>No Personal Saving Plan!</p>
                        <p className='text-[#33343D] mt-3'>Smash your financial goals by starting a personal savings plan today!</p>
                    </div>

                    <button 
                    onClick={() => setStartPlan(!startPlan)}
                    className='bg-primary text-white mt-10 cursor-pointer flex justify-start px-5 py-4 items-center rounded-xl'>
                        START A SAVINGS PLAN
                    </button>
                </div>




            </section>
        </Dashboard>

    )
}

export default Plan