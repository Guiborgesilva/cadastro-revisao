// 'use server'

// import { sql } from "@vercel/postgres"
// import * as bcrypt from 'bcrypt'
// import { redirect } from "next/navigation"
// import AuthService from "../services/auth-service"

// // import { capitalizarNome } from "@/app/lib/utils"
// // import { sql } from "@vercel/postgres"
// // import { z } from "zod"
// // import { redirect } from "next/navigation"

// // const FormSchema = z.object({
// //   id: z.string(),
// //   nome: z.string()
// //     .min(1, 'Por favor digite seu nome!')
// //     .transform(capitalizarNome),
// //   email: z.string().email('Por favor, escreva um email válido'),
// //   senha: z.string().min(6, 'Sua senha precisa ter no mínimo 6 caracteres!'),
// //   craeted_at: z.string(),
// // })

// // const CreateInvoice = FormSchema.omit({ id:true, craeted_at:true })

// // // export type State = {
// // //   errors?: {
// // //     nome: string[]
// // //     email: string[]
// // //     senha: string[]
// // //   }
// // //   message?: string | null
// // // }

// // export async function createAccount(formData: FormData) {
// //   const validatedFields = CreateInvoice.safeParse({
// //     nome: formData.get('nome') as string,
// //     email: formData.get('email') as string,
// //     senha: formData.get('senha') as string
// //   })

// //   if(!validatedFields.success){
// //     return{
// //       errors: validatedFields.error.flatten().fieldErrors,
// //       message: 'Missing Fields, Failed to Create Invoice.'
// //     }
// //   }

// //   const { nome, email, senha } = validatedFields.data

// //   const hashSenha = await bcrypt.hash(senha, 10)

// //   try{
// //     await sql `
// //     INSERT INTO users (nome, email, senha)
// //     VALUES (${nome}, ${email}, ${hashSenha})
// //   `
// //   } catch (error){
// //     return{
// //       message: 'Database Error: Failed to Create Invoice!'
// //     }
// //   }

// //   // revalidatePath('/dashboard/invoices')
// //   redirect('/login')
// // }

// // const AuthActions = {
// //   createAccount,
// // }

// // export default AuthActions


// export async function Login(formData: FormData) {

//   const email = formData.get('email') as string
//   const senha = formData.get('senha') as string

//   try{
//     const isMatch = await bcrypt.compare(senha, senha)
//     const user = await sql`
//     SELECT * FROM users WHERE email = ${email}, senha = ${isMatch}
//     `
    
//     if(!user) {
//       console.error('Ocorreu um erro ao efetuar o login!')
//       redirect('/login')
//     }
    
//     if(!isMatch) {
//       console.error('Usuário ou senha inválidos!')
//       redirect('/login')
//     }  
    
//     return user.rows[0]
//   } catch (error) {
//     console.error('Erro: ', error)
//   }
//   await AuthService.createSessionToken({ email: email, senha: senha })
//   redirect('/controle')
// }