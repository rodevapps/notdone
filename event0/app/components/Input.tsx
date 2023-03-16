import { useField } from "remix-validated-form";

import { Alert } from "./Alert";

type TInput = {
  id: string,
  name: string,
  type: "text" | "password" | "email" | "button",
  value?: string,
  className?: string,
  normal?: string,
  error?: string,
  success?: string,
  placeholder?: string
}

export const Input = (props: TInput) => {
  const { error, getInputProps, touched } = useField(props.name);

  let styles = props.className;

  if (error) {
    styles += (props.error ? " " + props.error : "");
  } else {
    if (touched) {
      styles += (props.success ? " " + props.success : "");
    } else {
      styles += (props.normal ? " " + props.normal : "");
    }
  }

  if (props.type == "text" || props.type == "password" || props.type == "email") {
    return (
      <div className="relative mb-5">
        <input {...getInputProps(props)} className={styles} />
        {error ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7F1D1D" className="w-6 h-6 absolute right-3 -mt-[2.45rem]">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>

            <Alert status="error" message={error} />
          </>
        ) : (
          touched && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6 absolute right-3 -mt-[2.45rem]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          )
        )}
      </div>
    );
  } else {
    return (
      <div className="relative mb-5">
        <input {...getInputProps(props)} className={styles} />
      </div>
    );
  }
};
