import { Link } from "react-router-dom";
import { photo2} from '../assets/images';
import { arrow } from "../assets/icons";
import './profile.css';

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>ARUN KUMAR S</span>
        👋
        <br />
        A 🧠 Digital Innovator & <br/>🌀 Frontend Wizard from Tamil Nadu 🇮🇳
      </h1>
    );

    if (currentStage === 2) {
      return (
        <div className='info-box'>
        <img className="Profile"  src={photo2} alt="Professional Photo" />
  
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Contact
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
      );
    }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked on many Domains <br /> and picked up many skills along the way
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;