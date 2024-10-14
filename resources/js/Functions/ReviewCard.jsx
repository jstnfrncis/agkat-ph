import PropTypes from 'prop-types';

export default function ReviewCard({ profileImage, userName, ratingImage, reviewTitle, reviewText, reviewPhotos }) {
    return (
        <div className='review-container md:mb-16 my-8'>
            <div className='flex items-center gap-4'>
            <div className='flex w-[40px] h-[40px] overflow-hidden rounded-full items-center'>
                <img src={profileImage} alt="profile" />
                </div>
                <h2 className='text-lg font-Manbold'>{userName}</h2>
                <img src={ratingImage} alt="rating" />
               
            </div>
      
            <div className='mt-4'>
                <h1 className='font-Manbold'>{reviewTitle}</h1> {/* Use reviewTitle here */}
                <p className='max-w-[605px] text-gray-500 '>{reviewText}</p>
            </div>
            <div className='grid grid-cols-4 sm:grid-cols-9 gap-2 mt-4'>
                {reviewPhotos.map((photo, index) => (
                    <img key={index} src={photo} alt={`review-photo-${index}`} />
                ))}
            </div>   
        </div>
   
    );
}

// PropTypes validation
ReviewCard.propTypes = {
    profileImage: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    ratingImage: PropTypes.string.isRequired,
    reviewTitle: PropTypes.string.isRequired, // Updated to isRequired if you are using it
    reviewText: PropTypes.string.isRequired,
    reviewPhotos: PropTypes.arrayOf(PropTypes.string).isRequired,
};
