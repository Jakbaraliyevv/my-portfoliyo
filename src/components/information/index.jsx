import React, { useState, useEffect } from "react";
import { useAxios } from "../../hooks";

const StudentTable = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [data, setData] = useState({
    results: [],
    count: 0,
    next: null,
    previous: null,
  });

  console.log(data?.results, "xsxsxsxsx");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const axios = useAxios();

  const toggleStudent = (id, e) => {
    e.stopPropagation();
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchStudents = (page = 1) => {
    setLoading(true);
    axios({
      url: `/protected/?page=${page}`,
      method: "GET",
    })
      .then((data) => {
        console.log(data, "data");
        console.log(data?.results, "resulats");
        setData({
          results: data?.results,
          count: data?.count,
          next: data?.next,
          previous: data?.previous,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (data.next) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (data.previous) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[90%] m-auto my-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Foyadalanuvchilar Ro'yxati
      </h1>

      {loading ? (
        <div className="text-center py-10">Yuklanmoqda...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">№</th>
                  <th className="p-3 text-left">Ism</th>
                  <th className="p-3 text-left">Familiya</th>
                  <th className="p-3 text-left">Viloyati</th>
                  <th className="p-3 w-10 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {data?.results?.map((student, index) => (
                  <tr
                    key={student?.id}
                    className="hover:bg-gray-50 cursor-pointer border-t"
                    onClick={() => openModal(student)}
                  >
                    <td className="p-3">
                      {(currentPage - 1) * 100 + index + 1}
                    </td>
                    <td className="p-3 font-medium">{student?.name}</td>
                    <td className="p-3">{student?.surename}</td>
                    <td className="p-3">{student?.province}</td>
                    <td
                      className="p-3 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student?.id)}
                        onChange={(e) => toggleStudent(student?.id, e)}
                        className="h-4 w-4 accent-blue-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile List */}
          <div className="md:hidden space-y-2">
            {data?.results?.map((student, index) => (
              <div
                key={student?.id}
                className="bg-white p-3 rounded-lg border flex items-center gap-3"
                onClick={() => openModal(student)}
              >
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(student?.id)}
                  onChange={(e) => toggleStudent(student?.id, e)}
                  onClick={(e) => e.stopPropagation()}
                  className="h-4 w-4 flex-none accent-blue-500"
                />
                <div className="flex-1">
                  <div className="font-medium">
                    #{(currentPage - 1) * 100 + index + 1} {student?.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {student?.lastName} • {student?.surename}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevPage}
              disabled={!data?.previous}
              className={`px-4 py-2 rounded ${
                data?.previous
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Oldingi
            </button>
            <span>
              Sahifa {currentPage} (Jami: {Math.ceil(data.count / 100)})
            </span>
            <button
              onClick={handleNextPage}
              disabled={!data?.next}
              className={`px-4 py-2 rounded ${
                data?.next
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Keyingi
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Foydalanuvchi ma'lumotlari</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {selectedStudent && (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">ID</span>
                  <span className="font-medium">{selectedStudent.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ism</span>
                  <span className="font-medium">{selectedStudent.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Familiya</span>
                  <span className="font-medium">
                    {selectedStudent.surename}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Jinsi</span>
                  <span className="font-medium">
                    {selectedStudent.gender === "female" ? "Ayol" : "Erkak"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tug'ilgan yili</span>
                  <span className="font-medium">{selectedStudent.b_day}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Telefon</span>
                  <span className="font-medium">
                    {selectedStudent.phone_number}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Viloyat</span>
                  <span className="font-medium">
                    {selectedStudent.province}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Tuman</span>
                  <span className="font-medium">
                    {selectedStudent.district}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">O'quv joyi</span>
                  <span className="font-medium">
                    {selectedStudent.place_of_study}
                  </span>
                </div>
                {selectedStudent.file && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fayl</span>
                    <a
                      href={selectedStudent.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Yuklab olish
                    </a>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Qo'shimcha</span>
                  <span className="font-medium">{selectedStudent.about}</span>
                </div>
              </div>
            )}

            <button
              onClick={closeModal}
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
