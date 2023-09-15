import {BiDotsHorizontalRounded} from 'react-icons/bi'



const people = [
    { date: '20th Aug. 2023', time: '10:34:21 PM', name: 'Jenny Frank', amount: '#10, 000', status:'Completed' },
    { date: '20th Aug. 2023', time: '10:34:21 PM', name: 'Jenny Frank', amount: '#10, 000', status:'Ongoing' },
    { date: '20th Aug. 2023', time: '10:34:21 PM', name: 'Jenny Frank', amount: '#10, 000', status:'Failed' },
    { date: '20th Aug. 2023', time: '10:34:21 PM', name: 'Jenny Frank', amount: '#10, 000', status:'pending' },
    { date: '20th Aug. 2023', time: '10:34:21 PM', name: 'Jenny Frank', amount: '#10, 000', status:'pending' },
    
    // More people...
  ]
  
  export default function Table() {
    return (
      <div className="px-4 sm:px-6 lg:px-8 text-orange-yellow">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Day
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Time
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Groover Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Amount
                    </th>
                    <th scope="col" className="relative text-left py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {people.map((person) => (
                    <tr key={person.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                        {person.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.time}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-50">
                        <span className='px-3 py-1 bg-gray-900 rounded-lg text-orange-yellow'>
                        {person.status}
                        </span>
                        </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.amount}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                            <BiDotsHorizontalRounded
                            className='text-gray-500 cursor-pointer'
                            size={25}
                            />

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  