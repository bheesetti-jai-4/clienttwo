
function Numbers() {
    const data = [
        { numbers: "1539+", patient: "Satisfied Patient" },
        { numbers: "899+", patient: "Families Trusts" },
        { numbers: "1599+", patient: "Emergency Help 24/7" },
        { numbers: "2559+", patient: "Globel" },
    ];

    return (
        <div className="">
            <div className="bg-red-500 flex flex-wrap gap-5 items-center justify-around p-10 
                            md:flex-nowrap md:justify-around">
                {data.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-auto text-center">
                        <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl">{item.numbers}</h1>
                        <p className="text-semibold uppercase text-sm md:text-base">{item.patient}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Numbers;
