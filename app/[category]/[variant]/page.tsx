import { categories } from "@/data/categories";
import Link from "next/link";

type CategoryProps = {
  params: {
    category: string;
    variant: string;
  };
};

export default function Category({
  params: {
    category,
    variant,
},
}: CategoryProps) {
  const variants = categories
    .find((val) => val.path === category)?.items
    .find((val) => val.path === variant)?.items;

  if (!variants) return null;

  return (
    <section>
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-5xl">
          Variants
        </h2>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {variants.map((item) => (
          <Link
            className="rounded-lg border bg-background p-2 shadow-md ease-in-out duration-300 transform hover:shadow-xl"
            href={`/${category}/${variant}/${item.exampleId}`}
            key={item.exampleId}
          >
            <div className="flex h-32 flex-col justify-center items-center rounded-md p-6">
              <h3 className="font-bold text-xl">{item.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}