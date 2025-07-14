// Función para obtener el CSRF token
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// Configuración de la API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1/';

// Función para hacer llamadas a la API
export const apiCall = async (endpoint, options = { headers: {} }, isFormData = false) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const headersFormData = {
    'X-CSRFToken': getCookie('csrftoken'),
    ...options.headers,
  };

  const headersJson = {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken'),
      ...options.headers,
    },
  };

  console.log('getCookie', getCookie('csrftoken'));

  const defaultOptions = isFormData ? headersFormData : headersJson;

  try {
    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Funciones específicas para diferentes endpoints
export const api = {
  // Ejemplo para obtener datos
  get: (endpoint, options = {}) => apiCall(endpoint, {
    method: 'GET',
    ...options,
  }),

  // Ejemplo para enviar datos
  post: (endpoint, data, options = {}, isFormData = false) => apiCall(endpoint, {
    method: 'POST',
    body: isFormData ? data : JSON.stringify(data),
    ...options,
  }, isFormData),

  // Ejemplo para actualizar datos
  put: (endpoint, data, isFormData = false) => apiCall(endpoint, {
    method: 'PUT',
    body: isFormData ? data : JSON.stringify(data),
  }, isFormData),

  // Ejemplo para eliminar datos
  delete: (endpoint) => apiCall(endpoint, {
    method: 'DELETE',
  }),
};

export default api;
