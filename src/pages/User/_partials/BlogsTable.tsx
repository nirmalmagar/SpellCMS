import { useEffect, useState } from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Modal from "../../../components/Modal";
import { error } from "console";
import InputField from "../../../components/Form/InputForm";
import Btn from "../../../components/Btn";

type BlogItem = {
  id: string;
  title: string;
  author: string;
  category: string;
  tags: string;
  status: boolean;
  createdAt: string;
  cover?: string;
  created_at?: string;
};

const BlogsTable = () => {
  const [showPopUpModal, setShowPopUpModal] = useState<boolean>(false);
  const [inputFieldValue, setInputFieldValue] = useState<
    Record<string, string>
  >({});
  const [blogList, setBlogList] = useState<BlogItem[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://682b094fab2b5004cb38ca4e.mockapi.io/api/v1/blocklists"
      );
      const data: BlogItem[] = await response.json();
      setBlogList(data);
    } catch (error) {
      console.error("Error fetching blog list:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddBlogs = () => {};
  // delete function
  const handleDelete = async (id: string) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this blog?"
      );
      if (!confirmDelete) return;

      const response = await fetch(
        `https://682b094fab2b5004cb38ca4e.mockapi.io/api/v1/blocklists/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setBlogList((prevList) => prevList.filter((blog) => blog.id !== id));
        console.log(`Blog with id ${id} deleted successfully.`);
      } else {
        console.error("Failed to delete blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const ImageChangeHandler = (e: any) => {
    const imageURL = e.target.files[0];
    setImageUrl(URL.createObjectURL(imageURL));
  };

  const handleFieldChange = (key: string, value: string): void => {
    if (key && value) {
      setInputFieldValue((prev) => ({ ...prev, [key]: value }));
    }
  };
  const handleCloseTap = () => {
    setShowPopUpModal(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Modal
        show={showPopUpModal}
        handleClose={handleCloseTap}
        modalTitle="Add Blog"
        size="lg"
      >
        <form id="lead-form" onSubmit={handleAddBlogs}>
          <div className=" px-4 py-4 rounded-lg border border-gray-200">
          <div className="flex gap-x-4 items-center">
            <div className="relative w-12 h-12">
              {imageUrl ? (
                <img
                  className="rounded w-20 h-10 object-cover"
                  src={imageUrl}
                  alt="image link"
                />
              ) : (
                <PhotoIcon
                  className="h-full w-full text-primary-500"
                  aria-hidden="true"
                />
              )}
            </div>
            <InputField
              labelClassName="text-black"
              className="flex flex-col"
              label="Cover"
              name="cover"
              type="file"
              accept="image/*"
              onChange={(e) => ImageChangeHandler(e)}
            />
            {imageUrl && (
              <Btn
                onClick={() => setImageUrl(null)}
                className="bg-red-500 text-white font-semibold mb-0"
              >
                remove
              </Btn>
            )}
          </div>
            <InputField
              type="text"
              label="Title"
              name="title"
              placeholder="Enter title"
              onChange={(e: any) => {
                handleFieldChange("title", e.target.value);
              }}
            />
            <InputField
              type="text"
              label="Author"
              name="author"
              placeholder="Enter author"
              defaultValue={inputFieldValue?.author}
              onChange={(e: any) => {
                handleFieldChange("author", e.target.value);
              }}
            />
            <InputField
              type="text"
              label="Category"
              name="category"
              placeholder="Enter category"
              defaultValue={inputFieldValue?.category}
              onChange={(e: any) => {
                handleFieldChange("category", e.target.value);
              }}
            />
            <InputField
              type="text"
              label="Tags"
              name="tags"
              placeholder="Enter tags"
              defaultValue={inputFieldValue?.tags} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleFieldChange("tags", e.target.value);
              }}
            />

            <InputField
              type="date"
              label="Created at"
              name="created_at"
              placeholder="enter created date"
              defaultValue={inputFieldValue?.created_at}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleFieldChange("created_at", e.target.value);
              }}
            />

            <div className="bg-white sticky left-4 bottom-0 right-4 pt-6 border-gray-200 flex items-end  justify-between">
              <Btn
                outline="error"
                className="border border-red-500 text-red-500"
                onClick={() => {
                  setShowPopUpModal(false);
                  setInputFieldValue({});
                }}
              >
                Cancel
              </Btn>

              <div className="flex gap-x-4">
                <Btn type="submit" className="bg-blue-600 text-white">
                  Submit
                </Btn>
              </div>
            </div>
          </div>
        </form>
      </Modal>
      {isLoading ? (
        <div className="text-lg flex items-center justify-center mt-[25%]">
          Loading...
        </div>
      ) : (
        <div className="mt-8 rounded-3xl bg-white px-2 pt-2 shadow-default sm:px-7.5 xl:pb-1">
          <div className="relative">
            <h3 className="font-bold text-gray-800 text-xl mt-4">
              Blogs Lists
            </h3>
            <div className="absolute top-0 right-28">
              <button
                type="submit"
                onClick={() => setShowPopUpModal(true)}
                className="text-sm py-1.5 px-4 bg-red-400 cursor-pointer text-white rounded-lg"
              >
                Add Blog
              </button>
            </div>
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
                {blogList.map((data) => (
                  <tr key={data.id} className="text-gray-600">
                    <td className="border-b border-[#eee] py-2 px-2">
                      <img
                        className="w-16 h-16 rounded-lg"
                        src={
                          data.cover ||
                          "https://via.placeholder.com/64x64?text=No+Image"
                        }
                        alt="Blog Cover"
                      />
                    </td>
                    <td className="max-w-40 border-b border-[#eee] py-2 px-2">
                      <p>{data.title || "---"}</p>
                    </td>
                    <td className="max-w-[160px] border-b border-[#eee] py-2 px-2">
                      <p>{data.author || "---"}</p>
                    </td>
                    <td className="border-b border-[#eee] py-2 px-2">
                      <p>{data.category || "---"}</p>
                    </td>
                    <td className="max-w-40 border-b border-[#eee] py-2 px-2">
                      <p>{data.tags || "---"}</p>
                    </td>
                    <td className="max-w-40 border-b border-[#eee] py-2 px-2">
                      <p>{data.status ? "Active" : "Inactive"}</p>
                    </td>
                    <td className="max-w-40 border-b border-[#eee] py-2 px-2">
                      <p>{data.created_at || "---"}</p>
                    </td>
                    <td className="border-b border-[#eee] py-2 px-2">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDelete(data.id)}
                          className="cursor-pointer hover:text-red"
                        >
                          <TrashIcon className="h-[18px] w-[18px] hover:text-red-500" />
                        </button>
                        <button className="ml-3 cursor-pointer">
                          <PencilSquareIcon className="h-[18px] w-[18px] hover:text-blue-700" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsTable;
