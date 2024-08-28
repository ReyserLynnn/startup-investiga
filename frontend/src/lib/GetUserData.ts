import { RecordModel } from 'pocketbase';

export async function getUserData(): Promise<RecordModel> {
  const response = await fetch('/api/user', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Error al obtener los datos del usuario');
  }

  return response.json() as Promise<RecordModel>;
}
