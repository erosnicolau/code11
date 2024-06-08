const UserActions = () => {
  return (
    <div className="flex flex-row items-center divide-x">
      <div className="flex flex-row items-center gap-6">
        <a
          href="#"
          className="flex size-10 items-center justify-center rounded-full bg-sky-600 hover:bg-sky-700"
        >
          <img
            src="src/assets/icons/plus.svg"
            alt="Create New"
            title="Create New"
            className="size-6"
          />
        </a>
        <button className="mr-6 flex h-10 items-center rounded-full border border-solid border-sky-600 px-6 font-medium text-sky-600 hover:border-sky-700 hover:bg-sky-100 hover:text-sky-700">
          <img
            src="src/assets/icons/iconDownload.svg"
            alt="Create New"
            title="Create New"
            className="me-2.5 size-4"
          />
          Generate Report
        </button>
      </div>
      <button>
        <img
          src="src/assets/icons/dotsHorisontal.svg"
          alt="More Options"
          title="More Options"
          className="ms-6 size-5 hover:brightness-50"
        />
      </button>
    </div>
  )
}

export default UserActions
