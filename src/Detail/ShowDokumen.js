import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import './css/dokumen.css';


function ShowDokumen() {
  const [DataShowDokumen, setDataShowDokumen] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        getShowDokumen();
    }, [])

    function getShowDokumen() {
        const axios = require('axios');
        axios.get("http://adminmesuji.embuncode.com/api/dokumen/" + slug).then(function (response) {
            setDataShowDokumen(response.data.data);
            console.log(response.data)
        }).catch(function (error) {

        }).then(function () {

        });
    }

    console.log(DataShowDokumen)
    return (
        <>
        <Header/>
            {
                (DataShowDokumen != null) ?
                <div className='dokumen-card'>
                    <div className='container'>
                        <article>
                            {DataShowDokumen[0].description_dokumen}
                        </article>
                        <iframe
                            src={"data:application/pdf;base64," + DataShowDokumen[0].dokumen_file_data}
                            frameBorder="0"
                            title={DataShowDokumen[0].dokumen_file_data}
                            scrolling="auto"
                            height="100%"
                            width="100%"
                        ></iframe>
                    </div>
                </div> : ''
            }

            <Footer/>
        </>
    );
}
export default ShowDokumen;