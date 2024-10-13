import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Header() {
    return (
        <div className="bg-Dark h-28 flex justify-between items-center w-screen p-10 pl-20">
            <div>
                <h1 className="text-Teal text-2xl ">
                    &lt;H1&gt; <span className="text-white">Nalin S Bandara</span> &lt;/H1&gt;
                </h1>
            </div>
            <div className="text-white flex items-center space-x-4 text-xl">
                <a href="" className="text-Teal">Home</a>
                <a href="">Projects</a>
                <div className="flex items-center space-x-2 p-20">
                    <FaLinkedin className='text-Teal'/>
                    <a className='pr-6' href="/">LinkedIn</a>
                    <FaGithub className='text-Teal' />
                    <a href="/">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
