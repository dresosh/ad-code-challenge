export default function Modal(props: any) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5">
              <h3 className="text-3xl font-semibold">
                {props.data.breeds[0].name}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}
              >
                <span className="bg-transparent text-black text-3xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex items-start">
              <img src={props.data.url} className="h-60 w-60" />
              {props.data.breeds[0].description ? (
                <p className="mx-4 text-blueGray-500 text-lg leading-relaxed">
                  {props.data.breeds[0].description}
                </p>
              ) : (
                <p className="flex flex-col mx-4 text-blueGray-500 text-lg leading-relaxed">
                  <span>{props.data.breeds[0].temperament}</span>
                  <span>Weight: {props.data.breeds[0].weight.metric} kgs</span>
                  <span>
                    Height: {props.data.breeds[0].height.metric} cm at the
                    withers
                  </span>
                  <span>
                    Average life span: {props.data.breeds[0].life_span}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
