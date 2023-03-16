import { Form } from "@remix-run/react";

export default function Index() {
  return (
   <>
    <section id="search">
     <div className="font-sans text-black text-xs sm:text-base mt-10 bg-white flex items-center justify-center">
      <div className="border w-full sm:w-1/2 max-w-md">
       <Form method="post" action="/">
        <input type="text" name="search" className="sm:px-4 py-2 w-full" placeholder="Paste url here..." autoFocus />
       </Form>
      </div>
     </div>
    </section>
    <section id="pages" className="mt-20">
     <div className="container mx-auto max-w-6xl text-black text-xs sm:text-base">
      <div className="flex flex-wrap items-start justify-center">
       <div className="border w-80 sm:mx-2 mb-5">
        <a href="#" title="#">
         <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
         <div className="py-5 sm:px-2">
          <p className="hover:underline">Page title</p>
         </div>
        </a>
       </div>
       <div className="border w-80 sm:mx-2 mb-5">
        <a href="#" title="#">
         <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
         <div className="py-5 sm:px-2">
          <p className="hover:underline">Page title, page title, page title, page title, page title</p>
         </div>
        </a>
       </div>
       <div className="border w-80 sm:mx-2 mb-5">
        <a href="#" title="#">
         <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
         <div className="py-5 sm:px-2">
          <p className="hover:underline">Page title</p>
         </div>
        </a>
       </div>
       <div className="border w-80 sm:mx-2 mb-5">
        <a href="#" title="#">
         <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
         <div className="py-5 sm:px-2">
          <p className="hover:underline">Page title</p>
         </div>
        </a>
       </div>
       <div className="border w-80 sm:mx-2 mb-5">
        <a href="#" title="#">
         <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
         <div className="py-5 sm:px-2">
          <p className="hover:underline">Page title</p>
         </div>
        </a>
       </div>
       <div className="border w-80 sm:mx-2 mb-5">
        <a href="#" title="#">
         <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
         <div className="py-5 sm:px-2">
          <p className="hover:underline">Page title</p>
         </div>
        </a>
       </div>
       <div className="border w-80 sm:mx-2 mb-5">
        <a href="#" title="#">
         <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80" />
         <div className="py-5 sm:px-2">
          <p className="hover:underline">Page title</p>
         </div>
        </a>
       </div>
      </div>
     </div>
    </section>
   </>
  );
}
