import { categories } from "@/data/categories";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-5xl">
          Categories
        </h2>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {categories.map((category) => (
          <Link
            className="rounded-lg border bg-background p-2 shadow-md ease-in-out duration-300 transform hover:shadow-xl"
            href={category.path}
            key={`/${category.path}`}
          >
            <div className="flex h-32 flex-col justify-center items-center rounded-md p-6">
              <h3 className="font-bold text-xl">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
