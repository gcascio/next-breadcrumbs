import { categories } from "@/data/categories";
import Link from "next/link";

type CategoryProps = {
  params: {
    category: string;
  };
};

export default function Category({
  params: { category },
}: CategoryProps) {
  const items = categories.find((val) => val.path === category)?.items;

  if (!items) return null;

  return (
    <section>
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-5xl">
          Categories
        </h2>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {items.map((item) => (
          <Link
            className="rounded-lg border bg-background p-2 shadow-md ease-in-out duration-300 transform hover:shadow-xl"
            href={`/${category}/${item.path}`}
            key={item.path}
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