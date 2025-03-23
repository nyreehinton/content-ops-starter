import styles from '@/styles/ThirdBridge.module.css';
import Tooltip from '@/components/thirdbridge/ui/Tooltip';
import Link from 'next/link';

interface TopBarProps {
  toggleMobileSidebar: () => void;
}

/**
 * Top navigation bar component styled to match the site's index page header
 */
export default function TopBar({ toggleMobileSidebar }: TopBarProps) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-md flex items-center justify-between px-6 py-3 z-50 border-b border-gray-100">
      <div className="flex items-center">
        <button 
          className="lg:hidden mr-4 text-gray-700 hover:text-[#0A66C2]"
          onClick={toggleMobileSidebar}
          aria-label="Toggle sidebar"
        >
          <i className="fas fa-bars"></i>
        </button>
        <Link href="/">
          <div className="flex items-center">
            <span className="font-display text-lg font-semibold text-gray-800">Nyree Hinton</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        <nav>
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link href="/" className="text-sm text-gray-800 hover:text-[#0A66C2] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/capital" className="text-sm text-gray-800 hover:text-[#0A66C2] transition-colors">
                Capital Group
              </Link>
            </li>
            <li>
              <Link href="/thirdbridge" className="text-sm font-medium text-[#0A66C2] hover:text-[#084d91] transition-colors">
                Third Bridge
              </Link>
            </li>
            <li>
              <Link href="/bloomberg" className="text-sm text-gray-800 hover:text-[#0A66C2] transition-colors">
                Bloomberg
              </Link>
            </li>
            <li>
              <Link href="/tesla" className="text-sm text-gray-800 hover:text-[#0A66C2] transition-colors">
                Tesla
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}