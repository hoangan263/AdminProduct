import React from 'react';
import { ChevronDown, Search, RotateCw, Send, CheckSquare } from 'lucide-react';

export default function SearchForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium mb-6">Điều kiện tìm kiếm</h2>
      <div className="space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Ngày tra soát</label>
            <div className="flex items-center space-x-2">
              <input type="date" className="w-full border rounded p-2 text-sm" placeholder="Từ ngày" />
              <span>-</span>
              <input type="date" className="w-full border rounded p-2 text-sm" placeholder="Đến ngày" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Số tra soát</label>
            <div className="flex items-center space-x-2">
              <input type="text" className="w-full border rounded p-2 text-sm" placeholder="Từ" />
              <span>-</span>
              <input type="text" className="w-full border rounded p-2 text-sm" placeholder="Đến" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Mã NV/lọc tra soát</label>
            <div className="relative">
              <select className="w-full border rounded p-2 text-sm appearance-none">
                <option>Tất cả</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Nơi nhận tra soát</label>
            <div className="relative">
              <select className="w-full border rounded p-2 text-sm appearance-none">
                <option>Tất cả</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Trạng thái tra soát</label>
            <div className="relative">
              <select className="w-full border rounded p-2 text-sm appearance-none">
                <option>Tất cả</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Chiều tra soát</label>
            <div className="relative">
              <select className="w-full border rounded p-2 text-sm appearance-none">
                <option>Tất cả</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-6">
          <button className="flex items-center px-3 py-2 border rounded text-sm">
            <RotateCw className="w-4 h-4 mr-2" />
            Gởi lại
          </button>
          <button className="flex items-center px-3 py-2 border rounded text-sm">
            <Send className="w-4 h-4 mr-2" />
            Chuyển trả
          </button>
          <button className="flex items-center px-3 py-2 border rounded text-sm">
            <CheckSquare className="w-4 h-4 mr-2" />
            Duyệt
          </button>
          <button className="flex items-center px-3 py-2 bg-yellow-500 text-white rounded text-sm">
            <Search className="w-4 h-4 mr-2" />
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}