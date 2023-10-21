import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        'I\'m a Full Stack Web Developer',
        1000,
        'I\'m a Freelancer',
        1000,
        'I\'m a Competitive Programmer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Typing