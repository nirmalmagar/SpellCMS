import React, { FormEvent, useEffect, useState } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Btn from "../../../components/Btn";
import InputField from "../../../components/Form/InputForm";
import { BlockList } from "net";

type BlogItem = {
  id: number;
  title: string;
  author:string;
  category: string;
  tags: string ;
  status:boolean;
  createdAt: string;
};

const BlogsTable = () => {
  const [blogList, setBlogList] = useState<BlogItem[]>([]);
  const BlogFun = async () => {
    const response = await fetch(
      "https://682b094fab2b5004cb38ca4e.mockapi.io/api/v1/blocklists",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setBlogList(data);
  };
  useEffect(() => {
    BlogFun();
  }, []);
  console.log("blog listss", blogList);
  return (
    <div className="mt-8 rounded-3xl bg-white pb-2.5 px-2 pt-2 shadow-default sm:px-7.5 xl:pb-1">
      <div className="relative">
        <div className="absolute top-4 right-28">
          <button
            // onClick={() => setExportPopUpModal(true)}
            type="submit"
            className="text-sm py-1.5 px-4 bg-red-400 text-white rounded-lg"
          >
            Export
          </button>
        </div>
        heading...
        {/* {heading && <AddBookLists mutate={mutate} />} */}
      </div>
      <div className="max-w-full overflow-x-auto mt-8">
        <table className="w-full text-sm table-auto">
          <thead>
            <tr className="border-b-2 border-gray-200 text-left">
              <th className="min-w-[80px] py-4 px-2 font-medium text-black">
                Cover
              </th>
              <th className="min-w-[120px] py-4 px-2 font-medium text-black">
                Title
              </th>
              <th className="max-w-[120px] py-4 px-2 font-medium text-black">
                Author
              </th>
              <th className="min-w-[120px] py-4 px-2 font-medium text-black">
                Category
              </th>
              <th className="min-w-[20px] py-4 px-2 font-medium text-black">
                Tags
              </th>
              <th className="min-w-[20px] py-4 px-2 font-medium text-black">
                Status
              </th>
              <th className="min-w-[20px] py-4 px-2 font-medium text-black">
                Create Date
              </th>
              <th className="min-w-[20px] py-4 px-2 font-medium text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogList?.map((data: Record<string, any>, index: number) => {
              return (
                <tr className="text-gray-500">
                  <td className="border-b border-[#eee] py-2 px-2">
                    <img
                      className="w-16 h-16 rounded-lg"
                      src={data?.cover ? data?.cover : "no cover img"}
                      alt="dummy-cover images of blog"
                    />
                  </td>
                  <td className="max-w-40 border-b border-[#eee] py-2 px-2">
                    <p>
                      {data?.title ? data?.title : "---"}
                    </p>
                  </td>
                  <td className="max-w-[160px] border-b border-[#eee] py-2 px-2">
                    <p>{data?.author ? data?.author : "---"}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-2 px-2">
                    <p>
                      {data?.category ? data?.category : "---"}
                    </p>
                  </td>
                  <td className=" max-w-40 border-b border-[#eee] py-2 px-2">
                    <p>
                      {data?.tags ? data?.tags : "---"}
                    </p>
                  </td>
                  <td className=" max-w-40 border-b border-[#eee] py-2 px-2">
                    <p>
                      {data?.status ? data?.status : "---"}
                    </p>
                  </td>
                  <td className=" max-w-40 border-b border-[#eee] py-2 px-2">
                    <p>
                      {data?.created_at ? data?.created_at : "---"}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-2 px-2">
                    <p className="text-black">
                      <button
                        className="hover:text-red"
                        // onClick={() => showSwal(booksList?.id)}
                      >
                        <TrashIcon className="h-[18px] w-[18px] hover:text-red-500" />
                      </button>
                      <button
                        // onClick={() => openEditBox(booksList?.id)}
                        className="ml-3"
                      >
                        <PencilSquareIcon className="h-[18px] w-[18px] hover:text-blue-700" />
                      </button>
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogsTable;
