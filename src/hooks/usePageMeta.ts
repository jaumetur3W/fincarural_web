import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

export const usePageMeta = ({ title, description }: SeoProps) => {
  useEffect(() => {
    document.title = `${title} — Mas de l'Alzina`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
};

