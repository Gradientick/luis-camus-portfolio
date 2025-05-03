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
    <div className="bg-header h-20 flex justify-between p-10 items-center w-full">
      <h1 className="text-4xl font-sans font-semibold text-zinc-200">
        DevIt<span className="text-light">Luis.</span>
      </h1>
      <div className="resume-button w-fit px-5 py-2 z-10 transition-all duration-200 ease-in-out cursor-pointer bg-[#2563EB] text-white rounded-md shadow-md hover:bg-white hover:text-header border border-[#2563EB]">
  <a href={resume} download="Luis Camus Resume">
    Work With Me
  </a>
</div>
    </div>
  );
}

export default NavBar;
