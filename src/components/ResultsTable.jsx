import React from 'react';
import { Eye } from 'lucide-react';

export default function ResultsTable() {
  const data = Array(10).fill({
    status_kb: 'Chưa gửi',
    status_ts: 'Chưa duyệt',
    data_ts: 'Tự do',
    so_ts: '243211997T0000561',
    ngay_ts: '24/07/2024',
    loai_ts: 'Hồi',
    ma_nv: 'user3',
    chi_nhanh: 'TRUNG TAM KINH DOANH',
    noi_nhan: 'SỞ GD - KBNN'
  });

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <h3 className="text-lg font-medium mb-4">Kết quả tìm kiếm</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-8 p-3 text-left border-b border-gray-200">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="p-3 text-left border-b border-gray-200">Trạng thái gửi KB</th>
                <th className="p-3 text-left border-b border-gray-200">Trạng thái TS</th>
                <th className="p-3 text-left border-b border-gray-200">Dữ liệu TS</th>
                <th className="p-3 text-left border-b border-gray-200">Số TS</th>
                <th className="p-3 text-left border-b border-gray-200">Ngày TS</th>
                <th className="p-3 text-left border-b border-gray-200">Loại TS</th>
                <th className="p-3 text-left border-b border-gray-200">Số CT</th>
                <th className="p-3 text-left border-b border-gray-200">Số tiền</th>
                <th className="p-3 text-left border-b border-gray-200">Mã NV</th>
                <th className="p-3 text-left border-b border-gray-200">Chi nhánh lập tra soát</th>
                <th className="p-3 text-left border-b border-gray-200">Nơi nhận TS</th>
                <th className="p-3 text-left border-b border-gray-200">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-gray-200">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="p-3 border-b border-gray-200">{row.status_kb}</td>
                  <td className="p-3 border-b border-gray-200">{row.status_ts}</td>
                  <td className="p-3 border-b border-gray-200">{row.data_ts}</td>
                  <td className="p-3 border-b border-gray-200">{row.so_ts}</td>
                  <td className="p-3 border-b border-gray-200">{row.ngay_ts}</td>
                  <td className="p-3 border-b border-gray-200">{row.loai_ts}</td>
                  <td className="p-3 border-b border-gray-200"></td>
                  <td className="p-3 border-b border-gray-200"></td>
                  <td className="p-3 border-b border-gray-200">{row.ma_nv}</td>
                  <td className="p-3 border-b border-gray-200">{row.chi_nhanh}</td>
                  <td className="p-3 border-b border-gray-200">{row.noi_nhan}</td>
                  <td className="p-3 border-b border-gray-200">
                    <button className="text-yellow-500">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="flex items-center space-x-2">
            <span>50 bản ghi</span>
            <div className="flex space-x-1">
              <button className="p-1 px-2 border rounded hover:bg-gray-50">&lt;</button>
              <button className="p-1 px-2 border rounded hover:bg-gray-50">1</button>
              <button className="p-1 px-2 border rounded bg-blue-50 text-blue-600">2</button>
              <button className="p-1 px-2 border rounded hover:bg-gray-50">3</button>
              <button className="p-1 px-2 border rounded hover:bg-gray-50">&gt;</button>
            </div>
          </div>
          <div className="flex items-center">
            <span>Mục hiển mỗi trang</span>
            <select className="ml-2 border rounded p-1">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}