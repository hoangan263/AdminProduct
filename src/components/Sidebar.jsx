
import SearchForm from './SearchForm';
import ResultsTable from './ResultsTable';
import { Settings, FileText, Database, FileSpreadsheet, BookOpen, FileEdit } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className='flex'>
            <div className="w-[10%]  bg-white h-screen border-r">
                <div className="p-2 fixed">
                    <div className="space-y-2">
                        <div className="flex flex-col items-center p-2 hover:bg-gray-100 cursor-pointer">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <Settings className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm mt-1">Hệ thống</span>
                        </div>

                        <div className="flex flex-col items-center p-2 hover:bg-gray-100 cursor-pointer">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm mt-1">Danh mục</span>
                        </div>

                        <div className="flex flex-col items-center p-2 hover:bg-gray-100 cursor-pointer">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <Database className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm mt-1 text-center">Xử lý chứng từ</span>
                        </div>

                        <div className="flex flex-col items-center p-2 hover:bg-gray-100 cursor-pointer">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <FileSpreadsheet className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm mt-1 text-center">Hải quan điện tử</span>
                        </div>

                        <div className="flex flex-col items-center p-2 hover:bg-gray-100 cursor-pointer">
                            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm mt-1">Thuế điện tử</span>
                        </div>

                        <div className="flex flex-col items-center p-2 hover:bg-gray-100 cursor-pointer">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm mt-1 text-center">Tra soát với KBNN</span>
                        </div>

                        <div className="flex flex-col items-center p-2 hover:bg-gray-100 cursor-pointer">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                <FileEdit className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm mt-1 text-center">Xử lý cuối ngày</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] gap-3'>
                <SearchForm />
                <ResultsTable />
            </div>
        </div>
    );
}