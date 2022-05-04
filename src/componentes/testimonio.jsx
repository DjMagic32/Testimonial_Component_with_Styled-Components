import React  from "react";
import styled from "styled-components";

const ContainerTestimonial = styled.div`
    width: 1170px;
    height: 368px;
    margin: 10px 10px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0 3px 13px 1px rgb(0 0 0 / 9%);

    
    `;
const ContainerText_Testimonial = styled.div`
    text-align: center;
    padding: 40px;
    font-family: 'Abel', sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
    width: 100%;
    font-size: 18px;
    
    `;
const ImgTestimonial = styled.img`
    height: 100%;
    width: auto;
    
    `;
const NameTestimonial = styled.p`
    font-size: 1.3rem;
    
    `;
const CargoTestimonial = styled.p`
    font-size: 1.3rem;
    margin-top: 15px;
    padding-bottom: 30px;    
    `;
const Text_Testimonial = styled.p`
    font-size: 1.1rem;
    text-align: justify;
    `;




const Testimonio = (props) => {
    return(
            <ContainerTestimonial>
                <ImgTestimonial 
                src={props.imagen} 
                alt={props.alt} 
                />
                <ContainerText_Testimonial>
                    <NameTestimonial><strong>{props.nombre}</strong></NameTestimonial>
                    <CargoTestimonial>{props.cargo} In {props.empresa}</CargoTestimonial>
                    <Text_Testimonial>{props.testimonios}</Text_Testimonial>
                </ContainerText_Testimonial>

            </ContainerTestimonial>

    )
    
};

export default Testimonio;