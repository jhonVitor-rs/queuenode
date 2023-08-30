import Mail from '../lib/Mail';
import { UserProps } from './../types/user';

export default {
  key: 'RegistrationMail',
  async handle({ data }: {data: UserProps}) {
    const { name, email, password } = data;

    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com.br>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${name}, bem-vindo(a) ao sistema de filas da Rocketseat :D`
    })
  }
}