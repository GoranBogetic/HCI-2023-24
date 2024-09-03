import Image from "next/image";

export default function Custom404() {
  return (
    <div className='notFound flex min-h-screen flex-col items-center justify-between min-h-0'>
      <h1>Page Not Found</h1>
      <Image alt='Not found' src={"/404.jpg"} width={1000} height={0} />
      <p>
        Uh, we can't seem to find the page you're looking for. Try going back to
        the previous page
      </p>
    </div>
  );
}
