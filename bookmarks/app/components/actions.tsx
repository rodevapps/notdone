import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const parseAction = async (request) => {
 switch (request.method) {
  case "POST": {
   const formData = await request.formData();
   const search = formData.get("search");

   console.log(`POST request catched => "${search}" !`);

   const res = await fetch(search);

   const html = await res.text();
   console.log(html);
  }
 }

 return redirect("/");
};
