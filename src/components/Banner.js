import React from 'react';
import coverHospital from '../asset/img/coverHospital.svg';

export default function Banner({global}) {
    return (
        <section className="body-font bg-brand bg-gradient-to-r from-brand to-brand-light rounded shadow-md onBoard-2">
        <div className="container mb-5 mx-auto flex flex-wrap">
            <div className=" w-full rounded-t overflow-hidden sm:mt-0">
                <img className="object-cover object-center w-full h-full" src={coverHospital} alt="stats" />
            </div>
            <div className="flex flex-wrap mx-auto mt-auto mb-auto  content-center ">
            <div className="w-full sm:pb-0 p-4 ">
                <h2 className="title-font font-medium text-2xl text-white uppercase">COVID-19 Global Situation</h2>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                <h3 className="title-font font-medium text-3xl text-white">{(global.TotalConfirmed).toLocaleString()}</h3>
                <p className="text-red-100 leading-relaxed">Total Confirmed</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                <h3 className="title-font font-medium text-3xl text-white">{(global.TotalDeaths).toLocaleString()}</h3>
                <p className="text-red-100 leading-relaxed">Total Deaths</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
                <h3 className="title-font font-medium text-3xl text-white">{(global.TotalRecovered).toLocaleString()}</h3>
                <p className="text-red-100 leading-relaxed">Total Recovered</p>
            </div>
            </div>
            
        </div>
        </section>
    )
}