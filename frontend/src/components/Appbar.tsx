import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'}>
            <div className="flex flex-col justify-center">
                Medium
            </div>
        </Link>
        <div>
            <Link to={'/publish'}>
                <button className=" mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    New
                </button>

            </Link>
            <Avatar size="big" name="rajan" />
        </div>
    </div>
}