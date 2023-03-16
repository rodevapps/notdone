type TAlert = {
  status: "error" | "danger" | "ok" | "success" | "warning" | "info" | "notice";
  message: string;
  type?: "input" | "form";
};

export const Alert = ({status, message, type = "input"}: TAlert) => {
  if (message != "") {
    let styles = "";

    console.log(type);

    if (type === 'input') {
      if (status === 'error' || status === 'danger') {
        styles = "text-red-900";
      } else if (status === 'ok' || status === 'success') {
        styles = "text-green-900";
      } else if (status === 'warning') {
        styles = "text-yellow-900";
      } else if (status === 'notice' || status === 'info') {
        styles = "text-blue-900";
      } else {
        console.err('Unknown status:' + status);
      }
    } else {
      styles = "px-4 pt-3 pb-4 mb-5 text-white ";

      if (status === 'error' || status === 'danger') {
        styles += "bg-red-900";
      } else if (status === 'ok' || status === 'success') {
        styles += "bg-green-900";
      } else if (status === 'warning') {
        styles += "bg-yellow-900";
      } else if (status === 'notice' || status === 'info') {
        styles += "bg-blue-900";
      } else {
        console.err('Unknown status:' + status);
      }
    }

    if (styles != "") {
      return (
      <div className={styles}>
        <span>{type === 'form' && <span style={{top: '3px', position: 'relative', fontSize: 'x-large'}}>&#10003; </span> }<small><strong>{message}</strong></small></span>
      </div>
      );
    }
  } else {
    console.err('Empty message!');
  }
};
