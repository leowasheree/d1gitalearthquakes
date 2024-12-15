import { Github, Globe, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">
            Made by{' '}
            <a 
              href="https://leoo.lol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              d1gitalmemories
            </a>
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://leoo.lol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/d1gitalmemories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com/users/d1gitalmemories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}