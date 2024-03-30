'use client'

import { categories } from "@/data/categories";
import { examples } from "@/data/examples";
import Image from "next/image";
import { useBreadCrumbs } from "@/components/breadcrumbs-context";
import { useEffect, useState, useCallback } from "react";

type CategoryProps = {
  params: {
    category: string;
    variant: string;
    id: number;
  };
};

// This function is a mock of a fetch request
const fetchExample = (
  id: number
) => new Promise<typeof examples[number]>(
  (resolve) => setTimeout(() => resolve(examples[id]), 500),
);

export default function Category({
  params: {
    category,
    variant,
    id,
},
}: CategoryProps) {
  const [example, setExample] = useState<typeof examples[number] | null>(null);
  useBreadCrumbs(example?.name);
  const exampleVariant = categories
    .find((val) => val.path === category)?.items
    .find((val) => val.path === variant)?.items
    .find((val) => val.exampleId == id);

  const loadExample = useCallback(async (id: number) => {
    const example = await fetchExample(id);
    setExample(example);
  }, []);

  useEffect(() => {
    loadExample(id);
  }, [loadExample, id]);

  if (!example) return null;

  return (
    <section>
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-5xl">
          {example.name}
        </h2>
      </div>
      <div className="flex px-4 items-center justify-center">
        <figure className="w-96 rounded-xl shadow-md border">
          <Image
            src={example.image}
            alt={example.name}
            className="object-cover aspect-square rounded-xl w-full"
            height={200}
            width={200}
          />
          <figcaption className="p-4 block text-left">
            {exampleVariant?.description ?? example.name}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}