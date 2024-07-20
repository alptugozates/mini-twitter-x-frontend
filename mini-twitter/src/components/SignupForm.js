import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTwitter } from "react-icons/fa";
import { getYear, getMonth, eachDayOfInterval, format } from "date-fns";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [useEmail, setUseEmail] = useState(false);

  const currentYear = getYear(new Date());
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl flex flex-col gap-2 bg-white p-8 rounded shadow-md"
      >
        <div className="flex items-center justify-center mb-8 mt-2">
          <FaTwitter className="text-turquoise text-5xl" />
        </div>
        <div className="flex flex-col gap-4 mb-4 ">
          <p className="font-montserrat text-3xl font-bold">
            Create an account
          </p>
        </div>
        <div className="mb-4">
          <input
            {...register("name", { required: true })}
            className="shadow border font-montserrat text-md rounded w-full py-4 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-red-500 text-xs italic">
              Name is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-6 mb-4">
          {useEmail ? (
            <input
              {...register("email", { required: true })}
              className="shadow font-montserrat text-md border rounded w-full py-4 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          ) : (
            <input
              {...register("phone", { required: true })}
              className="shadow font-montserrat text-md border rounded w-full py-4 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone number"
            />
          )}
          {errors.phone && !useEmail && (
            <span className="text-red-500 text-xs italic">
              Phone number is required
            </span>
          )}
          {errors.email && useEmail && (
            <span className="text-red-500 text-xs italic">
              Email is required
            </span>
          )}
          <div className="flex flex-col justify-center gap-4 items-start">
            <button
              className="font-montserrat text-sm text-turquoise"
              onClick={() => setUseEmail(!useEmail)}
            >
              {useEmail ? "Use phone number" : "Use email"}
            </button>
            <p className="font-montserrat text-xs text-custom-gray">
              Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
              sit. Quis bibendum ante phasellus metus, magna lacinia sed augue.
              Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper
              blandit viverra dignissim eget tellus. Nibh mi massa in molestie a
              sit. Elit congue.
            </p>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            Date of birth
          </label>
          <div className="flex">
            <select
              {...register("month", { required: true })}
              className="shadow border rounded-md w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            >
              <option value="">Month</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {format(new Date(0, month - 1), "MMMM")}
                </option>
              ))}
            </select>
            <select
              {...register("day", { required: true })}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            >
              <option value="">Day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              {...register("year", { required: true })}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {errors.month && (
            <span className="text-red-500 text-xs italic">
              Month is required
            </span>
          )}
          {errors.day && (
            <span className="text-red-500 text-xs italic">Day is required</span>
          )}
          {errors.year && (
            <span className="text-red-500 text-xs italic">
              Year is required
            </span>
          )}
        </div>
        <div className="flex items-center justify-center text-center mt-4 px-4">
          <button
            className="bg-turquoise text-md font-montserrat hover:bg-turquoise-400 text-white font-bold py-3 w-full rounded-3xl "
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
