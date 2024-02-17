function Footer() {
  return (
    <div className="bg-black text-[12px] text-white flex flex-col justify-end items-center h-[15vh]">
      <div className="links m-5 mb-2 flex justify-center gap-3">
        <a href="#">Twitter</a>
        <a href="#">YouTube</a>
        <a href="#">Instagram</a>
      </div>
      <p className="px-10 dont-sm pb-3">
        © 2024 <strong>MooVerse.Inc</strong>
      </p>
    </div>
  );
}

export default Footer;
