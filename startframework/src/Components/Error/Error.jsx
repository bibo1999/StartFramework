import error from "../../assets/Images/error404.jpg";
export default function Error() {
  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center">
      <img src={error} alt="error 404" className="w-50 mt-4" />
    </section>
  );
}
