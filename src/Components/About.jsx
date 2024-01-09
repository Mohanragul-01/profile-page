const About = (Props) => {
    
    return (
        <>
            <div className="col-md-12 d-sm-flex justify-content-between mt-1">
                <h6 className="fw-bold fs-5">{Props.title}</h6>
                <h6 className="text-muted fs-5">{Props.value}</h6>
            </div>
        </>
    )
}

export default About; 
