import resume from "../resume/resume.pdf";

function NavBar() {
  // const handleDownload = () => {
  //   const resumeUrl = "../resume/resume.pdf"; // Replace with the actual URL or file path of the resume
  //   const link = document.createElement("a");
  //   link.href = resumeUrl;
  //   link.download = "resume.pdf"; // Replace with the desired file name and extension
  //   link.click();
  // };
  return (
    <div className="bg-header h-20 flex justify-between p-10 items-center w-full fixed">
      <h1 className="text-4xl font-sans font-semibold text-zinc-200">
        DevIt<span className="text-light">Luis.</span>
      </h1>
      <div className="bg-button w-fit p-2 z-10 transition-all cursor-pointer text-white hover:bg-white hover:text-button ">
        <a href={resume} download="Luis Camus Resume">
          Work With Me
        </a>
      </div>
    </div>
  );
}

export default NavBar;
