import classes from './recycle.module.css'

function Recycle(){
    return(
        <div className={classes.section}>
            <div className={classes.figure}>
            <img
            src="https://img.freepik.com/premium-vector/woman-throws-garbage-bag-into-trash-can-garbage-recycling-sign-volunteering-people-ecology-environment-concept-girl-throws-rubbish-garbage-bin-vector-illustration-clean-planet-concept_419010-299.jpg?w=2000"
            alt="recycling"
            />
            </div>
            <div className={classes.article}>
                <h2>About 98% of single-use plastic products are made from fossil fuels. Globally, we produce about 400 million tons of plastic waste yearly.</h2>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default Recycle