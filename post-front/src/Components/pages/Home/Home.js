import React from 'react';
import { get } from 'axios';
import Header from '../../organisms/Header/Index';
import Footer from '../../organisms/Footer/Index';
import UserContent from '../../organisms/UserContent/Index';
import './Home.css';

const URLApi = process.env.REACT_APP_API_URL;

const getPost = async (setPost, setLoading) => {
    try {
        const { data } = await get(`${URLApi}usersPost`);
        if (data.sucess)
            setPost(data.result);
        setLoading(false);
    }
    catch (e) {
        setLoading(false);
    }
};

const Home = () => {
    const [post, setPost] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getPost(setPost, setLoading);
    }, []);

    return (
        <>
            <Header />

            <div className="container">
                <div className="usersContent">
                    {loading ?
                        <p>Loading</p> :
                        <UserContent users={post} />
                    }
                </div>
            </div>

            <Footer />
        </>
    )
};

export default Home;