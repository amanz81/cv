import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-8 px-4 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Assaf Manzur
        </h1>
        
        <h2 className="text-2xl text-gray-600 mb-4">
          Tech Lead DevOps Engineer
        </h2>
        
        <div className="flex gap-4">
          <Link
            href="mailto:assaf.manzur@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            assaf.manzur@gmail.com
          </Link>
          
          <Link
            href="https://www.linkedin.com/in/assaf-manzur-55443020"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 