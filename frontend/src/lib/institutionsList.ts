import pb from './pocketbase';

export async function fetchInstitutions() {
  try {
    const institutions = await pb.getInstitutions();

    return institutions.map((institution) => ({
      id: institution.id,
      name: institution.name,
      author: 'Perú',
    }));
  } catch (error) {
    console.error('Error al obtener las instituciones', error);
    return [];
  }
}
