import { v2 as cloudinary } from 'cloudinary';

export const sendImageToCloudinary = () => {
  cloudinary.config({
    cloud_name: 'dphqttpp6',
    api_key: '996676317871748',
    api_secret: 'KI-fPnjr0j3oPoEAOX34yPkB0aY',
  });

  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'my_dog' },
    function (error, result) {
      console.log(result);
    },
  );
};
