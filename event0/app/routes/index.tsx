import { z } from "zod";
import { useActionData } from "@remix-run/react";
import { DataFunctionArgs, json } from "@remix-run/node";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm, validationError } from "remix-validated-form";

import { Alert } from "~/components/Alert";
import { Input } from "~/components/Input";

export const validator = withZod(
  z.object({
    registrationName: z
      .string()
      .min(1, { message: "Name is required!" })
      .min(2, { message: "Name is too short!" })
      .max(50, { message: "Name is too long!" }),
    registrationSurname: z
      .string()
      .min(1, { message: "Surname is required!" })
      .min(2, { message: "Surname is too short!" })
      .max(50, { message: "Surname is too long!" }),
    registrationEmail: z
      .string()
      .min(1, { message: "Email is required!" })
      .email("Email is invalid!"),
  })
);

export const action = async ({ request }: DataFunctionArgs) => {
  const data = await validator.validate(
    await request.formData()
  );

  //console.log(data);

  if (data.error) return validationError({status: 'error', message: data.error});

  return json({status: 'success', message: 'Data saved to database!', type: 'form'});
};

export default function Index() {
  const data = useActionData();

  console.log(data);

  return (
    <div className="container mx-auto">
      <nav></nav>
      <section id="registration" className="mt-10">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-center"><strong>Event registration form</strong></h1>
          {data && (<Alert status={data.status} message={data.message} type={data?.type} />)}
          <ValidatedForm validator={validator} method="post" name="registration-form" id="registration-form">
            <Input type="text" id="registration-name" name="registrationName" className="bg-gray-50 border text-sm w-full p-4" normal="border-gray-300 text-gray-900" error="border-red-900 text-red-900" success="border-green-900" placeholder="Name" />
            <Input type="text" id="registration-surname" name="registrationSurname" className="bg-gray-50 border text-sm w-full p-4" normal="border-gray-300 text-gray-900" error="border-red-900 text-red-900" success="border-green-900" placeholder="Surname" />
            <Input type="email" id="registration-email" name="registrationEmail" className="bg-gray-50 border text-sm w-full p-4" normal="border-gray-300 text-gray-900" error="border-red-900 text-red-900" success="border-green-900" placeholder="Email" />
            <Input type="submit" id="registration-submit" name="registrationSubmit" className="text-white bg-blue-500 hover:bg-blue-600 w-full p-4 cursor-pointer font-bold" value="Register" />
          </ValidatedForm>
        </div>
      </section>
      <section id="abstract-sent" className="mt-10">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-center"><strong>Event abstract sent form</strong></h1>
          <ValidatedForm method="post" name="abstract-sent-form" id="abstract-sent-form">
            <textarea id="abstract" name="abstract" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full mb-5 p-4 h-40" defaultValue="Type abstract here ..."></textarea>
            <input type="submit" id="abstract-sent-submit" className="text-white bg-blue-500 hover:bg-blue-600 w-full p-4 cursor-pointer font-bold" value="Sent" />
          </ValidatedForm>
        </div>
      </section>
      <section id="login" className="mt-10">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-center"><strong>Login form</strong></h1>
          <ValidatedForm method="post" name="login-form" id="login-form">
            <input type="email" id="login-email" name="login-email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full mb-5 p-4" placeholder="Email" />
            <input type="password" id="login-password" name="login-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full mb-5 p-4" placeholder="Password" />
            <input type="submit" id="login-submit" className="text-white bg-blue-500 hover:bg-blue-600 w-full p-4 cursor-pointer font-bold" value="Sing In" />
          </ValidatedForm>
        </div>
      </section>
      <section id="forgot-password" className="mt-10">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-center"><strong>Forgot password form</strong></h1>
          <ValidatedForm method="post" name="forgot-password-form" id="forgot-password-form">
            <input type="email" id="forgot-password-email" name="forgot-password-email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full mb-5 p-4" placeholder="Email" />
            <input type="submit" id="forgot-password-submit" className="text-white bg-blue-500 hover:bg-blue-600 w-full p-4 cursor-pointer font-bold" value="Sent" />
          </ValidatedForm>
        </div>
      </section>
      <section id="reset-password" className="my-10">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-center"><strong>Reset password form</strong></h1>
          <ValidatedForm method="post" name="reset-password-form" id="reset-password-form">
            <input type="text" id="reset-password0" name="reset-password0" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full mb-5 p-4" placeholder="Password" />
            <input type="text" id="reset-password1" name="reset-password1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full mb-5 p-4" placeholder="Confirm password" />
            <input type="submit" id="reset-password-submit" className="text-white bg-blue-500 hover:bg-blue-600 w-full p-4 cursor-pointer font-bold" value="Update" />
          </ValidatedForm>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
