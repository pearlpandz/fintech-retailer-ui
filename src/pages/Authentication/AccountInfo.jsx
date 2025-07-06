import React from 'react';

const cardStyles = [
    'border-l-4 rounded-lg bg-gray-50 p-8 mb-6 shadow-sm',
    'border-purple-500',
    'border-red-500',
    'border-green-500',
];

const AccountInfo = () => {
    return (
        <div className="min-h-screen bg-white px-8 py-10">
            <div className="mb-6">
                <nav className="text-sm text-gray-500">
                    <Link to="/dashboard" className="hover:underline">Home</Link>
                    <span className="mx-1">&gt;</span>
                    <span className="text-gray-700">Account Information</span>
                </nav>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">Account Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Agent Details */}
                <div className={`${cardStyles[0]} ${cardStyles[1]}`}>
                    <h3 className="text-xl font-semibold mb-4">Agent Details</h3>
                    <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-base">
                        <div>
                            <div className="font-medium">Agent ID</div>
                            <div>AG123456</div>
                        </div>
                        <div>
                            <div className="font-medium">Agent Name</div>
                            <div>KOTI</div>
                        </div>
                        <div>
                            <div className="font-medium">Agent Login ID</div>
                            <div>8756XXXXX</div>
                        </div>
                        <div>
                            <div className="font-medium">Agent Mobile No.</div>
                            <div>8756XXXXX</div>
                        </div>
                        <div>
                            <div className="font-medium">Agent Email</div>
                            <div>VIJXXXX@XXX.com</div>
                        </div>
                        <div>
                            <div className="font-medium">Agent Address</div>
                            <div>49 XXXXX, QutXXXXX</div>
                        </div>
                        <div>
                            <div className="font-medium">State</div>
                            <div>TELANGANA</div>
                        </div>
                        <div>
                            <div className="font-medium">City</div>
                            <div>K.V.R</div>
                        </div>
                        <div>
                            <div className="font-medium">District</div>
                            <div>RANGAREDDY</div>
                        </div>
                        <div>
                            <div className="font-medium">Pin Code</div>
                            <div>50000X</div>
                        </div>
                    </div>
                </div>
                {/* Distributor Info */}
                <div className={`${cardStyles[0]} border-purple-400`}>
                    <h3 className="text-xl font-semibold mb-4">Distributor Info</h3>
                    <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-base">
                        <div>
                            <div className="font-medium">Distributor ID</div>
                            <div>DSUPXXXX</div>
                        </div>
                        <div>
                            <div className="font-medium">Distributor Name</div>
                            <div>KOTI</div>
                        </div>
                        <div className="col-span-2">
                            <div className="font-medium">Distributor Mobile No.</div>
                            <div>8756XXXXX</div>
                        </div>
                    </div>
                </div>
                {/* MDS Info */}
                <div className={`${cardStyles[0]} border-red-500`}>
                    <h3 className="text-xl font-semibold mb-4">MDS Info</h3>
                    <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-base">
                        <div>
                            <div className="font-medium">MDS ID</div>
                            <div>null</div>
                        </div>
                        <div>
                            <div className="font-medium">MDS Name</div>
                            <div>null</div>
                        </div>
                        <div className="col-span-2">
                            <div className="font-medium">MDS Mobile No.</div>
                            <div>null</div>
                        </div>
                    </div>
                </div>
                {/* Service Info */}
                <div className={`${cardStyles[0]} border-green-500`}>
                    <h3 className="text-xl font-semibold mb-4">Service Info</h3>
                    <div className="grid grid-cols-1 gap-y-2 text-gray-700 text-base">
                        <div>
                            <div className="font-medium">Service By</div>
                            <div>HO</div>
                        </div>
                        <div>
                            <div className="font-medium">Salesperson Mobile No.</div>
                            <div>9885XXXXXX</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
