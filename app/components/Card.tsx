import Link from 'next/link';

interface CardProps {
  description: string;
  heading: string;
  buttonLabel: string; // New prop for button label
  buttonLink: string; // New prop for button link
}

const Card: React.FC<CardProps> = ({ description, heading, buttonLabel, buttonLink }) => {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-tr from-gray-300 to-white shadow-xl rounded-lg overflow-hidden m-4 hover:-translate-y-2 transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{heading}</h3>
        <p className="mt-2 text-gray-600">{description}</p>

        {/* Main button */}
        <Link href={buttonLink} target='_blank'>
          <button className="mt-4 inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 focus:outline-none">
            {buttonLabel}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
