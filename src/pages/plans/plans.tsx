import React from 'react'
import Dashboard from '../../components/base-components/dashboard/dashboard-layout'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const allPlans = [
    {
        id: 1,
        type: 'Personal',
        slug: 'personal',
        description: 'Fixed-locked savings towards long term goals.',
        image: require('../../assets/images/piggy bank.png')
    },
    {
        id: 2,
        type: 'Cliq',
        slug: 'cliq',
        description: 'Save towards milestones with friends.',
        image: require('../../assets/images/3 User.png')
    },
    {
        id: 3,
        type: 'Soft',
        slug: 'soft',
        description: 'Flexible savings, withdraw at any time.',
        image: require('../../assets/images/withdraw 1.png')
    },
    {
        id: 4,
        type: 'Locked',
        slug: 'locked',
        description: 'Lorem ipsum dolor sit amet si consectetur.',
        image: require('../../assets/images/fxemoji_lock.png')
    }
]

function Plans() {
    return (
        <Dashboard title='Plans'>
            <section>
                <div>
                    <p className="text-xl font-bold text-[#33343D]">Plans</p>
                </div>

                <div className='mt-5 grid md:grid-cols-3 gap-3'>
                    {
                        allPlans.map((plan: any) => (
                            <Link
                            key={plan.id}
                                to={`plan/${plan.slug}`}
                            >
                                <div className='w-full rounded-xl  cursor-pointer bg-[#EFEAED] h-20 md:h-28 p-4'>
                                    <div className='flex w-full justify-between'>
                                        <div className='flex justify-start items-center'>
                                            <img
                                                alt=''
                                                className='bg-white p-2 rounded-lg'
                                                src={plan.image}
                                            />

                                            <div className='ml-5'>
                                                <p className='font-bold text-primary md:text-xl'>{plan.type}</p>
                                                <p className=' text-[#33343D] text-xs md:text-base'>{plan.description}</p>
                                            </div>
                                        </div>

                                        <AiOutlineRight
                                            className='font-bold'
                                            size={24}
                                            color='#33343D'
                                        />
                                    </div>

                                </div>
                            </Link>

                        ))
                    }
                </div>
            </section>
        </Dashboard>

    )
}

export default Plans
