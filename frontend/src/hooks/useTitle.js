import { useEffect } from 'react';

function useTitle(title, description) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let metaTag = document.querySelector('meta[name="description"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'description');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', description);
    }
  }, [title, description]);
}

export default useTitle;