import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        {/* Navbar section*/}
        <section>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative">
              <div className="flex justify-between">
                <div>
                  <a
                    href="#"
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                  >
                    Feature
                  </a>
                  <a
                    href="#"
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                  >
                    Marketplace
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                  >
                    Log In
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <div className="fit">
          {/* Hero Section  */}
          <section className="lg:2/6 text-left my-28">
            <div className="text-6xl font-semibold text-gray-900 leading-none">
              Grow your career as a developer
            </div>
            <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
              Learn programming and web development the easy way! Get unlimited
              access to all of our courses
            </div>
            <div className="mt-5 sm:mt-8 flex lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
            </div>
          </section>
          {/* BREADCRUMB */}
          <nav>
            <ol>
              <li className="pr-4">
                <a href="#">Buy</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
