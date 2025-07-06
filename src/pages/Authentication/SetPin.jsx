import React from 'react'
import { Link } from 'react-router-dom';

function SetPin() {
    return (
        <div class="flex flex-1 justify-center py-5 bg-white">
            <div class="layout-content-container flex flex-col w-[512px] py-5 flex-1">
                <div className="mb-6 px-4">
                    <nav className="text-sm text-gray-500">
                        <Link to="/dashboard" className="hover:underline">Home</Link>
                        <span className="mx-1">&gt;</span>
                        <span className="text-gray-700">Set MPIN</span>
                    </nav>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2">Set MPIN</h2>
                </div>

                <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label class="flex flex-col min-w-40 flex-1">
                        <p class="text-[#0e141b] text-base font-medium leading-normal pb-2">New MPIN</p>
                        <input
                            placeholder="Enter new MPIN"
                            class="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            value=""
                        />
                    </label>
                </div>
                <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label class="flex flex-col min-w-40 flex-1">
                        <p class="text-[#0e141b] text-base font-medium leading-normal pb-2">Confirm New MPIN</p>
                        <input
                            placeholder="Confirm new MPIN"
                            class="w-full p-2 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            value=""
                        />
                    </label>
                </div>

                <div class="flex px-4 py-3 justify-start">
                    <button className="min-w-[100px] max-w-[480px] py-2 rounded bg-purple-700 text-white font-semibold">Set MPIN</button>
                </div>
            </div>
        </div>
    )
}

export default SetPin