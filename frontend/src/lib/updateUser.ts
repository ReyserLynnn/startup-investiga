import { UpdateDataFormUser } from '@/types/pb';
import { RecordModel } from 'pocketbase';
import pb from './pocketbase';

export async function updateDataUser(formData: UpdateDataFormUser) {
  const response = await fetch('/api/user');
  const user = (await response.json()) as RecordModel;

  const updateData = new FormData();

  for (const [key, value] of Object.entries(formData)) {
    if (value != null) {
      updateData.append(key, value);
    }
  }

  updateData.append('id', user.id);

  await pb.client.collection('users').update(user.id, updateData);
}
