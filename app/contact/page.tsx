

export default function page() {
  return (
    <div className="bg-black fixed inset-0 h-screen flex items-center px-16 cursor-auto">
        <div className="text-white font-mono">
            <h1 className="text-[11rem]">Hello.</h1>

            <p className="py-4">Please contact me directly for discussing your future project.</p>
            <p>Email: hello@john-mohn.com</p>
            <p className="flex gap-4 cursor-pointer mt-2">On the web: <a href="https://linkedin.com" className=" border-b-2">Linkedin</a><a href="https://instagram.com" className="border-b-2">Twitter</a><a href="https://youtube.com" className="border-b-2">Youtube</a></p>
        </div>
    </div>
  )
}
