import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header'
import SummaryCss from '../static/css/Summary.module.css'
import SimplifyrLogo from '../static/img/simplifyrLogo.svg'




function Summary(){

    const navigate = useNavigate();
    const summarize = async (data) => {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        const resultText = result[0].summary_text;
        return resultText;
    };
    const HomeRedirect = () => {
        navigate('/');
    };

    // const copyClick = () => {
    //     const copyText = document.getElementById("summary").value;
    //     if (copyText) {
    //         copyText.select();
    //         document.execCommand('copy');
    //     }
    //     // alert(copyText.value)
    // }

    const handleClick = () => {
        const paraToSummarize = document.getElementById("paraToSummarize").value;
        const summary = document.getElementById("summary");

        summarize({ "inputs": paraToSummarize }).then((response) => {
            console.log(response);
            summary.innerHTML = response;
        });
    };
    return (
        <>
           
            <div className={SummaryCss.container}>
                <div className={SummaryCss.logo} >
                    <img className={SummaryCss.logoImg} src={SimplifyrLogo} onClick={HomeRedirect} />
                </div>
                    <div className={SummaryCss.mainContent } >

                    <div className={SummaryCss.InputOutput}>
                       
                        <textarea id="paraToSummarize" className={SummaryCss.Input} placeholder='Enter your phrase...' />
                     
                        <div id="summary" className={SummaryCss.Output} >Output will shown here...</div> 
                    </div>
                        <button onClick={handleClick} className={SummaryCss.btn}>Summarize</button>
                        {/* <button onClick={copyClick} className={SummaryCss.btn}>copy</button> */}
                    </div>
                    <Header/>
             </div>



        </>
    )
}
export default Summary;