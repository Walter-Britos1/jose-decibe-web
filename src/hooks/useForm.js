import { useState } from 'react';

export const useForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.message) throw new Error('Todos los campos son obligatorios');
    
    const numWhatsapp = '542342462874';
    const message = `Hola, mi nombre es ${form.name}. Teléfono: ${form.phone}. Mensaje: ${form.message}`;
    const url = `https://wa.me/${numWhatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');

    // Limpiar el formulario
    setForm({
      name: '',
      phone: '',
      message: '',
    });
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
}