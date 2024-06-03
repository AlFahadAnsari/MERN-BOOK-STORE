import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios'

const Course = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("https://server-three-cyan.vercel.app/book");
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);


    return (
        < >

            <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-20 md:mt-28  items-center justify-center text-center '>
                    <h1 className="text-2xl md:text-4xl">
                        We're delighted to have you{" "}
                        <span className="text-pink-500"> Here! :)</span>
                    </h1>
                    <p className="mt-10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                        assumenda? Repellendus, iste corrupti? Tempore laudantium
                        repellendus accusamus accusantium sed architecto odio, nisi expedita
                        quas quidem nesciunt debitis dolore non aspernatur praesentium
                        assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
                        animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
                        consequatur!
                    </p>

                    <Link to={'/'} className="btn btn-secondary mt-5 ">back</Link>
                </div>



                <div className='grid grid-cols-1 md:grid-cols-4'>
                    {book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>



            </div>

        </>
    )
}

export default Course
