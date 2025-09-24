import Image from "next/image"

type Tag = {
    tag_image_url: string
    tag_text: string
}

type Course = {
    id: string
    course_name: string
    sub_title: string
    image_url: string
    sale_price: number
    regular_price: number
    createdAt: string
    tags: Tag[]
}

async function getCourses(): Promise<Course[]> {
    const res = await fetch("https://66fcfeedc3a184a84d18a7f4.mockapi.io/imperial/api/v1/courses", {
        cache: "no-store",
    })
    if (!res.ok) throw new Error("Failed to fetch courses")
    return res.json()
}

export default async function Page() {
    const courses = await getCourses()

    return (
        <main className="container mx-auto px-6 sm:px-10 lg:px-16 py-16   bg-gray-50">

            <br />
            <div className="flex justify-center items-center">
                <div className="grid w-[80%] gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-10 py-30">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className=" bg-white border rounded-lg px-6  overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col  "
                        >

                            <div className=" relative w-full h-48 bg-green-50">
                                <img
                                    src={(course.image_url)}
                                    alt={course.course_name}

                                    className="object-fill w-full p-6 h-48"
                                />

                                {course.regular_price > course.sale_price && (
                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                        {Math.round(
                                            ((course.regular_price - course.sale_price) / course.regular_price) * 100
                                        )}
                                        % OFF
                                    </span>
                                )}
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
                                    {course.course_name}
                                </h2>
                                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                                    {course.sub_title}
                                </p>

                                <div className="mt-4 flex items-center gap-2">
                                    <span className="text-lg font-bold text-gray-900">
                                        £{course.sale_price.toFixed(2)}
                                    </span>
                                    {course.regular_price > course.sale_price && (
                                        <span className="text-sm line-through text-gray-400">
                                            £{course.regular_price.toFixed(2)}
                                        </span>
                                    )}
                                </div>

                                <div className=" flex justify-between ">
                                    <div className="mt-4 flex flex-wrap gap-2 ">
                                        {course.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                                            >
                                                <img
                                                    src={encodeURI(tag.tag_image_url)}
                                                    alt={tag.tag_text}
                                                    width={14}
                                                    height={14}
                                                />
                                                {tag.tag_text}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="mt-auto  text-black text-sm font-medium py-2 px-4 ">
                                        View details &rarr;
                                    </button>
                                </div>



                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <br />

            <div className="flex justify-center gap-6  mt-50">
                <button className="px-6 py-2 border bg-black border-gray-300 rounded-lg text-sm text-white hover:bg-gray-600 transition">
                    Show more &rarr;
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">
                    View all
                </button>
            </div>
        </main>
    )
}
