function generatepassword(
  length,
  includelowercase,
  includeuppercase,
  includenumbers,
  includesymbols
) {
  const lowerchars = "abcdefghijklmnopqrstuvwxyz";
  const uppperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberchars = "0123456789";
  const symbolschars = "!@#$%^&*_+";
  let allowedchars = "";
  let password = "";

  allowedchars += includelowercase ? lowerchars : "";
  allowedchars += includeuppercase ? uppperchars : "";
  allowedchars += includenumbers ? numberchars : "";
  allowedchars += includesymbols ? symbolschars : "";

  if (length <= 0) {
    return `(password length must be at least 1 )`;
  }
  if (allowedchars.length === 0) {
    return `(at least 1 set of character needs to be selected )`;
  }

  for (let i = 0; i < length; i++) {
    const randomindex = Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomindex];
  }
  return password;
}
function handlegeneratepassword() {
  const passwordlength = 12;
  const includelowercase = true;
  const includeuppercase = true;
  const includenumbers = true;
  const includesymbols = true;

  const password = generatepassword(
    passwordlength,
    includelowercase,
    includeuppercase,
    includenumbers,
    includesymbols
  );
  document.getElementById("result").textContent = `${password}`;
}
