import React from 'react';
import coverHospital from '../asset/img/coverHospital.svg';

export default function Banner({global}) {
    return (
        <section className="text-gray-600 body-font bg-white rounded shadow-md onBoard-2">
        <div className="container mb-5 mx-auto flex flex-wrap">
            <div className=" w-full rounded-t overflow-hidden sm:mt-0">
                <img className="object-cover object-center w-full h-full" src={coverHospital} alt="stats" />
            </div>
            <div className="flex flex-wrap mx-auto mt-auto mb-auto  content-center ">
            <div className="w-full sm:pb-0 p-4 ">
                <h2 className="title-font font-medium text-2xl text-gray-900 uppercase">COVID-19 Global Situation</h2>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                <h3 className="title-font font-medium text-3xl text-gray-900">{(global.TotalConfirmed).toLocaleString()}</h3>
                <p className="leading-relaxed">Total Confirmed</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                <h3 className="title-font font-medium text-3xl text-gray-900">{(global.TotalDeaths).toLocaleString()}</h3>
                <p className="leading-relaxed">Total Deaths</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                <h3 className="title-font font-medium text-3xl text-gray-900">{(global.TotalRecovered).toLocaleString()}</h3>
                <p className="leading-relaxed">Total Recovered</p>
            </div>
            </div>
            
        </div>
        </section>
    )
}