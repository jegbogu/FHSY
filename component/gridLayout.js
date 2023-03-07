import classes from './gridLayout.module.css'
function GridLayout(){
    return(
        <div className={classes.section}>
        <div className={classes.grid}>
        <div className={classes.gridItem2}>
        <img src="https://media.istockphoto.com/id/1318149876/photo/green-ripening-soybean-field-agricultural-landscape.jpg?s=612x612&w=0&k=20&c=vxIVUdPw2AQt831QxlWIhwrq8p8NcbaXzu31-DxGEi4=" alt="clean farm"/>

        </div>
        <div className={classes.gridItem3}>
            <img src="https://media.istockphoto.com/id/515594772/photo/digital-farmer-with-a-tablet.jpg?s=612x612&w=0&k=20&c=LFglQYkKsgqza0mif2-UFHyR8g_WbnnoN_QhAXua8ZA=" 
            alt="clean environment"/>

            </div>
        <div className={classes.gridItem4}>
            
            <img src="https://media.istockphoto.com/id/1319236881/photo/financial-center-square-and-office-building-in-ningbo-zhejiang-provincechina.jpg?s=612x612&w=0&k=20&c=vdbRaftV7gl-muhyqWrz5mV1CQivswnUaF5YiHLo5Iw=" alt="farm" />
        </div>
            </div>
            <div className={classes.article}>
                <h3>Get Inspired</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quae quisquam veritatis maiores, commodi harum recusandae consequatur, voluptates facere accusamus reprehenderit optio consectetur perspiciatis reiciendis minima hic ut quaerat. Dolor architecto magni, autem aut culpa minima commodi, tempora tenetur, earum beatae nihil provident error debitis! Repellendus sapiente iste esse quaerat vitae, dolore libero. Nesciunt, perferendis culpa.</p>
                <button>Read More</button>
            </div>
            
     
    </div>
    )
}

export default GridLayout