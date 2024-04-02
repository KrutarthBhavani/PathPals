import React from 'react';
import '../index.css';

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow">
  <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row md:justify-between md:items-center">
    <div className="flex justify-between items-center">
      <a className="navbar-brand" href="/">
        <img width="30" height="45" alt="company logo" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/2f7d47af-ad93-480c-a98c-5085f3c724c8.png" />
        <span>PathPals</span>
      </a>
      {/* Toggle button for mobile */}
    </div>
    {/* Navbar links */}
    <div className="md:flex items-center">
      <div className="flex flex-col md:flex-row">
        <a href="#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Login</a>
        <a href="#" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Get Started</a>
        {/* More nav links */}
      </div>
    </div>
  </div>
</nav>
<section className="py-28" id="header">
    <div className="container">
        <div className="row justify-center">
            <div className="col lg:w-9/12 text-center md:w-10/12">
                <h1 className="display-4 font-semibold mb-6">Explain your product and its <span className="text-primary block">
                        <span className="inline-block" data-toggle="typed" data-options="{'loop':true,'strings':['best feature.', 'easy feature.']}">main benefit.</span>
                    </span>
                </h1>
                <p className="font-light mb-10 h5">Briefly explain how the solution works, what's unique about it and what results will your users get from using it.</p>
                <div className="flex flex-col md:flex-row justify-center gap-x-2 gap-y-3 mb-3">
                    <a className="btn btn-primary btn-lg" href="#">Start your 14 day free trial ➔</a>
                    <button className="btn btn-lg btn-ghost btn-primary" href="#" data-toggle="modal" data-options="{'iframeSrc':'https://www.youtube.com/embed/rYQJPhAqOHU','size':'xl'}">Watch a Demo</button>
                </div>
                <p className="block mb-4 text-sm text-muted">No credit card required.</p>
            </div>
        </div>
        <div className="row justify-center">
            <div className="col">
                <img src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/5a3dfa71-7c8f-4654-9bf6-16155f202418.png" alt="product" width="1200" height="684" />
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default Home;
