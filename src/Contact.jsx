

const Contact = () => {
    return (
        <div>
            <p className="text-center text-3xl font-bold ">Contact Me</p>
            <div className="hero bg-base-200  p-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold"> Dhaka,bangladesh</h1>
                        
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label font-bold">Email</label>
                                <p>nawshinsiddiqa@gmail.com</p>
                                <label className="fieldset-label">Phone Number</label>
                                <p>01679039576</p>
                            
                               
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;