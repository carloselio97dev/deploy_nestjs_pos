export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}



export function isValidPage(value: number) {
  if (value == null) {
    return false;
  }

  if (typeof value !== 'number' && isNaN(value)) {
    return false;
  }
  if (value <= 0) {
    return false;
  }

  if (!Number.isInteger(value)) {
    return false;
  }

  return true;
}

export function getImagePath(image: string) {
  const cloudinaryBaseUrl = 'https://res.cloudinary.com';
  if (image.startsWith(cloudinaryBaseUrl)) {
    return image;
  }
  else {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
      console.warn("No se encontró NEXT_PUBLIC_API_URL en las variables de entorno");
      return '/placeholder.jpg'; // Asegúrate que esta imagen exista en /public
    }

    return `${baseUrl}/img/${image}`;

  }
}

export const isAvaible = (inventory:number)=> inventory>0