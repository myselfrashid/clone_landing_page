import React from 'react';

const Table = ({ data }) => {
    return (
        <div>
            <table className='bg-[#3498db] rounded-sm'>
                <tbody>
                    <tr className='flex px-10 py-4'>
                        <th className='w-28'>Action</th>
                        <th className='w-28'>ID</th>
                        <th className='w-28'>Start Date</th>
                        <th className='w-28'>End Date</th>
                        <th className='w-28'>Month, Year</th>
                        <th className='w-28'>Dates Excluded</th>
                        <th className='w-28'>Number of Days</th>
                        <th className='w-28'>Lead Count</th>
                        <th className='w-28'>Expected DDR</th>
                        <th className='w-28'>Last Updated</th>
                    </tr>
                    {data.map((data, index) => {
                        const days = (new Date(data.endDate) - new Date(data.startDate))
                            / (1000 * 60 * 60 * 24)
                            - (data.excludedDates.length)- 1;
                        return (
                            <tr className='flex px-10 py-4 bg-slate-400 items-center justify-center text-center' key={index}>
                                <td className='w-28'>*</td>
                                <td className='w-28'>{data.count}</td>
                                <td className='w-28'>{data.startDate}</td>
                                <td className='w-28'>{data.endDate}</td>
                                <td className='w-28'>{(new Date(data.startDate).getMonth() + 1)}</td>
                                <td className='w-28'><ul>{data.excludedDates.map((date, index) => (<p key={index}>{date}</p>))}</ul></td>
                                <td className='w-28'>{days}</td>
                                <td className='w-28'>{data.leadCount}</td>
                                <td className='w-28'>{Math.floor((data.leadCount) / (days))}</td>
                                <td className='w-28'>{data.lastUpdated.toISOString().split('T')[0]}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table