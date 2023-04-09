
let PicAndText = (props)=> {
    return (<>
            <div className="textBox">
                <h4>{props.hd1}</h4>
                <h4>{props.hd2}</h4>
                <p>{props.p}</p>
            </div>
            <div className="imgBox">
                <img src={props.img1} alt="" />
                <img src={props.img2} alt="" />
            </div>
        </>
    )
}

export default PicAndText;