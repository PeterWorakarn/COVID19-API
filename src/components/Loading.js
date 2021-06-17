import React from 'react';
import classes from './Loading.module.css'

export default function Loading() {
    return (
        <section className="max-w-xl flex justify-center items-center mx-auto min-h-screen">
            <div className={`${classes.loader} ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64`}></div>
        </section>
    )
}