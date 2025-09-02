const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-12">
      <h1 className="font-bold text-3xl mb-6">Contact Us Page</h1>
      <form className="flex flex-col space-y-4 w-72">
        <input
          type="text"
          className="w-full h-10 border border-solid border-black rounded-lg px-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-full h-10 border border-solid border-black rounded-lg px-2"
          placeholder="Message"
        />
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-xl hover:bg-yellow-500 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
