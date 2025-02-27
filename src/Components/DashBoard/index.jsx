import { useState } from "react";
import Sidebar from "../UI/SideBar/SideBar";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import InfoBox from "../UI/InfoBox/InfoBox";
import userImg from "../../assets/images/user.png";
import documentImg from "../../assets/images/document.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const DashBoard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "María Soto", email: "maria@datum.cl", role: "Gerente" },
    {
      id: 2,
      name: "Carlos Sánchez",
      email: "carlos@datum.cl",
      role: "Ingeniero",
    },
    {
      id: 3,
      name: "Roberto Velázquez",
      email: "roberto@datum.cl",
      role: "Técnico",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) return;
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", email: "", role: "" });
  };

  return (
    <div className="flex min-h-screen bg-[#E2E2E2] text-[#3a3a3a] font-[roboto] relative">
      <div className="min-h-screen fixed">
        <Sidebar />
      </div>

      <main className="flex-1 pl-40 pr-20 py-20">
        <div className="font-bebas text-5xl font-bold text-[#363636] tracking-wide mb-10">
          ¡Bienvenido Admin!
        </div>
        <div className="flex">
          <InfoBox width="w-1/2">
            <div className="flex pl-10 items-center">
              <img
                className="h-[200px] rounded-full"
                src={userImg}
                alt="User"
              />
              <div className="pl-20 text-2xl font-bold text-[#363636]">
                <div className="border-b border-gray-400 pb-1">
                  Pedro Pérez Pereira
                </div>
                <div className="flex items-center mt-4">
                  <FaPhone className="text-gray-600 mr-2" />
                  <span className="text-lg font-normal">+56 9 1234 5678</span>
                </div>
                <div className="flex items-center mt-2">
                  <FaEnvelope className="text-gray-600 mr-2" />
                  <span className="text-lg font-normal">pedro@datum.cl</span>
                </div>
                <div className="flex items-center mt-2">
                  <MdOutlineWork className="text-gray-600 mr-2" />
                  <span className="text-lg font-normal">Gerente</span>
                </div>
              </div>
            </div>
          </InfoBox>
          <InfoBox width="w-1/3">
            <div className="flex pl-10 items-center">
              <img className="h-[200px]" src={documentImg} />
              <div className="pl-20 text-2xl font-bold text-[#363636]">
                <div className="">Ver documentos</div>
              </div>
            </div>
          </InfoBox>
        </div>

        <h1 className="text-3xl font-bold my-8">Lista de Usuarios</h1>
        <div className="flex items-center space-x-4">
          <Button
            label="Añadir usuario"
            variant="secondary"
            onClick={() => setShowModal(true)}
          />
        </div>

        <table className="w-full bg-white shadow-md rounded-lg mt-4">
          <thead className="bg-[#363636] text-white">
            <tr className="text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Correo Electrónico</th>
              <th className="p-3">Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } transition-colors`}
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 flex items-center">
                  <MdOutlineWork className="text-gray-600 mr-2" />
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/80"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <InfoBox width="w-full" className="!p-0">
                <h2 className="text-xl font-bold mb-4">Agregar Usuario</h2>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={newUser.name}
                  onChange={handleInputChange}
                  className="w-full mb-2"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={newUser.email}
                  onChange={handleInputChange}
                  className="w-full mb-2"
                />
                <Input
                  type="text"
                  name="role"
                  placeholder="Rol"
                  value={newUser.role}
                  onChange={handleInputChange}
                  className="w-full mb-4"
                />
                <div className="flex justify-between">
                  <Button
                    label="Cancelar"
                    onClick={() => setShowModal(false)}
                    variant="danger"
                  />
                  <Button label="Agregar" onClick={handleAddUser} />
                </div>
              </InfoBox>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

DashBoard.displayName = "DashBoard";

export default DashBoard;
