import React, { useState, useMemo } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const sortDirections = [null, 'asc', 'desc'];

const DataTable = ({ columns, data, title = 'Data Table' }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [filters, setFilters] = useState({});
    const [globalSearch, setGlobalSearch] = useState('');

    const sortedData = useMemo(() => {
        let filtered = [...data];
        if (globalSearch) {
            filtered = filtered.filter(row =>
                columns.some(col =>
                    String(row[col.accessor] || '')
                        .toLowerCase()
                        .includes(globalSearch.toLowerCase())
                )
            );
        }
        Object.entries(filters).forEach(([key, value]) => {
            if (value) {
                filtered = filtered.filter(row =>
                    String(row[key] || '').toLowerCase().includes(value.toLowerCase())
                );
            }
        });
        if (sortConfig.key && sortConfig.direction) {
            filtered.sort((a, b) => {
                const aVal = a[sortConfig.key];
                const bVal = b[sortConfig.key];
                if (aVal === bVal) return 0;
                if (sortConfig.direction === 'asc') {
                    return aVal > bVal ? 1 : -1;
                } else {
                    return aVal < bVal ? 1 : -1;
                }
            });
        }
        return filtered;
    }, [data, columns, sortConfig, filters, globalSearch]);

    const handleSort = accessor => {
        setSortConfig(prev => {
            if (prev.key !== accessor) return { key: accessor, direction: 'asc' };
            const idx = sortDirections.indexOf(prev.direction);
            const nextDir = sortDirections[(idx + 1) % sortDirections.length];
            return { key: accessor, direction: nextDir };
        });
    };

    const handleExportExcel = () => {
        const ws = XLSX.utils.json_to_sheet(sortedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, `${title.replace(/\s+/g, '_')}.xlsx`);
    };

    const handleExportPDF = () => {
        const doc = new jsPDF();
        doc.text(title, 14, 10);
        doc.autoTable({
            head: [columns.map(col => col.Header)],
            body: sortedData.map(row => columns.map(col => row[col.accessor])),
            startY: 20,
        });
        doc.save(`${title.replace(/\s+/g, '_')}.pdf`);
    };

    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
                <button onClick={handleExportExcel} className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded">Export Excel</button>
                <button onClick={handleExportPDF} className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded">Export PDF</button>
                <input
                    type="text"
                    placeholder="Search..."
                    value={globalSearch}
                    onChange={e => setGlobalSearch(e.target.value)}
                    className="flex-1 ml-4 px-3 py-2 rounded border border-gray-300 bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-purple-700 text-white">
                            {columns.map(col => (
                                <th
                                    key={col.accessor}
                                    className={`py-3 px-4 font-semibold text-sm text-left cursor-pointer select-none ${col === columns[0] ? 'rounded-tl-lg' : ''} ${col === columns[columns.length - 1] ? 'rounded-tr-lg' : ''}`}
                                    onClick={() => handleSort(col.accessor)}
                                >
                                    {col.Header}
                                    <span className="ml-1 text-xs">
                                        {sortConfig.key === col.accessor
                                            ? sortConfig.direction === 'asc'
                                                ? '↑'
                                                : sortConfig.direction === 'desc'
                                                    ? '↓'
                                                    : '↕'
                                            : '↕'}
                                    </span>
                                </th>
                            ))}
                        </tr>
                        <tr className="bg-purple-100">
                            {columns.map(col => (
                                <th key={col.accessor} className="py-2 px-2">
                                    <input
                                        type="text"
                                        placeholder="Filter"
                                        value={filters[col.accessor] || ''}
                                        onChange={e => setFilters(f => ({ ...f, [col.accessor]: e.target.value }))}
                                        className="w-11/12 px-2 py-2 rounded border border-gray-300 bg-gray-50 text-xs focus:outline-none"
                                    />
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-8 text-gray-400 bg-white">No Data</td>
                            </tr>
                        ) : (
                            sortedData.map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
                                    {columns.map(col => (
                                        <td key={col.accessor} className="py-2 px-4 text-sm text-gray-700 border-b border-purple-100">{row[col.accessor]}</td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
