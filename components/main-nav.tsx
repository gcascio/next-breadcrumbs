"use client"

import * as React from "react"
import Link from "next/link"

export const MainNav = () => (
  <div className="flex gap-6 md:gap-10 ">
    <Link href="/" className="hidden items-center space-x-2 md:flex">
      {`(╯°□°)╯`}
      <span className="hidden font-bold sm:inline-block ml-2">
        Flipping Breadcrumbs
      </span>
    </Link>
  </div>
)