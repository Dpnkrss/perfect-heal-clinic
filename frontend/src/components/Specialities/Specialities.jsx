import Card from '../Card/Card';
import ortho1 from '../../assets/ortho1.svg';
import ortho2 from '../../assets/ortho2.svg';
import im1 from '../../assets/im1.svg';
import im2 from '../../assets/im2.svg';
const Specialities = () => {
  const topImg = ortho1;
  const bottomImg = ortho2;
  const topImg1 = im1;
  const bottomImg1 = im2;
  const orthoPage = '/orthopaedics-sports-injuries';
  const internalMedPage = '/internal-medicine';
  return (
    <div className='flex flex-col justify-center items-center bg-[#f15a2d47]'>
      <div className='outterbox flex flex-col justify-center items-center relative bg-[#FFFFFF60] bg-opacity-30 bg-opacity-90 rounded-lg mt-8 my-8 p-14 '>
        <p className='text-orange-500 uppercase text-lg mt-5'>
          our core specialities
        </p>
        <h3 className='text-4xl'>Centre of Excellence</h3>
        <p className='text-slate-500 mb-10'>
          Experience the difference in you with our specialised care!
        </p>
        <div className='flex justify-between gap-x-8'>
          <Card
            title='Orthopaedics'
            content="Your bones, your joints, our expertise! We've got you covered, from fractures to replacements."
            topImg={topImg}
            bottomImg={bottomImg}
            linkTo={orthoPage}
          />
          <Card
            title='Internal Medicine'
            content='Expert care for the inside out! Partnering with you for your well-being.'
            topImg={topImg1}
            bottomImg={bottomImg1}
            linkTo={internalMedPage}
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default Specialities;
