import { useAlertStore } from '@/src/libs/zustand';

export const requestApi = async (url: string, options: RequestInit) => {
  const { setAlertContent } = useAlertStore.getState();

  const response = await fetch(url, options);
  if (!response.ok) {
    const errorResponse = await response.json();
    setAlertContent({
      message: errorResponse.message || 'Something went wrong',
      code: errorResponse.code,
      type: 'error',
    });
    return null;
  }

  return await response.json();
};

export const getRequest = async (url: string) => {
  const response = await requestApi(url, {
    method: 'GET',
  });
  return response;
};

export const postRequest = async (
  url: string,
  data: Record<string, FormDataEntryValue | null>
) => {
  const response = await requestApi(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const putRequest = async (
  url: string,
  data: Record<string, string | number | Date | boolean | null | undefined>
) => {
  const response = await requestApi(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteRequest = async (url: string) => {
  const response = await requestApi(url, {
    method: 'DELETE',
  });
  return response;
};
