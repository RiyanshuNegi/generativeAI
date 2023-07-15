import Header from '../component/Header'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import load from '../static/img/370.gif'
import ImgGenCss from '../static/css/ImageGen.module.css'
import NeuralSketchLogo from '../static/img/NeuralSketchLogo.svg'


function ImageGen() {
    const navigate  = useNavigate();
    const [imageUrl, setImageUrl] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const getImage  = async (data) => {
        setIsGenerating(true);
        const response = await fetch(
            "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        console.log(result)


        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulated response
                resolve(result);
            }, 2000);
        });
    };
        const HomeRedirect = () =>{
            navigate('/')
        } 
        
        const handleClick = () => {
            const reqImg = document.getElementById("reqImg").value;
            setIsGenerating(true);
                
            getImage({ "inputs": reqImg }).then((response) => {
                // Use image
                const imageUrl = URL.createObjectURL(response);
                setImageUrl(imageUrl);
                setIsGenerating(false);
            });
    }
    
    return (
        <>
            
            <div className={ImgGenCss.container}>
                <div className={ImgGenCss.logo} >
                    <img className={ImgGenCss.logoImg} alt='logo' src={NeuralSketchLogo} onClick={HomeRedirect} />
                </div>
                <div className={ImgGenCss.mainContent} >

                    <div className={ImgGenCss.PromptControl}>
                        <input type="text" id='reqImg' className={ImgGenCss.input} />
                        <button onClick={handleClick} className={ImgGenCss.btn}>Generate Image</button>
                    </div>
                    {isGenerating ? (<div className={ImgGenCss.loadCon} > <img src={load} alt='loader' className={ImgGenCss.loader} /> Generating... </div>) : (<img src={imageUrl} alt='output' className={ImgGenCss.resultImg} /> )}
                    
                </div>
                <Header />
            </div>


        </>
    )
    }

export default ImageGen;
