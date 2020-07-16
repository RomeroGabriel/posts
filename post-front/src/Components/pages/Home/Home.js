import React from 'react';
import { get } from 'axios';
import Header from '../../organisms/Header/Index';
import Footer from '../../organisms/Footer/Index';
import UserContent from '../../organisms/UserContent/Index';

const URLApi = `http://localhost:8080/usersPost`;
const getPost = async (setPost, setLoading) => {
    try {
        const { data } = await get(URLApi);
        // console.log(`Data: ${JSON.stringify(data)}`);
        if (data.sucess)
            setPost(data.result);
        setLoading(false);
    }
    catch (e) {
        setLoading(false);
        // console.log(`Error: ${JSON.stringify(e)}`);
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
                {loading ?
                    <p>Loading</p> :
                    <>
                        <UserContent users={post} />
                    </>
                }
            </div>

            <Footer />
        </>
    )
};

export default Home;