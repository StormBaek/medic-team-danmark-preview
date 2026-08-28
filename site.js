(() => {
  const form = document.querySelector("[data-contact-form]");
  if (!(form instanceof HTMLFormElement)) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const note = String(data.get("message") ?? "").trim();
    const status = form.querySelector("[data-form-status]");

    const subject = encodeURIComponent(`Henvendelse fra ${name}`);
    const body = encodeURIComponent(
      `Navn: ${name}\nE-mail: ${email}\nTelefon: ${phone || "Ikke oplyst"}\n\n${note}`,
    );

    if (status) {
      status.textContent = "Tak – dit mailprogram åbner nu med din henvendelse klar til afsendelse.";
    }

    window.location.href = `mailto:kontakt@medicteamdanmark.dk?subject=${subject}&body=${body}`;
  });
})();
