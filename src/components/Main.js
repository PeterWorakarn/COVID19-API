import React, { useState } from 'react';
import {MdSearch, MdUnfoldMore} from 'react-icons/md';
import { IconContext } from "react-icons";

export default function Main({ countries }) {
    const [sortConfig, setSortConfig] = useState({ key: 'TotalConfirmed', direction: 'descending' })
    const [searchTerm, setSearchTerm] = useState("");

    let sortedDataCountries = [...countries];
    if (sortConfig !== null) {
        sortedDataCountries.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }



    return (

        <section>
            <div className="shadow rounded flex onBoard-5">
                <input inputMode="search" type="text" name="searchTerm" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className="w-full rounded p-2 pl-4 focus:outline-none" placeholder="Search..." />
                    <button className="rounded bg-white w-auto flex justify-end items-center text-brand p-2 hover:text-brand">
                        <MdSearch />
                    </button>
                </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead className="onBoard-3 onBoard-4">
                                    <tr>
                                        <th onClick={() => requestSort('Country')} scope="col" className="cursor-pointer title-font font-medium px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                            Country <IconContext.Provider value={{ className: "inline" }}><MdUnfoldMore /></IconContext.Provider></th>
                                        <th onClick={() => requestSort('TotalConfirmed')} scope="col" className="cursor-pointer title-font font-medium px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-right text-sm uppercase">
                                            Confirmed <IconContext.Provider value={{ className: "inline" }}><MdUnfoldMore /></IconContext.Provider></th>
                                        <th onClick={() => requestSort('TotalDeaths')} scope="col" className="cursor-pointer title-font font-medium px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-right text-sm uppercase">
                                            Deaths <IconContext.Provider value={{ className: "inline" }}><MdUnfoldMore /></IconContext.Provider></th>
                                        <th onClick={() => requestSort('TotalRecovered')} scope="col" className="cursor-pointer title-font font-medium px-3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-right text-sm uppercase">
                                            Recovered <IconContext.Provider value={{ className: "inline" }}><MdUnfoldMore /></IconContext.Provider></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedDataCountries.filter((value) => {
                                        if (searchTerm === "") {
                                            return value
                                        } else if (value.Country.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return value
                                        }
                                        return null
                                    }).map((country) => {
                                        return (
                                            <tr key={country.ID}>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white whitespace-nowrap">
                                                    <p className="text-sm leading-relaxed text-gray-900 ">{country.Country}</p>
                                                    <p className="text-sm leading-relaxed text-gray-500 ">{country.CountryCode}</p>
                                                </td>
                                                <td className="text-right px-5 py-2 border-b border-gray-200 bg-white">
                                                    <p className="text-sm leading-relaxed text-gray-900 whitespace-no-wrap">{country.TotalConfirmed === 0 ? "unreported" : country.TotalConfirmed.toLocaleString()}</p>
                                                </td>
                                                <td className="text-right px-5 py-2 border-b border-gray-200 bg-white">
                                                    <p className="text-sm leading-relaxed text-gray-900 whitespace-no-wrap">{country.TotalDeaths === 0 ? "unreported" : country.TotalDeaths.toLocaleString()}</p>
                                                </td>
                                                <td className="text-right px-5 py-2 border-b border-gray-200 bg-white">
                                                    <p className="text-sm leading-relaxed text-gray-900 whitespace-no-wrap">{country.TotalRecovered === 0 ? "unreported" : country.TotalRecovered.toLocaleString()}</p>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </section>

    )
}