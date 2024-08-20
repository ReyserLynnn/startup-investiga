export function POST() {
  /*
  const { email, password, username, phone } = req.body;
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string().min(3),
    phone: z.string().length(9),
  });

  const {success, data} = schema.safeParse({
    email,
    password,
    username,
    phone,
  });

  if (success) {
    guardarUsuario(data);
    return {status: 200, data: {message: 'Usuario creado con éxito'}};
  } else {
    return {status: 400, data: {message: 'Error al crear el usuario'}};
  */

  return Response.json({ message: 'Usuario creado con éxito' });
}
