import { useState, useEffect } from "react";

const Message = ({ message }) => {
  return (
    <div key={`message-${message.id}`} className="grid grid-cols-1 md:grid-cols-1 gap-2 bg-white p-4 mb-4 border-b-1 border-gray-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-white p-2 mb-2 border-gray-500">
        <h2 className="text-lg font-bold">De: {message.name}</h2>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Empresa:</span> {message.company || "N/A"}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Teléfono:</span> {message.phone || "N/A"}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Email:</span> {message.email || "N/A"}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Fecha:</span> {message.created_at || "N/A"}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-600 bg-[#F5F5F5] border-gray-500 rounded-md h-full p-4 text-justify">
          {message.message}
        </p>
      </div>
    </div>
  );
};


const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const csrfToken = localStorage.getItem('csrf_token');


      const response = await fetch("http://localhost:8000/api/v1/contact/messages/", {
        headers: {
          "X-CSRFToken": csrfToken,
        },
        credentials: 'include'
      });
      const data = await response.json();
      setMessages(data.results);
    };

    fetchMessages();
  }, []);


  const renderMessages = () => {
    return messages.map((message) => (
      <Message key={`message-${message.id}`} message={message} />
    ));
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-2xl font-bold">Messages</h1>

        <div>
          {renderMessages()}
        </div>
      </div>
    </div>
  );
};

export default Messages;