import type { ReactNode } from 'react';

type PastryProps = {
  img: ReactNode;
  title: string;
  description: ReactNode;
};

const Pastry = ({ img, title, description }: PastryProps) => (
  <article className="flex flex-col items-center justify-between rounded-3xl bg-slate-800 p-3">
    <div className="overflow-hidden rounded-3xl">{img}</div>
    <p className="mt-4 mb-2 text-lg">
      <strong>{title}</strong>
    </p>
    {description}
  </article>
);

export { Pastry };
