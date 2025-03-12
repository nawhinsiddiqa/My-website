

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co.com/zhnKdKGY/CSJLQECQ.jpg"
                        className="max-w-sm rounded-lg shadow-2xl w-[280px]" />
                    <div>
                        <div className="">
                            <h1 className="text-5xl w-[500px]">Hello, I am!</h1>
                            <p className="py-2 font-bold mb-4 text-4xl">
                                Nawshin Siddiqa
                            </p>
                            <p className="" >Frontend developer</p>
                            <p className="my-1">I make beautiful website</p>
                            <div className="flex gap-2">
                               <a href="https://www.facebook.com"> <img className="w-10 my-3"src="https://i.ibb.co.com/LdKWjq6N/download-1.png"></img></a>
                               <a href="https://github.com"> <img className="w-10 my-3"src="https://i.ibb.co.com/xqxFXMdd/download-2.png"></img></a>
                               <a href="https://www.linkedin.com/feed"> <img className="w-10 my-3"src="https://i.ibb.co.com/JFsvR186/download-3.png"></img></a>
                            </div>
                            <button className="btn btn-primary">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;