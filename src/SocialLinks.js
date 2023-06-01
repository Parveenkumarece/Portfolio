import React from 'react'

const SocialLinks = () => {
    return (
      <div className="flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.instagram.com/parveen_9411/" target="_blank" rel="noopener noreferrer" className="text-gray-300 ">
              <span className="sr-only">Instagram</span>
             
                <img className="h-6 w-5 rounded-full object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Logo" />

            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/parveenkumarsoni/" target="_blank" rel="noopener noreferrer" className="text-gray-300 ">
              <span className="sr-only">LinkedIn</span>
              <img className="h-6 w-8 scale-120 rounded-full object-cover" src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="Logo" />
  </a>
  </li>
  <li>
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 	">
  <span className="sr-only">GitHub</span>
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" clipRule="evenodd" d="M12 1.164c-5.514 0-10 4.486-10 10 0 4.414 2.865 8.15 6.839 9.467.5.092.683-.217.683-.483v-1.666c-2.783.583-3.367-1.34-3.367-1.34-.455-1.159-1.114-1.468-1.114-1.468-.908-.624.068-.612.068-.612 1.004.073 1.532 1.032 1.532 1.032.892 1.525 2.341 1.084 2.909.83.091-.645.35-1.084.637-1.334-2.228-.256-4.57-1.109-4.57-4.937 0-1.089.39-1.984 1.032-2.683-.105-.257-.447-1.274.097-2.656 0 0 .843-.27 2.755 1.03A9.749 9.749 0 0112 6.164c.827 0 1.648.098 2.436.29 1.912-1.3 2.754-1.03 2.754-1.03.545 1.382.204 2.399.1 2.656.64.699 1.03 1.594 1.03 2.683 0 3.839-2.346 4.678-4.583 4.93.36.307.683.916.683 1.844v2.736c0 .266.182.575.692.483A10.006 10.006 0 0022 11.164c0-5.514-4.486-10-10-10z" />
  </svg>
  </a>
  </li>
  </ul>
  </div>
  );
  };

export default SocialLinks
